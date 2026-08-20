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
  const toastName = document.getElementById("toast-name");
  const rail = document.getElementById("badge-rail");
  const countEl = document.getElementById("badge-count");
  let toastTimer = 0;

  function persist() {
    localStorage.setItem(KEY, JSON.stringify([...unlocked]));
  }

  function renderRail() {
    if (!rail) return;
    rail.replaceChildren(
      ...ACHIEVEMENTS.map((item) => {
        const li = document.createElement("li");
        li.className = unlocked.has(item.id) ? "is-on" : "";
        li.title = `${item.name} — ${item.detail}`;
        li.innerHTML = `<span></span><em>${item.name}</em>`;
        return li;
      }),
    );
    if (countEl) countEl.textContent = `${unlocked.size}/${ACHIEVEMENTS.length}`;
  }

  function showToast(item) {
    if (!toast || !toastName) return;
    toastName.textContent = item.name;
    toast.hidden = false;
    toast.classList.add("is-in");
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-in");
      window.setTimeout(() => {
        toast.hidden = true;
      }, 280);
    }, 2800);
  }

  function unlock(id) {
    if (unlocked.has(id)) return false;
    const item = ACHIEVEMENTS.find((a) => a.id === id);
    if (!item) return false;
    unlocked.add(id);
    persist();
    renderRail();
    if (id !== "welcome") showToast(item);
    return true;
  }

  renderRail();
  return { unlock, unlocked };
}
