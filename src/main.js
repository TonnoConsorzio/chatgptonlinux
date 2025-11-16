const { app, BrowserWindow, nativeTheme, dialog, ipcMain, shell } = require('electron');
const path = require('path');

const CHATGPT_URL = process.env.CHATGPT_URL || 'https://chatgpt.com/';

let mainWindow;
process.env.CHATGPT_URL = CHATGPT_URL;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: nativeTheme.shouldUseDarkColors ? '#0f1115' : '#f7f7f7',
    title: 'ChatGPT Desktop',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
      spellcheck: true,
      webviewTag: true
    }
  });

  mainWindow.removeMenu();
  mainWindow
    .loadFile(path.join(__dirname, 'renderer/index.html'))
    .catch((error) => {
      dialog.showErrorBox('Impossibile caricare l’interfaccia', error.message);
    });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.handle('open-devtools', (event) => {
  event?.sender?.openDevTools({ mode: 'detach' });
});

ipcMain.handle('open-external', (_event, url) => {
  if (!url) {
    return;
  }

  shell.openExternal(url).catch((error) => {
    dialog.showErrorBox('Impossibile aprire il link', error.message);
  });
});
