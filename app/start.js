const { app, BrowserWindow } = require("electron");

// create the main window
let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
    });

    mainWindow.loadURL("https://transs.social/home");
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