import { CASES } from "./content.js";

const FIGURES = {
  ai: `
    <div class="figure figure--compare">
      <div>
        <p class="figure__kicker">Legacy</p>
        <strong>3–4 hours</strong>
        <span>per script · manual research</span>
      </div>
      <div>
        <p class="figure__kicker">Grounded AI</p>
        <strong>5–10 min</strong>
        <span>draft · human polish</span>
      </div>
    </div>`,
  dtu: `
    <ol class="figure figure--phases">
      <li><span>01</span>Initiation</li>
      <li><span>02</span>Planning</li>
      <li><span>03</span>Creation</li>
      <li><span>04</span>Launch</li>
      <li><span>05</span>Improve</li>
    </ol>`,
  columbia: `
    <div class="figure figure--compare">
      <div>
        <p class="figure__kicker">Before</p>
        <strong>Every course different</strong>
        <span>Not responsive · hard to maintain</span>
      </div>
      <div>
        <p class="figure__kicker">After</p>
        <strong>One template</strong>
        <span>300+ courses · still the standard</span>
      </div>
    </div>`,
  cleveland: `
    <ol class="figure figure--stack">
      <li>Emergency transition</li>
      <li>Faculty Manual</li>
      <li>QM-inspired review</li>
      <li>Committee + QM Coordinator</li>
    </ol>`,
};

export function initCases({ getPersona, cone, onOpen, onRead, onClose }) {
  const root = document.getElementById("case-overlay");
  const dialog = document.getElementById("case-dialog");
  if (!root || !dialog) return { close() {} };

  const fields = {
    number: root.querySelector("[data-field=number]"),
    tag: root.querySelector("[data-field=tag]"),
    title: root.querySelector("[data-field=title]"),
    meta: root.querySelector("[data-field=meta]"),
    summary: root.querySelector("[data-field=summary]"),
    approach: root.querySelector("[data-field=approach]"),
    outcomes: root.querySelector("[data-field=outcomes]"),
    close: root.querySelector("[data-field=close]"),
    figure: root.querySelector("[data-field=figure]"),
  };

  let openId = null;
  let lastFocus = null;
  let readTimer = 0;

  function pick(data, key) {
    const persona = getPersona();
    const value = data[key];
    if (typeof value === "string") return value;
    return value[persona] || value.explorer || value.exec;
  }

  function fill(data) {
    root.style.setProperty("--case", data.color);
    fields.number.textContent = data.number;
    fields.tag.textContent = data.tag;
    fields.title.textContent = data.title;
    fields.meta.textContent = data.meta;
    fields.summary.textContent = pick(data, "summary");
    fields.approach.textContent = pick(data, "approach");
    fields.close.textContent = pick(data, "close");
    const outcomes = pick(data, "outcomes");
    fields.outcomes.replaceChildren(
      ...outcomes.map((line) => {
        const li = document.createElement("li");
        li.textContent = line;
        return li;
      }),
    );
    fields.figure.innerHTML = FIGURES[data.figure] || "";
  }

  function open(id, card) {
    const data = CASES.find((item) => item.id === id);
    if (!data) return;
    lastFocus = card || document.activeElement;
    fill(data);
    openId = id;
    root.hidden = false;
    document.body.classList.add("is-cased");
    dialog.scrollTop = 0;
    requestAnimationFrame(() => root.classList.add("is-open"));
    dialog.focus();
    cone?.filter(data.skills, `Skills in ${data.title}`);
    onOpen?.(id);
    clearTimeout(readTimer);
    readTimer = window.setTimeout(() => onRead?.(id), 6500);
  }

  function close() {
    if (!openId) return;
    openId = null;
    clearTimeout(readTimer);
    root.classList.remove("is-open");
    document.body.classList.remove("is-cased");
    cone?.reset();
    window.setTimeout(() => {
      root.hidden = true;
      lastFocus?.focus?.();
    }, 280);
    onClose?.();
  }

  document.querySelectorAll("[data-case]").forEach((card) => {
    const id = card.dataset.case;
    const data = CASES.find((item) => item.id === id);
    if (!data) return;

    card.addEventListener("mouseenter", () => cone?.highlight(data.skills));
    card.addEventListener("mouseleave", () => cone?.clearHighlight());
    card.addEventListener("focus", () => cone?.highlight(data.skills));
    card.addEventListener("blur", () => cone?.clearHighlight());

    const opener = card.querySelector("[data-open-case]") || card;
    opener.addEventListener("click", (e) => {
      e.preventDefault();
      open(id, card);
    });
  });

  root.querySelectorAll("[data-close-case]").forEach((btn) => {
    btn.addEventListener("click", close);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && openId) close();
  });

  return { open, close };
}
