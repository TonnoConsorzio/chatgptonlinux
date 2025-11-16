# ChatGPT on Linux 🐧

An unofficial Electron desktop app that keeps ChatGPT one click away on Linux.

> **Personal note:** this is only my second program. The first one “died” after a single day 😅, but I’m still here! I’m an Italian maker who has loved computers since childhood, and I’m finally learning to build desktop apps with the help of an AI co-pilot. Feedback means a lot to me. 🇮🇹

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Linux-green.svg)

## ✨ Features

- 🖥️ Native desktop experience dedicated to chatgpt.com
- 🕸️ Lightweight wrapper that loads the official web app
- 🔒 Sandboxed preload bridge with safe external-link handling
- 📦 Prebuilt AppImage, RPM, and DEB packages
- 🪟 Minimal UI: just the ChatGPT window, nothing else
- ⚙️ GitHub Actions workflow that builds on every `v*` tag

## 📥 Download

Grab the latest binaries from **[Releases](https://github.com/TonnoConsorzio/chatgptonlinux/releases)**.

### Available formats

- **AppImage** – runs on any mainstream distro (recommended)
- **RPM** – works best on Fedora, RHEL, CentOS, openSUSE
- **DEB** – for Ubuntu, Debian, Linux Mint, Pop!\_OS, etc.

## 🔧 Installation

### AppImage (recommended)

```bash
# Download from Releases
chmod +x ChatGPT-*.AppImage

# Launch
./ChatGPT-*.AppImage
```

### RPM (Fedora, RHEL, CentOS, openSUSE)

```bash
sudo dnf install ./ChatGPT-*.rpm
```

### DEB (Ubuntu, Debian, Linux Mint)

```bash
sudo dpkg -i ChatGPT-*.deb
sudo apt-get install -f  # Pull missing dependencies if needed
```

## 🧹 Clean Uninstall

### AppImage

```bash
rm -f ChatGPT-*.AppImage
rm -rf ~/.config/ChatGPT\ Desktop
```

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

The directory `~/.config/ChatGPT Desktop` stores local webview sessions and cache. Removing it resets everything.

## 🛠️ Development

Want to see how it works or contribute?

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Setup

```bash
git clone https://github.com/TonnoConsorzio/chatgptonlinux.git
cd chatgptonlinux
npm install
npm start
```

### Building

```bash
# All formats
npm run build:all

# Single targets
npm run build:appimage
npm run build:rpm
npm run build:deb
```

Artifacts are placed inside the `dist/` folder.

## 📖 How It Works

This project is a thin Electron wrapper around https://chatgpt.com:

- **src/main.js** – creates the BrowserWindow and intercepts external URLs
- **src/preload.js** – exposes a safe API to the renderer
- **src/renderer/** – minimal HTML/CSS/JS hosting the webview
- **package.json** – scripts, dependencies, electron-builder config
- **.github/workflows/build.yml** – CI pipeline that packages for Linux

Roughly 20% of the code loads ChatGPT; the other 80% delivers a native-feeling workflow.

## 🤝 Contributing

I’m still learning and every bit of help matters:

1. Fork the repository
2. Create a branch (`git checkout -b feature/AmazingIdea`)
3. Implement and commit (`git commit -m "Add AmazingIdea"`)
4. Open a Pull Request

Bug reports, UI/UX ideas, docs fixes, distro compatibility tests, or new feature suggestions are all welcome.

## 🗂️ Project Structure

```
chatgptonlinux/
├── src/
│   ├── main.js          # Electron main process
│   ├── preload.js       # Secure bridge
│   └── renderer/        # Minimal UI + webview
├── build/
│   └── icons/icon.png   # Application icon
├── package.json         # Scripts + build config
├── README.md            # You are here
└── .github/workflows/
    └── build.yml        # GitHub Actions pipeline
```

## 🙏 Acknowledgments

- [OpenAI](https://openai.com) for ChatGPT
- [Electron](https://electronjs.org) for the framework
- The Linux community for constant inspiration
- The AI assistants helping me learn faster

## ⚠️ Disclaimer

This project is **unofficial** and not affiliated with or endorsed by OpenAI. It simply embeds chatgpt.com inside a desktop shell.

## 📄 License

Released under the [MIT](LICENSE) license.

## 👨‍💻 About Me

I’m an Italian developer taking my first serious steps into desktop software. This is my second project—my first experiment broke straight away, but I kept going with small practice apps, always with an AI mentor nearby.

If you spot issues or have suggestions, please open an issue or PR. Thank you! 🚀

## 📧 Contact

- GitHub: [@TonnoConsorzio](https://github.com/TonnoConsorzio)
- Project: [github.com/TonnoConsorzio/chatgptonlinux](https://github.com/TonnoConsorzio/chatgptonlinux)

---

Made with ❤️ in Italy 🇮🇹 | Fueled by curiosity 🤔 and strong coffee ☕
