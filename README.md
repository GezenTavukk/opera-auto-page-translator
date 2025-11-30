# 🌍 Auto Page Translator (Chrome & Opera Extension)

A lightweight browser extension that automatically injects a non-intrusive translation widget into web pages. It detects the user's system language and offers a one-click translation using the Google Translate infrastructure.

## 🚀 Features

* **Dynamic Language Support:** Automatically detects the user's browser language and translates target pages accordingly.
* **Zero Dependencies:** Built with pure JavaScript, HTML, and CSS. No external libraries.
* **Privacy Focused:** No data tracking or collection. It only redirects to Google Translate upon user request.
* **Cross-Browser:** Compatible with Chromium-based browsers (Google Chrome, Opera, Edge, Brave).

## 🛠️ Installation (Developer Mode)

Since this extension is not yet listed on the Chrome Web Store, you can install it manually using "Developer Mode".

1.  **Download:** Click the green **Code** button above and select **Download ZIP**. Extract the files to a folder.
2.  **Open Extensions Page:**
    * **Chrome:** Go to `chrome://extensions`
    * **Opera:** Go to `opera://extensions`
    * **Edge:** Go to `edge://extensions`
3.  **Enable Developer Mode:** Toggle the switch located at the top right corner of the page.
4.  **Load Extension:** Click the **Load Unpacked** button and select the folder you extracted in Step 1.

## 📖 Usage

1.  Visit any website (e.g., a foreign news site).
2.  A notification panel will appear at the top-right corner asking: *"Sayfayı çevireyim mi?"* (or your localized text).
3.  Click **"Çevir"** (Translate) to translate the entire page.
4.  Click **"Kapat"** (Close) to dismiss the panel.

## 📂 Project Structure

* `manifest.json`: Extension configuration and permissions (Manifest V3).
* `content.js`: The core logic that injects the UI and handles translation redirection.
* `icon.png`: Extension icon.

---
*Developed for educational purposes.*
