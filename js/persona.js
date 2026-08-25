import { COPY, PERSONAS } from "./content.js";

const KEY = "mw-persona-v2";

export function initPersona({ onChange }) {
  const buttons = [...document.querySelectorAll("button[data-persona]")];
  let current = localStorage.getItem(KEY);
  if (!PERSONAS[current]) current = "exec";

  function apply(id, persist = true) {
    current = id;
    document.body.dataset.persona = id;
    if (persist) localStorage.setItem(KEY, id);

    const copy = COPY[id];
    document.querySelectorAll("[data-copy]").forEach((el) => {
      const key = el.dataset.copy;
      if (copy[key]) el.textContent = copy[key];
    });

    buttons.forEach((btn) => {
      const on = btn.dataset.persona === id;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });

    document.querySelectorAll("[data-for]").forEach((el) => {
      const allowed = el.dataset.for.split(/\s+/);
      el.hidden = !allowed.includes(id);
    });

    onChange?.(id);
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => apply(btn.dataset.persona));
  });

  apply(current, false);
  return {
    get() {
      return current;
    },
    set: apply,
  };
}
