const { app, BrowserWindow, ipcMain  } = require('electron/main')
const path = require('node:path')
const fs = require("node:fs")

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js')
    }
  })

  win.setMenuBarVisibility(false)
  win.loadFile('app/src/index.html')
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })

})

app.on('window-all-closed', () => {
    app.quit()
})