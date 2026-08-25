import {
  PROFILE,
  PERSONAS,
  METRICS,
  EXPERIENCE,
  EDUCATION,
  CERTS,
  CASES,
  SKILLS,
} from "./content.js";
import { initPersona } from "./persona.js";
import { initAchievements } from "./achievements.js";
import { createCone } from "./cone.js";
import { initCases } from "./cases.js";

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

document.querySelectorAll("[data-email]").forEach((el) => {
  if (el.tagName === "A") {
    el.href = PROFILE.mailto;
    if (!el.hasAttribute("data-keep-label")) el.textContent = PROFILE.email;
  } else {
    el.textContent = PROFILE.email;
  }
});

function renderMetrics() {
  const root = document.getElementById("metrics");
  if (!root) return;
  root.replaceChildren(
    ...METRICS.map((item) => {
      const li = document.createElement("li");
      li.dataset.for = item.personas.join(" ");
      li.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span><em>${item.detail}</em>`;
      return li;
    }),
  );
}

function renderExperience() {
  const root = document.getElementById("timeline");
  if (!root) return;
  root.replaceChildren(
    ...EXPERIENCE.map((job) => {
      const li = document.createElement("li");
      li.className = "job-card";
      li.dataset.jobId = job.id;
      li.tabIndex = 0;
      li.setAttribute("role", "button");
      li.setAttribute("aria-label", `Open role: ${job.role} at ${job.org}`);
      li.style.setProperty("--case", job.color);
      li.innerHTML = `
        <p class="when">${job.dates}</p>
        <h3>${job.role}</h3>
        <p class="org">${job.org} · ${job.where}</p>
        <p class="job-copy" data-job="${job.org}"></p>`;
      return li;
    }),
  );
}

function fillJobs(persona) {
  EXPERIENCE.forEach((job) => {
    const el = document.querySelector(`[data-job="${job.org}"]`);
    if (el) el.textContent = job[persona] || job.exec;
  });
}

function renderEdu() {
  const root = document.getElementById("education");
  if (!root) return;
  root.replaceChildren(
    ...EDUCATION.map((item) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${item.credential}</strong><span>${item.school} · ${item.year}</span>`;
      return li;
    }),
  );
}

function renderCerts() {
  const root = document.getElementById("certs");
  if (!root) return;
  root.replaceChildren(
    ...CERTS.map((name) => {
      const li = document.createElement("li");
      li.textContent = name;
      return li;
    }),
  );
}

function renderCases() {
  const root = document.getElementById("case-list");
  if (!root) return;
  root.replaceChildren(
    ...CASES.map((item) => {
      const article = document.createElement("article");
      article.className = "case-card";
      article.dataset.case = item.id;
      article.tabIndex = 0;
      article.setAttribute("role", "button");
      article.setAttribute("aria-label", `Open case: ${item.title}`);
      article.style.setProperty("--case", item.color);
      article.innerHTML = `
        <div class="case-card__top">
          <span>${item.number}</span>
          <span class="case-card__tag">${item.tag}</span>
        </div>
        <h3>${item.title}</h3>
        <p class="case-card__meta">${item.meta}</p>
        <p class="case-card__summary">${item.summary.exec}</p>`;
      return article;
    }),
  );
}

function renderSkillList() {
  const root = document.getElementById("skill-list");
  if (!root) return;
  root.replaceChildren(
    ...SKILLS.map((item) => {
      const li = document.createElement("li");
      li.textContent = item.name;
      return li;
    }),
  );
}

function updateCaseSummaries(persona) {
  CASES.forEach((item) => {
    const card = document.querySelector(`[data-case="${item.id}"] .case-card__summary`);
    if (card) card.textContent = item.summary[persona] || item.summary.exec;
  });
}

renderMetrics();
renderExperience();
renderEdu();
renderCerts();
renderCases();
renderSkillList();

const achievements = initAchievements();
achievements.unlock("welcome");

const themeKey = "mw-theme";
const themeBtn = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem(themeKey);
const theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";

function applyTheme(next) {
  document.documentElement.dataset.theme = next;
  document.body.dataset.theme = next;
  localStorage.setItem(themeKey, next);
}

applyTheme(theme);
themeBtn?.addEventListener("click", () => {
  const next = document.body.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
});

const canvas = document.getElementById("cone");
const cone = canvas
  ? createCone({
      canvas,
      statusEl: document.getElementById("cone-status"),
      skills: SKILLS,
      reducedMotion: reduced,
    })
  : null;

document.getElementById("cone-reset")?.addEventListener("click", () => cone?.reset());

const persona = initPersona({
  onChange(id) {
    fillJobs(id);
    updateCaseSummaries(id);
  },
});
fillJobs(persona.get());
updateCaseSummaries(persona.get());

const opened = new Set();
initCases({
  getPersona: () => persona.get(),
  cone,
  onOpen(id) {
    opened.add(id);
    achievements.unlock("briefing");
    if (opened.size >= CASES.length) achievements.unlock("reviewed");
  },
  onRead() {
    achievements.unlock("closed");
  },
  onClose() {},
});

const fill = document.getElementById("progress-fill");
const contact = document.getElementById("contact");
let reachedEnd = false;

function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max <= 0 ? 0 : window.scrollY / max;
  if (fill) fill.style.width = `${progress * 100}%`;
  if (progress >= 0.7) achievements.unlock("insights");
  if (!reachedEnd && contact) {
    const rect = contact.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.72) {
      reachedEnd = true;
      achievements.unlock("path");
    }
  }
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

document.querySelectorAll("[data-packet]").forEach((el) => {
  el.addEventListener("click", () => achievements.unlock("packet"));
});
document.querySelectorAll("[data-email]").forEach((el) => {
  el.addEventListener("click", () => achievements.unlock("line"));
});

document.getElementById("badge-toggle")?.addEventListener("click", () => {
  document.getElementById("badge-rail")?.classList.toggle("is-open");
});

Object.entries(PERSONAS).forEach(([id, meta]) => {
  const btn = document.querySelector(`button[data-persona="${id}"]`);
  if (btn && !btn.querySelector("small")) {
    const hint = document.createElement("small");
    hint.textContent = meta.hint;
    btn.append(hint);
    btn.title = meta.hint;
  }
});
