(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const year = document.querySelector("[data-year]");

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
    let lastFocused = null;

    const getFocusable = () => {
      const inNav = [...nav.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')];
      return [toggle, ...inNav].filter(
        (el) => el && !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true"
      );
    };

    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
      document.body.style.overflow = open ? "hidden" : "";

      if (open) {
        lastFocused = document.activeElement;
        const focusable = getFocusable();
        (focusable[0] || nav).focus?.();
      } else if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
        lastFocused = null;
      } else {
        toggle.focus();
      }
    };

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      setOpen(open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (toggle.getAttribute("aria-expanded") !== "true") return;

      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
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
})();
