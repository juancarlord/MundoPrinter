const { app, BrowserWindow } = require('electron')
require('update-electron-app')()
function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 850,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.setMenuBarVisibility(false)
    win.loadFile('index.html')
}
app.whenReady().then(createWindow)

app.on('window-all-closed', ()=>{
    if (process.platform != 'darwin'){
        app.quit()
    }
})

app.on('activate', ()=>{
    if (BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})