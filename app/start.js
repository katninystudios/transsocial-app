const { app, BrowserWindow, ipcMain, shell } = require("electron");
const path = require("path");

// create the main window
let mainWindow;
let mainUrl = "http://localhost:3000";

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, "../api/preload.js"),
            contextIsolation: true,
            nodeIntegration: false,
        },
        titleBarStyle: "hidden"
    });

    // open external links in default browser
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: "deny" };
    });

    mainWindow.webContents.setWindowOpenHandler((details) => {
        if (!details.url.startsWith(mainUrl) && details.disposition === "foreground-tab"  || !details.url.startsWith(mainUrl) && details.disposition === "new-window" || !details.url.startsWith(mainUrl) && details.disposition === "background-tab") {
            shell.openExternal(details.url);
            return { action: "deny" };
        }
    });

    // start!
    mainWindow.loadURL(`${mainUrl}/home`);
}

// when ready, create window
app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// on macos, make sure all instances of TransSocial are closed
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

// when a window action is requested,
// respond to it appropriately
ipcMain.on("window-action", (event, action) => {
    const win = BrowserWindow.getFocusedWindow();
    if (!win) return;

    switch (action) {
        // minimize app
        case "minimize":
            win.minimize();
            break;
        case "maximize":
            // maximize/unmaximize app
            if (win.isMaximized()) {
                win.unmaximize();
            } else {
                win.maximize();
            }
            break;
        case "close":
            win.close();
            break;
    }
});