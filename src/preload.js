const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('chatgptApp', {
  chatUrl: process.env.CHATGPT_URL || 'https://chatgpt.com/',
  openDevTools: () => ipcRenderer.invoke('open-devtools'),
  openExternal: (url) => ipcRenderer.invoke('open-external', url)
});
