## 🛠 Building the App
### Dependencies
### Linux
To build the TransSocial app on Linux, you'll need the following dependencies:

**Debian**: `sudo apt install libwebkit2gtk-4.1-dev`, `build-essential`, `curl`, `wget`, `file`, `libxdo-dev`, `libssl-dev`, `libayatana-appindicator3-dev`, `librsvg2-dev`, `nodejs`, `npm`

**Arch**: `sudo pacman -S --needed webkit2gtk-4.1 base-devel curl wget file openssl appmenu-gtk-module libappindicator-gtk3 librsvg nodejs npm`

**Fedora**: `sudo dnf install webkit2gtk4.1-devel openssl-devel curl wget file libappindicator-gtk3-devel librsvg2-devel nodejs`
Then, `sudo dnf group install "c-development"`

**Gentoo**: `sudo emerge --ask net-libs/webkit-gtk:4.1 dev-libs/libappindicator net-misc/curl net-misc/wget sys-apps/file`

**openSUSE**: `sudo zypper in webkit2gtk3-devel libopenssl-devel curl wget file libappindicator3-1  librsvg-devel nodejs`
Then: `sudo zypper in -t pattern devel_basis`

**Alpine Linux**: `sudo apk add build-base webkit2gtk curl wget file openssl libayatana-appindicator-dev librsvg nodejs npm`

You will also need Rust. Instructions can be found at https://www.rust-lang.org/tools/install if you do not have it installed already.

### Windows
To build the TransSocial app on Windows, you'll need the following:

(If you have an older build of Windows 10 (1802 or older)) [The WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/?form=MA13LH#download-section). If you're on the latest version of Windows 10 or on Windows 11, this is already bundled with your system.

Rust: https://www.rust-lang.org/tools/install

NodeJS: https://nodejs.org/

### macOS
Follow Tauri's instructions at https://tauri.app/start/prerequisites/#macos.

## Cloning the Repo
Assuming you have Git (which you should), run `git clone https://github.com/katninystudios/transsocial-app`, then cd into the folder (`cd transsocial-app`)

Install the NPM dependencies using `npm install`.

Create the `src` folder (whether by using a file manager or running `src`), then put TransSocial source code into it, either via a submodule or just copy-pasting it into there.

Then run `npm run tauri dev`.

You now have the development version of TransSocial's app running!