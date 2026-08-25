function mixRgb(a, b, t) {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];
}

function colorForLevel(t, alpha = 1) {
  const teal = [13, 148, 136];
  const sky = [56, 189, 248];
  const amber = [217, 119, 6];
  let rgb;
  if (t < 0.42) rgb = mixRgb(teal, sky, t / 0.42);
  else if (t < 0.78) rgb = sky;
  else rgb = amber;
  return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`;
}

function conePositions(items, width, height) {
  const minY = 40;
  const maxY = height - 50;
  const maxRadius = Math.min(175, width * 0.4);
  return items.map((item, i) => {
    const t = item.level;
    const y = maxY - t * (maxY - minY);
    const radius = 20 + t * maxRadius;
    const angle = i * 2.399 + t * 5.2;
    const jitter = Math.sin(i * 7.1) * 7;
    return {
      x: Math.cos(angle) * (radius + jitter),
      y: y - height / 2,
      z: Math.sin(angle) * (radius + jitter) * 0.55,
    };
  });
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function createCone({ canvas, statusEl, skills: skillData, reducedMotion }) {
  const ctx = canvas.getContext("2d");
  const wrap = canvas.parentElement;
  let width = 440;
  let height = 520;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    const rect = wrap.getBoundingClientRect();
    width = Math.max(280, Math.floor(rect.width));
    height = Math.max(360, Math.floor(rect.height));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const positions = conePositions(skillData, width, height);
    skills.forEach((s, i) => {
      s.baseX = positions[i].x;
      s.baseY = positions[i].y;
      s.baseZ = positions[i].z;
      if (!filtered) {
        s.targetX = s.baseX;
        s.targetY = s.baseY;
        s.targetZ = s.baseZ;
      }
    });
  }

  const basePositions = conePositions(skillData, width, height);
  const skills = skillData.map((item, i) => {
    const pos = basePositions[i];
    return {
      name: item.name,
      level: item.level,
      baseX: pos.x,
      baseY: pos.y,
      baseZ: pos.z,
      currentX: pos.x,
      currentY: pos.y,
      currentZ: pos.z,
      targetX: pos.x,
      targetY: pos.y,
      targetZ: pos.z,
      opacity: 1,
      targetOpacity: 1,
      scale: 1,
      targetScale: 1,
      glow: 0,
      targetGlow: 0,
      screenX: 0,
      screenY: 0,
      screenR: 0,
    };
  });

  const links = [];
  for (let i = 0; i < skills.length; i += 1) {
    const dists = [];
    for (let j = 0; j < skills.length; j += 1) {
      if (i === j) continue;
      const dx = skills[i].baseX - skills[j].baseX;
      const dy = skills[i].baseY - skills[j].baseY;
      const dz = skills[i].baseZ - skills[j].baseZ;
      const levelDiff = Math.abs(skills[i].level - skills[j].level);
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) + levelDiff * 40;
      dists.push({ j, dist });
    }
    dists.sort((a, b) => a.dist - b.dist);
    for (let k = 0; k < 2; k += 1) {
      const j = dists[k].j;
      const a = Math.min(i, j);
      const b = Math.max(i, j);
      if (!links.some((l) => l.a === a && l.b === b)) links.push({ a, b });
    }
  }

  let rotY = 0;
  let zoom = 1;
  let autoRotate = !reducedMotion;
  let isDragging = false;
  let lastMouseX = 0;
  let mouseOverCanvas = false;
  let filtered = false;
  let hoveredSkill = null;
  const mouse = { x: -999, y: -999 };
  let raf = 0;
  let running = true;

  function project(x, y, z) {
    const scale = (420 * zoom) / (420 + z);
    return { x: width / 2 + x * scale, y: height / 2 + y * scale, s: scale };
  }

  function setStatus(text) {
    if (statusEl) statusEl.textContent = text;
  }

  function setTargets(keepNames) {
    const keep = skills.filter((s) => keepNames.includes(s.name));
    const remove = skills.filter((s) => !keepNames.includes(s.name));
    remove.forEach((s) => {
      s.targetOpacity = 0.05;
      s.targetScale = 0.45;
      s.targetGlow = 0;
    });
    const newPos = conePositions(
      keep.map((s) => ({ name: s.name, level: s.level })),
      width,
      height,
    );
    keep.forEach((s, i) => {
      s.targetX = newPos[i].x;
      s.targetY = newPos[i].y;
      s.targetZ = newPos[i].z;
      s.targetOpacity = 1;
      s.targetScale = 1.3;
      s.targetGlow = 0.9;
    });
  }

  function highlight(names) {
    if (filtered || reducedMotion) return;
    skills.forEach((s) => {
      if (names.includes(s.name)) {
        s.targetGlow = 1;
        s.targetScale = 1.4;
        s.targetOpacity = 1;
      } else {
        s.targetGlow = 0;
        s.targetScale = 0.65;
        s.targetOpacity = 0.18;
      }
    });
  }

  function clearHighlight() {
    if (filtered) return;
    skills.forEach((s) => {
      s.targetGlow = 0;
      s.targetScale = 1;
      s.targetOpacity = 1;
    });
  }

  function filter(names, label) {
    filtered = true;
    setTargets(names);
    setStatus(label || "Filtered to this project");
  }

  function reset() {
    skills.forEach((s) => {
      s.targetX = s.baseX;
      s.targetY = s.baseY;
      s.targetZ = s.baseZ;
      s.targetOpacity = 1;
      s.targetScale = 1;
      s.targetGlow = 0;
    });
    filtered = false;
    setStatus("All skills · drag · scroll · hover a dot");
  }

  function onPointerDown(clientX) {
    isDragging = true;
    lastMouseX = clientX;
    autoRotate = false;
  }

  canvas.addEventListener("mouseenter", () => {
    mouseOverCanvas = true;
  });
  canvas.addEventListener("mouseleave", () => {
    mouseOverCanvas = false;
    mouse.x = -999;
    mouse.y = -999;
    hoveredSkill = null;
    isDragging = false;
  });
  canvas.addEventListener("mousedown", (e) => onPointerDown(e.clientX));
  window.addEventListener("mouseup", () => {
    isDragging = false;
  });
  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    rotY += (e.clientX - lastMouseX) * 0.008;
    lastMouseX = e.clientX;
  });
  canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = (e.clientX - rect.left) * (width / rect.width);
    mouse.y = (e.clientY - rect.top) * (height / rect.height);
  });
  canvas.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      zoom = Math.max(0.55, Math.min(2.2, zoom - e.deltaY * 0.0012));
    },
    { passive: false },
  );

  let lastTouchX = 0;
  canvas.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        lastTouchX = e.touches[0].clientX;
        autoRotate = false;
      }
    },
    { passive: true },
  );
  canvas.addEventListener(
    "touchmove",
    (e) => {
      if (isDragging && e.touches.length === 1) {
        rotY += (e.touches[0].clientX - lastTouchX) * 0.008;
        lastTouchX = e.touches[0].clientX;
      }
    },
    { passive: true },
  );
  canvas.addEventListener("touchend", () => {
    isDragging = false;
  });

  const onResize = () => resize();
  window.addEventListener("resize", onResize);

  function tick() {
    if (!running) return;
    if (autoRotate && !mouseOverCanvas && !isDragging && !reducedMotion) {
      rotY += 0.0028;
    }

    skills.forEach((s) => {
      s.currentX = lerp(s.currentX, s.targetX, 0.08);
      s.currentY = lerp(s.currentY, s.targetY, 0.08);
      s.currentZ = lerp(s.currentZ, s.targetZ, 0.08);
      s.opacity = lerp(s.opacity, s.targetOpacity, 0.1);
      s.scale = lerp(s.scale, s.targetScale, 0.1);
      s.glow = lerp(s.glow, s.targetGlow, 0.12);
    });

    hoveredSkill = null;
    const projected = skills.map((s) => {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x = s.currentX * cosY - s.currentZ * sinY;
      const z = s.currentX * sinY + s.currentZ * cosY;
      const p = project(x, s.currentY, z);
      const r = (4.2 + s.level * 2.8) * s.scale * p.s;
      s.screenX = p.x;
      s.screenY = p.y;
      s.screenR = r;
      return { s, p, r, z };
    });

    let bestZ = -999;
    projected.forEach(({ s, p, r, z }) => {
      if (s.opacity < 0.15) return;
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      if (dx * dx + dy * dy < (r + 7) * (r + 7) && z > bestZ) {
        bestZ = z;
        hoveredSkill = s;
      }
    });

    ctx.clearRect(0, 0, width, height);
    const grd = ctx.createRadialGradient(width / 2, height * 0.55, 20, width / 2, height * 0.55, width * 0.5);
    grd.addColorStop(0, "rgba(56,189,248,0.06)");
    grd.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, width, height);

    ctx.lineWidth = 0.7;
    links.forEach(({ a, b }) => {
      const sa = skills[a];
      const sb = skills[b];
      if (sa.opacity < 0.08 || sb.opacity < 0.08) return;
      const alpha = Math.min(sa.opacity, sb.opacity) * 0.2;
      ctx.beginPath();
      ctx.moveTo(sa.screenX, sa.screenY);
      ctx.lineTo(sb.screenX, sb.screenY);
      ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
      ctx.stroke();
    });

    projected.sort((a, b) => a.z - b.z);
    projected.forEach(({ s, p, r }) => {
      if (s.opacity < 0.04) return;
      if (s.glow > 0.1 || s === hoveredSkill) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, r + 6 + s.glow * 5, 0, Math.PI * 2);
        ctx.fillStyle = colorForLevel(
          s.level,
          0.18 * Math.max(s.glow, s === hoveredSkill ? 0.7 : 0),
        );
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fillStyle = colorForLevel(s.level, 0.92 * s.opacity);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,255,255,${0.22 * s.opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    if (hoveredSkill && hoveredSkill.opacity > 0.3) {
      const s = hoveredSkill;
      ctx.font = "600 12px Outfit, system-ui, sans-serif";
      const tw = ctx.measureText(s.name).width;
      const padX = 10;
      const padY = 6;
      const boxW = tw + padX * 2;
      const boxH = 12 + padY * 2;
      let bx = s.screenX - boxW / 2;
      let by = s.screenY - s.screenR - boxH - 8;
      if (by < 8) by = s.screenY + s.screenR + 8;
      if (bx < 6) bx = 6;
      if (bx + boxW > width - 6) bx = width - 6 - boxW;

      ctx.beginPath();
      const rad = 6;
      ctx.moveTo(bx + rad, by);
      ctx.arcTo(bx + boxW, by, bx + boxW, by + boxH, rad);
      ctx.arcTo(bx + boxW, by + boxH, bx, by + boxH, rad);
      ctx.arcTo(bx, by + boxH, bx, by, rad);
      ctx.arcTo(bx, by, bx + boxW, by, rad);
      ctx.closePath();
      ctx.fillStyle = "rgba(15, 23, 42, 0.94)";
      ctx.fill();
      ctx.strokeStyle = colorForLevel(s.level, 0.75);
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.fillStyle = "#f1f5f9";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(s.name, bx + boxW / 2, by + boxH / 2);
    }

    raf = requestAnimationFrame(tick);
  }

  resize();
  if (reducedMotion) {
    autoRotate = false;
    setStatus("Skills by altitude · motion reduced");
    tick();
    running = false;
  } else {
    setStatus("All skills · drag · scroll · hover a dot");
    tick();
  }

  return {
    highlight,
    clearHighlight,
    filter,
    reset,
    destroy() {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    },
  };
}
