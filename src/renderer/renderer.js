const webview = document.getElementById('chatgpt-view');
const status = document.getElementById('status');
const reloadBtn = document.getElementById('reload-btn');
const devToolsBtn = document.getElementById('devtools-btn');

const chatUrl = window.chatgptApp.chatUrl;
webview.src = chatUrl;

const setStatus = (message) => {
  status.textContent = message;
};

webview.addEventListener('did-start-loading', () => setStatus('Caricamento di ChatGPT…'));
webview.addEventListener('dom-ready', () => setStatus('ChatGPT è pronto'));
webview.addEventListener('did-fail-load', (event) => {
  if (event.isMainFrame) {
    setStatus(`Errore: ${event.errorDescription}`);
  }
});

webview.addEventListener('new-window', (event) => {
  window.chatgptApp.openExternal(event.url);
});

reloadBtn.addEventListener('click', () => {
  webview.reload();
  setStatus('Ricarico ChatGPT…');
});

devToolsBtn.addEventListener('click', () => {
  window.chatgptApp.openDevTools();
});
