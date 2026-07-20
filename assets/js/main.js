(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const year = document.querySelector("[data-year]");
  const leadForm = document.getElementById("leadForm");
  const formStatus = document.getElementById("form-status");
  const LEAD_EMAIL = "sar.romanchenko@gmail.com";

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    };

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      setOpen(open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  }

  document.querySelectorAll(".person-photo img").forEach((img) => {
    const markFailed = () => {
      img.setAttribute("data-failed", "true");
      img.closest(".person-photo")?.classList.add("is-placeholder");
    };

    if (img.complete && img.naturalWidth === 0) {
      markFailed();
      return;
    }

    img.addEventListener("error", markFailed);
  });

  const setFormStatus = (message, type) => {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.hidden = false;
    formStatus.className = "form-status is-" + type;
  };

  // mailto-агент: заявка уходит через почтовый клиент, не в таблицу/CRM
  leadForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const consentPD = document.getElementById("consent-pd")?.checked;
    if (!consentPD) {
      setFormStatus("Пожалуйста, подтвердите согласие на обработку персональных данных.", "error");
      return;
    }

    const name = (document.getElementById("name")?.value || "").trim();
    const phone = (document.getElementById("phone")?.value || "").trim();
    const email = (document.getElementById("email")?.value || "").trim();
    const message = (document.getElementById("message")?.value || "").trim();
    const news = !!document.getElementById("consent-news")?.checked;

    if (!name || !phone || !email) {
      setFormStatus("Заполните имя, телефон и email.", "error");
      return;
    }

    const subject = encodeURIComponent("Заявка с сайта «Психология и развитие»");
    const body = encodeURIComponent(
      "Имя: " + name + "\n" +
      "Телефон: " + phone + "\n" +
      "Email: " + email + "\n" +
      "Согласие на рассылку: " + (news ? "да" : "нет") + "\n" +
      "Дата: " + new Date().toLocaleString("ru-RU") + "\n\n" +
      "Запрос:\n" + (message || "")
    );

    window.location.href = "mailto:" + LEAD_EMAIL + "?subject=" + subject + "&body=" + body;
    setFormStatus(
      "Если почтовый клиент не открылся — напишите на sar.romanchenko@gmail.com или в Telegram.",
      "success"
    );
  });
})();
