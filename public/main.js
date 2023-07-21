const { app, BrowserWindow, ipcMain, Menu } = require('electron');

const template = [
  // { role: 'appMenu' }
  ...([]),
  // { role: 'fileMenu' }
  {
    label: 'Mantenedores',
    submenu: [
      { role: 'quit' }
    ]
  },
  // { role: 'editMenu' }
  {
    label: 'Consultas',
    submenu: [
      { role: 'undo' },
      { role: 'redo' }
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'Informes',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' }
    ]
  },
]

const path = require('path')
const isDev = require('electron-is-dev')

require('@electron/remote/main').initialize()

const menu = Menu.buildFromTemplate(template);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // win.setMenu(menu);

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : 'file:///' + (path.join(__dirname, '../build/index.html#/')).replace(/\\/g, '/')
  )
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.on('notify', (_, message) => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),

    }
  })
  win.removeMenu()
  win.loadURL(
    isDev
      ? 'http://localhost:3000/settings'
      : 'file:///' + (path.join(__dirname, '../build/index.html#/settings')).replace(/\\/g, '/')
  )
})