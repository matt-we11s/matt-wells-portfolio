import { ACHIEVEMENTS } from "./content.js";

const KEY = "mw-achievements";

function load() {
  try {
    return new Set(JSON.parse(localStorage.getItem(KEY) || "[]"));
  } catch {
    return new Set();
  }
}

export function initAchievements() {
  const unlocked = load();
  const toast = document.getElementById("toast");
  const toastKicker = document.getElementById("toast-kicker");
  const toastName = document.getElementById("toast-name");
  const toastDetail = document.getElementById("toast-detail");
  const rail = document.getElementById("badge-rail");
  const list = document.getElementById("badge-list");
  const countEl = document.getElementById("badge-count");
  const panelCount = document.getElementById("badge-panel-count");
  const toggle = document.getElementById("badge-toggle");
  const resetBtn = document.getElementById("badge-reset");
  let toastTimer = 0;

  function persist() {
    localStorage.setItem(KEY, JSON.stringify([...unlocked]));
  }

  function countLabel() {
    return `${unlocked.size}/${ACHIEVEMENTS.length}`;
  }

  function renderRail() {
    const host = list || rail;
    if (!host) return;
    host.replaceChildren(
      ...ACHIEVEMENTS.map((item) => {
        const li = document.createElement("li");
        const on = unlocked.has(item.id);
        li.className = on ? "is-on" : "";
        li.innerHTML = `<span></span><div><em>${item.name}</em><small>${item.detail}</small></div>`;
        return li;
      }),
    );
    const label = countLabel();
    if (countEl) countEl.textContent = label;
    if (panelCount) panelCount.textContent = label;
    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        `Portfolio goals, ${unlocked.size} of ${ACHIEVEMENTS.length} complete`,
      );
    }
  }

  function flashHeader() {
    if (!toggle) return;
    toggle.classList.remove("is-flash");
    void toggle.offsetWidth;
    toggle.classList.add("is-flash");
    window.setTimeout(() => toggle.classList.remove("is-flash"), 1200);
  }

  function showToast(item, index) {
    if (!toast || !toastName) return;
    if (toastKicker) toastKicker.textContent = `Goal ${index} of ${ACHIEVEMENTS.length}`;
    toastName.textContent = item.name;
    if (toastDetail) toastDetail.textContent = item.detail;
    toast.hidden = false;
    toast.classList.add("is-in");
    flashHeader();
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-in");
      window.setTimeout(() => {
        toast.hidden = true;
      }, 280);
    }, 4200);
  }

  function unlock(id, { silent = false } = {}) {
    if (unlocked.has(id)) return false;
    const item = ACHIEVEMENTS.find((a) => a.id === id);
    if (!item) return false;
    unlocked.add(id);
    persist();
    renderRail();
    if (!silent && id !== "welcome") {
      showToast(item, unlocked.size);
    }
    return true;
  }

  function reset() {
    unlocked.clear();
    persist();
    renderRail();
    window.dispatchEvent(new CustomEvent("mw-achievements-reset"));
    unlock("welcome", { silent: true });
  }

  toggle?.addEventListener("click", () => {
    const open = !rail?.classList.contains("is-open");
    rail?.classList.toggle("is-open", open);
    if (rail) rail.hidden = !open;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  resetBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    reset();
  });

  renderRail();
  if (rail) rail.hidden = true;
  return { unlock, reset, unlocked };
}
