const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("isTransSocialApp", true);

contextBridge.exposeInMainWorld("transsocial", {
    windowAction: (action) => ipcRenderer.send("window-action", action)
});