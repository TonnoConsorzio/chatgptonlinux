# ChatGPT on Linux 🐧

Un'app desktop non ufficiale per portare ChatGPT su Linux, costruita con Electron.

> **Nota personale**: questo è il mio secondo programma. Il primo è durato appena un giorno prima di rompersi 😅. Sono italiano, innamorato dell'informatica fin da bambino, e solo adesso sto imparando a programmare con costanza, aiutandomi con un'AI per capire cosa fare passo dopo passo. Ogni consiglio è benvenuto! 🇮🇹

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Linux-green.svg)

## ✨ Funzionalità

- 🖥️ Applicazione desktop nativa per Linux
- 🕸️ Wrapper leggero che apre direttamente https://chatgpt.com
- 🔒 Ambiente isolato con gestione sicura dei link esterni
- 📦 Pacchetti AppImage, RPM e DEB pronti all’uso
- 🪟 Finestra minimale senza barre o elementi invasivi
- ⚙️ Workflow GitHub Actions per build automatiche

## 📥 Download

Vai nella sezione **[Releases](https://github.com/TonnoConsorzio/chatgptonlinux/releases)** per scaricare l’ultima versione disponibile.

### Formati disponibili

- **AppImage**: funziona su tutte le distribuzioni (consigliato)
- **RPM**: ideale per Fedora, RHEL, CentOS, openSUSE
- **DEB**: per Ubuntu, Debian, Linux Mint e derivate

## 🔧 Installazione

### AppImage (consigliato)

```bash
# Scarica l'AppImage dalle Releases
chmod +x ChatGPT-*.AppImage

# Avvia l'app
./ChatGPT-*.AppImage
```

### RPM (Fedora, RHEL, CentOS, openSUSE)

```bash
sudo dnf install ./ChatGPT-*.rpm
```

### DEB (Ubuntu, Debian, Linux Mint)

```bash
sudo dpkg -i ChatGPT-*.deb
sudo apt-get install -f  # Risolve eventuali dipendenze mancanti
```

## 🧹 Disinstallazione pulita

### AppImage

```bash
rm -f ChatGPT-*.AppImage
rm -rf ~/.config/ChatGPT\ Desktop
```

L’AppImage è portabile: basta eliminare il file scaricato e, se vuoi azzerare le impostazioni, rimuovere anche la cartella di configurazione.

### RPM

```bash
sudo dnf remove chatgpt-desktop
rm -rf ~/.config/ChatGPT\ Desktop
```

### DEB

```bash
sudo apt remove chatgpt-desktop
sudo apt autoremove --purge chatgpt-desktop
rm -rf ~/.config/ChatGPT\ Desktop
```

La directory `~/.config/ChatGPT Desktop` contiene dati locali (sessioni webview, cache, ecc.). Eliminandola ripulisci completamente il profilo dell’app.

## 🛠️ Sviluppo

Se vuoi provare l’app dal sorgente o contribuire:

### Prerequisiti

- Node.js >= 18
- npm >= 9

### Setup

```bash
git clone https://github.com/TonnoConsorzio/chatgptonlinux.git
cd chatgptonlinux
npm install
npm start
```

### Build

```bash
# Tutti i formati
npm run build:all

# Formati singoli
npm run build:appimage
npm run build:rpm
npm run build:deb
```

I pacchetti generati si trovano nella cartella `dist/`.

## 📖 Come funziona

Questa applicazione è un wrapper Electron semplice per https://chatgpt.com:

- **src/main.js**: crea la finestra principale e instrada i link esterni
- **src/preload.js**: espone al renderer solo le API sicure
- **src/renderer/**: contiene l’HTML/CSS minimal e il webview per ChatGPT
- **package.json**: dipendenze, script npm e configurazione di electron-builder
- **.github/workflows/build.yml**: automatizza la creazione dei pacchetti quando etichetto una versione `v*`

Il 20% del codice è dedicato a caricare ChatGPT, l’80% del valore sta nell’avere un’app dedicata sempre a portata di click.

## 🤝 Contribuire

Sto imparando e ogni aiuto è prezioso! Se vuoi dare una mano:

1. Fai il fork del progetto
2. Crea un branch (`git checkout -b feature/NuovaIdea`)
3. Implementa e committa (`git commit -m "Aggiungi NuovaIdea"`)
4. Apri una Pull Request

Mi servono in particolare feedback su bug, UI/UX, documentazione, compatibilità con più distro e nuove idee.

## 🗂️ Struttura del progetto

```
chatgptonlinux/
├── src/
│   ├── main.js          # Processo principale di Electron
│   ├── preload.js       # Bridge sicuro verso il renderer
│   └── renderer/        # HTML/CSS/JS dell'interfaccia
├── build/
│   └── icons/icon.png   # Icona dell'app
├── package.json         # Script e configurazione build
├── README.md            # Questo file
└── .github/workflows/
    └── build.yml        # GitHub Actions per la CI
```

## 🙏 Ringraziamenti

- [OpenAI](https://openai.com) per ChatGPT
- [Electron](https://electronjs.org) per il framework
- La community Linux per l’ispirazione
- Tutte le AI che mi stanno aiutando a imparare più velocemente

## ⚠️ Disclaimer

Questo è un progetto **non ufficiale** e non è affiliato né approvato da OpenAI. È solo un modo comodo per usare ChatGPT in una finestra dedicata.

## 📄 Licenza

Distribuito sotto licenza [MIT](LICENSE).

## 👨‍💻 Su di me

Sono un appassionato italiano di tecnologia e sto muovendo i primi passi nello sviluppo desktop. Questo è il mio secondo progetto: il primo è "morto" dopo un giorno, ma ho deciso di non mollare e continuare a imparare con piccoli esperimenti supportato da un’assistente AI.

Se trovi problemi o vuoi suggerire qualcosa apri pure una issue o una PR. Grazie! 🚀

## 📧 Contatti

- GitHub: [@TonnoConsorzio](https://github.com/TonnoConsorzio)
- Progetto: [github.com/TonnoConsorzio/chatgptonlinux](https://github.com/TonnoConsorzio/chatgptonlinux)

---

Made with ❤️ in Italy 🇮🇹 | Powered by curiosity 🤔 e tanta caffeina ☕
