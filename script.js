/* =====================================================
   SOCIAL LINK IN BIO — PROFESSIONAL SCRIPT
   Author: You
   Purpose: Redirect users to social platforms cleanly
===================================================== */

(() => {
  "use strict";

  /* =========================
     EDIT YOUR LINKS HERE 👇
     (ضع روابطك مرة واحدة فقط)
  ========================= */
  const SOCIAL_LINKS = {
    instagram: "https://www.instagram.com/programadorofficial",
    tiktok: "https://www.tiktok.com/@programadorofficial",
    facebook: "https://www.facebook.com/programadorofficial",
    youtube: "https://www.youtube.com/@programadorofficial",
    x: "https://x.com/fouadofficial5",
    snapchat: "https://www.snapchat.com/add/username",
    whatsapp: "https://wa.me/212642138756",
    telegram: "https://t.me/username",
    linkedin: "https://www.linkedin.com/in/username",
    github: "https://github.com/username",
    discord: "https://discord.gg/invitecode",
    twitch: "https://www.twitch.tv/username",
    threads: "https://www.threads.net/@username",
    pinterest: "https://www.pinterest.com/username",
    reddit: "https://www.reddit.com/u/username",
    spotify: "https://open.spotify.com/user/username",
    soundcloud: "https://soundcloud.com/username",
    website: "https://yourwebsite.com",
    email: "mailto:youremail@gmail.com"
  };

  /* =========================
     UTILS
  ========================= */
  const isValidURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  /* =========================
     BUTTON HANDLER
  ========================= */
  const buttons = document.querySelectorAll(".link-btn");

  buttons.forEach((btn) => {
    const platform = btn.dataset.platform;

    // Disable button if no link
    if (!SOCIAL_LINKS[platform]) {
      btn.style.opacity = "0.45";
      btn.style.cursor = "not-allowed";
      btn.setAttribute("aria-disabled", "true");
      return;
    }

    btn.addEventListener("click", () => {
      const url = SOCIAL_LINKS[platform];

      // Visual feedback
      btn.classList.add("is-clicked");
      setTimeout(() => btn.classList.remove("is-clicked"), 200);

      // Validation
      if (!isValidURL(url) && !url.startsWith("mailto:")) {
        console.error(`Invalid URL for ${platform}`);
        return;
      }

      openLink(url);
    });
  });

  /* =========================
     AUTO YEAR
  ========================= */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* =========================
     ACCESSIBILITY (Keyboard)
  ========================= */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const focused = document.activeElement;
      if (focused && focused.classList.contains("link-btn")) {
        focused.click();
      }
    }
  });

})();
