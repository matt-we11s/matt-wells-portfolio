# Matthew S. Wells — Portfolio

Hiring site for high-level Instructional Design / L&D roles. One page, three reading modes, a Canvas skills cone tied to the case studies.

Prairie-cartography experiment is archived under `archive/prairie-cartography/`.

## Run it

Node is not required:

```powershell
python -m http.server 5173
```

Open [http://localhost:5173](http://localhost:5173). Do not open `index.html` as a file — ES modules need a local server.

## What’s here

- `index.html` — hero, experience, work + cone, contact
- `resume.html` / `executive-summary.html` — print-to-PDF packets
- `js/content.js` — copy, personas, cases, skills
- `js/cone.js` — Canvas 2D progression cone (no Three.js)

Personas persist in `localStorage` (`mw-persona`, `mw-theme`, `mw-achievements`).
