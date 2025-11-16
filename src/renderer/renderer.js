const webview = document.getElementById('chatgpt-view');

const chatUrl = window.chatgptApp.chatUrl;
webview.src = chatUrl;

webview.addEventListener('new-window', (event) => {
  window.chatgptApp.openExternal(event.url);
});
