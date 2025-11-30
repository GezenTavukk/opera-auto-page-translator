/**
 * Auto Page Translator Extension
 * v1.0.0
 */

{
    const CONFIG = {
        translateURL: "https://translate.google.com/translate?sl=auto&tl=tr&u=",
        ui: {
            text: "Sayfayı Türkçe'ye çevireyim mi?",
            btnYes: "Çevir",
            btnNo: "Kapat",
            primaryColor: "#1a73e8",
            bgColor: "#ffffff",
            textColor: "#3c4043"
        }
    };

    function init() {
        if (window.location.hostname.includes("translate.google.com")) return;
        createTranslationPanel();
    }

    function createTranslationPanel() {
        const container = document.createElement("div");
        applyStyles(container, {
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: "2147483647",
            backgroundColor: CONFIG.ui.bgColor,
            border: "1px solid #dadce0",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            padding: "12px 16px",
            borderRadius: "8px",
            fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            transition: "opacity 0.3s ease"
        });

        container.innerHTML = `
            <div style="display:flex; align-items:center; gap:8px;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Translate_logo.svg" width="18" alt="Translate Icon">
                <span style="color:${CONFIG.ui.textColor}; font-size:14px; font-weight:500;">${CONFIG.ui.text}</span>
            </div>
            <div style="display:flex; gap:8px;">
                <button id="apt-btn-translate" style="cursor:pointer; background:${CONFIG.ui.primaryColor}; color:white; border:none; padding:6px 16px; border-radius:4px; font-weight:bold; font-size:12px;">${CONFIG.ui.btnYes}</button>
                <button id="apt-btn-close" style="cursor:pointer; background:transparent; color:#5f6368; border:1px solid #dadce0; padding:6px 12px; border-radius:4px; font-size:12px;">${CONFIG.ui.btnNo}</button>
            </div>
        `;

        document.body.appendChild(container);

        document.getElementById("apt-btn-translate").addEventListener("click", () => {
            const currentUrl = window.location.href;
            window.location.href = CONFIG.translateURL + encodeURIComponent(currentUrl);
        });

        document.getElementById("apt-btn-close").addEventListener("click", () => {
            container.style.opacity = "0";
            setTimeout(() => container.remove(), 300);
        });
    }

    function applyStyles(element, styles) {
        for (const property in styles) {
            element.style[property] = styles[property];
        }
    }

    init();
}