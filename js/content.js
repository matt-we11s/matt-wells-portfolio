export const PROFILE = {
  name: "Matthew S. Wells",
  title: "Instructional Design · Learning & Development",
  location: "Missouri",
  email: "matthewschoolerwells@gmail.com",
  mailto: "mailto:matthewschoolerwells@gmail.com",
  site: "mattwells.xyz",
};

export const PERSONAS = {
  exec: {
    id: "exec",
    label: "Strategic Leader",
    short: "Strategic Leader",
    hint: "Executive outcomes, scalability, ROI, and core delivery metrics.",
  },
  design: {
    id: "design",
    label: "Design & Systems Lead",
    short: "Design & Systems Lead",
    hint: "Pedagogical frameworks, template architecture, tech stack integrations, and design rationale.",
  },
  explorer: {
    id: "explorer",
    label: "Curious Explorer",
    short: "Curious Explorer",
    hint: "Comprehensive deep dive, full project assets, and raw artifacts.",
  },
};

export const COPY = {
  exec: {
    close:
      "Open to Director / Lead L&D and Instructional Systems Architecture roles (Remote).",
  },
  design: {
    close:
      "Open to Director / Lead L&D and Instructional Systems Architecture roles (Remote).",
  },
  explorer: {
    close:
      "Open to Director / Lead L&D and Instructional Systems Architecture roles (Remote).",
  },
};

export const METRICS = [
  {
    value: "5–10 min",
    label: "AI script drafts",
    detail: "Down from 3–4 hours of manual research and writing",
    personas: ["exec", "design", "explorer"],
  },
  {
    value: "~65%",
    label: "faster turnaround",
    detail: "Script + voiceover pipeline, human still in the loop",
    personas: ["exec", "design", "explorer"],
  },
  {
    value: "300+",
    label: "courses on one template",
    detail: "Columbia College D2L standard, still in use",
    personas: ["exec", "design", "explorer"],
  },
  {
    value: "100+",
    label: "courses moved online",
    detail: "COVID emergency transition, zero learning stoppage",
    personas: ["exec", "explorer"],
  },
];

export const EXPERIENCE = [
  {
    id: "trimble",
    dates: "2021 — now",
    role: "Instructional Designer",
    org: "Trimble Transportation",
    where: "Remote · Princeton, NJ",
    tag: "Enterprise SaaS",
    color: "#38BDF8",
    exec: "AI-assisted script + voice pipeline for a 50–60+ video SaaS series. First customer credentialing program for CoPilot. Learn.Transportation site owner.",
    design:
      "Camtasia, Storyline, NotebookLM, Gemini, synthetic voice. Built the workflow so drafting is polish, not research-from-scratch.",
    explorer:
      "TMT Fleet Maintenance moving to SaaS created a 50–60+ video demand on a one-person production seat. Grounded NotebookLM on the full doc set and gold-standard scripts; Gemini and synthetic voice handle draft and VO; I keep SME review and final cut. Also launched CoPilot customer certification (v10/v11) and manage Learn.Transportation.",
    overview: {
      exec: "Senior instructional designer for B2B transportation software. The job is throughput and customer enablement: production systems, credentialing, and a support site a small L&D team can actually run.",
      design:
        "I own the authoring stack — Camtasia, Storyline, NotebookLM, Gemini, synthetic voice — and the review gates around it. The design problem is how to keep house voice and product accuracy while the catalog has to move at SaaS speed.",
      explorer:
        "Trimble Transportation is remote, Princeton-based. I produce training for TMT Fleet Maintenance, CoPilot, and related logistics products, manage Learn.Transportation, and built the AI pipeline that lets one designer cover a series that used to look like a team’s workload.",
    },
    duties: [
      "Design and produce video, eLearning, and assessments for Trimble Transportation products, including TMT Fleet Maintenance and CoPilot.",
      "Collaborate with engineering, documentation, marketing, and product so training lands with software releases.",
      "Own and administer the Learn.Transportation WordPress support site.",
      "Design customer certification pathways, including scenario-based assessments.",
      "Build grounded AI authoring workflows, prompt libraries, and human-in-the-loop review.",
      "Mentor onboarding designers and share reusable templates across the group.",
    ],
    accomplishments: [
      "Engineered a grounded script + voiceover pipeline (NotebookLM, Gemini, synthetic voice) that cut drafting from 3–4 hours to 5–10 minutes and removed external VO vendor fees.",
      "Covered a 50–60+ instructional video series for TMT’s SaaS transition on a one-person production seat.",
      "Launched Trimble Transportation’s first customer credentialing program for CoPilot (v10/v11), including assessments delivered for the Insight conference.",
      "Built the TMT Fleet Maintenance coursebook and a Storyline Core Tracking assessment that extended the credentialing work.",
      "Formulated prompt libraries and AI guardrails adopted by teammates.",
    ],
    skills: [
      "Generative AI Strategy & Implementation",
      "AI Context Ingestion & Grounding",
      "Human-in-the-Loop Workflow Design",
      "Prompt Engineering",
      "Google Gemini",
      "Camtasia",
      "Articulate Storyline",
      "Video Production",
      "Assessment & Credentialing",
      "Cost Optimization & Vendor Elimination",
      "Organizational Scaling & Throughput",
      "L&D OKR & ROI Alignment",
    ],
  },
  {
    id: "cleveland",
    dates: "2019 — 2021",
    role: "Instructional Designer",
    org: "Cleveland University",
    where: "Overland Park, KS",
    tag: "Higher ed · Governance",
    color: "#0D9488",
    exec: "Owned distance education operations. Moved 100+ on-ground courses online in the COVID window. Wrote the first Faculty Manual and a QM-inspired review process.",
    design:
      "Policy, rubric, ExamSoft admin, Quality Matters coordinator. The work was governance as much as course design.",
    explorer:
      "Responsible for distance ed end to end — support through accreditation. Authored the Distance Education Faculty Manual, formed the Instructional Technology Committee, administered ExamSoft, and ran QM coordination for the campus.",
    overview: {
      exec: "Campus owner for distance education: operations, accreditation, and the COVID pivot. After the lights stayed on, the work was to leave policy and review behind so quality did not live in one inbox.",
      design:
        "The designed objects were a faculty manual, a QM-inspired rubric, ExamSoft administration, and a committee. Course files mattered; the system they sat in mattered more.",
      explorer:
        "I was the instructional designer responsible for distance ed from user support through accreditation, supporting 500+ faculty, staff, and students. COVID collapsed the timeline. The Faculty Manual and review process were how we raised the floor afterward.",
    },
    duties: [
      "Own distance education operations from faculty/student support through accreditation compliance.",
      "Consult with faculty on course design, assessment, and online teaching practice.",
      "Administer ExamSoft: system administration, training, and support.",
      "Serve as campus Quality Matters Coordinator.",
      "Author distance-education policy, procedures, and faculty-facing guidance.",
      "Lead the Instructional Technology Committee.",
    ],
    accomplishments: [
      "Directed the COVID emergency transition of 100+ on-ground courses to online delivery with no stoppage in student learning.",
      "Authored Cleveland University’s inaugural Distance Education Faculty Manual.",
      "Instituted a Quality Matters–inspired review rubric and applied it to current online courses and new developments.",
      "Chartered and led the Instructional Technology Committee.",
      "Held QM Coordinator and ExamSoft administrator roles for the campus.",
    ],
    skills: [
      "Crisis Leadership & Business Continuity",
      "Enterprise Policy & Governance",
      "Accreditation & Quality Assurance Frameworks",
      "Quality Matters",
      "ExamSoft",
      "Learning Management Systems",
      "Interdisciplinary Committee Leadership",
      "Risk Mitigation & Change Management",
      "SME & Faculty Consultation",
      "Team Mentorship & Upskilling",
      "Instructional Design",
    ],
  },
  {
    id: "dtu-role",
    dates: "2018 — 2019",
    role: "Expert & Lecturer",
    org: "Duy Tan University",
    where: "Đà Nẵng, Vietnam",
    tag: "International · Process",
    color: "#0D9488",
    exec: "Designed the university’s online course development process from scratch. Advised leadership and designed UI for campus learning tools.",
    design:
      "A 50-week, five-phase process with overlapping gates and a 4-week contingency buffer. Also UI for exam, portfolio, and anti-plagiarism tools.",
    explorer:
      "International consultant to the online education department. No shared process existed; instructors built courses in isolation. I left them a process, a model, and UI work for the exam system, student portfolio, and anti-plagiarism tools. Taught TOEFL three sections a semester.",
    overview: {
      exec: "International online-learning consultant to university leadership in Đà Nẵng. The brief was not a course package. It was a process the department could keep after I left.",
      design:
        "I designed a 50-week, five-phase lifecycle with overlapping gates, weekly check-ins, and a four-week contingency buffer — plus UI for campus exam, portfolio, and anti-plagiarism tools.",
      explorer:
        "Appointed as an expert and lecturer: advising executives, managing collaborators who produced learning materials, teaching TOEFL three sections a semester, and building the first real course-development process the online education department had.",
    },
    duties: [
      "Advise university leaders on online-learning practice, course quality, and development process.",
      "Design and document an end-to-end course creation lifecycle for faculty, production, and academic departments.",
      "Coordinate collaborators producing learning materials and keep development on deadline.",
      "Consult on UI for campus learning tools with the Center for Software Engineering.",
      "Teach TOEFL, three interactive sections per semester.",
    ],
    accomplishments: [
      "Designed a 50-week, five-phase online course development framework where none existed, with RACI across Developer, Team, and Department.",
      "Embedded overlapping content gates and a 4-week contingency buffer so launches did not depend on a last-week dump.",
      "Directed UX/UI for the DTU Exam System, student portfolio, and anti-plagiarism tools.",
      "Left capacity behind: forms, sample course, and a timeline a new developer could be handed.",
    ],
    skills: [
      "End-to-End PMO Lifecycle Design",
      "Instructional Design",
      "Curriculum Pathway Architecture",
      "Cross-Functional Stakeholder Alignment",
      "Organizational Scaling & Throughput",
      "Project Management",
      "SME & Faculty Consultation",
      "Web Design",
      "Educational Technology",
      "Adult Learning Theory",
      "E-Learning",
    ],
  },
  {
    id: "columbia-role",
    dates: "2013 — 2017",
    role: "Instructional Designer / Technologist",
    org: "Columbia College",
    where: "Columbia, MO",
    tag: "Higher ed · Systems",
    color: "#D97706",
    exec: "Responsive HTML/CSS template standardized 300+ D2L courses. Hybrid pilots. Fusion 2017 presentation. Professional Excellence nominee, 2016.",
    design:
      "In-house Bootstrap template instead of consultants. Still the standard. Custom homepage, responsive content, banners, faculty video.",
    explorer:
      "Started as the multimedia/technologist on the ID team, then led developments. The template replaced a landscape where every course looked different and none were truly responsive. Co-authored D2L Fusion 2017: “Reinventing Online Courses with a Dynamic Custom Homepage and Responsive Content.”",
    overview: {
      exec: "From instructional technologist to instructional designer. The durable output is a course template that standardized 300+ D2L courses and is still the standard.",
      design:
        "An in-house Bootstrap/HTML system that dropped into Brightspace instead of a consulting SOW. One homepage, one navigation model, banners and media that belonged to the same system.",
      explorer:
        "I started handling multimedia and HTML5/CSS for the ID team, then led course developments as project manager. The template work, hybrid pilots, and the Fusion 2017 talk are the same idea: make the good path the easy path.",
    },
    duties: [
      "Project-manage online and hybrid course developments with faculty SMEs — from objectives through technical validation.",
      "Design and maintain HTML/CSS templates and learning objects inside D2L Brightspace.",
      "Produce course media: video, graphics, banners, and faculty-facing assets.",
      "Pilot hybrid course offerings, from process design through course build.",
      "Work with LMS administration to keep the design system intact across the catalog.",
    ],
    accomplishments: [
      "Built a responsive HTML/CSS/Bootstrap template that standardized presentation and navigation across 300+ online and hybrid courses; still in use.",
      "Replaced a landscape of one-off course designs without hiring external consultants.",
      "Co-authored and presented at D2L Fusion 2017: “Reinventing Online Courses with a Dynamic Custom Homepage and Responsive Content.”",
      "Nominated for the institutional Professional Excellence Award, 2016.",
      "Stood up the college’s first hybrid delivery pilots.",
    ],
    skills: [
      "UX/UI Standardization & Template Engineering",
      "HTML & CSS",
      "JavaScript",
      "D2L Brightspace",
      "Learning Management Systems",
      "Universal Design & Digital Accessibility",
      "Web Design",
      "Graphic Design",
      "Instructional Design",
      "Quality Matters",
      "Video Production",
      "End-to-End PMO Lifecycle Design",
    ],
  },
];

export const EDUCATION = [
  {
    school: "University of Missouri",
    credential: "M.A. Information Science & Learning Technologies",
    year: "2013",
  },
  {
    school: "Columbia College",
    credential: "B.G.S. · Minor in Ethics, Philosophy & Religious Studies",
    year: "2008",
  },
];

export const CERTS = [
  "Generative AI Leader — Google",
  "Google Data Analytics (in progress series)",
  "QM Coordinator (QMC)",
  "Applying the QM Rubric (APPQMR)",
  "Designing Your Online Course (DYOC)",
  "Web Accessibility for Online Educators",
  "Adobe Design Fundamentals",
  "120-Hour TEFL",
];

export const CASES = [
  {
    id: "ai",
    number: "01",
    tag: "Throughput",
    color: "#38BDF8",
    title: "AI Scriptwriting + Voiceovers",
    meta: "Trimble Transportation · TMT Fleet Maintenance",
    summary: {
      exec: "A 50–60+ video series on a one-person seat. Grounded AI cut script drafts from 3–4 hours to 5–10 minutes and removed recurring voiceover vendor fees.",
      design:
        "NotebookLM trained on the full TMT library plus gold-standard scripts. I draft in the house voice, then polish. Synthetic voice replaces the vendor. SME review got faster because the structure was already right.",
      explorer:
        "As TMT moved to SaaS, documentation and video demand jumped. Historically each script meant hours of doc search, software testing, and style-guide work. I built a grounded pipeline: ingest the official library, lock the model to those sources, generate in our format, then keep a human on strategy, accuracy, and the final cut.",
    },
    approach: {
      exec: "Human-in-the-loop pipeline: grounded ingestion → structured draft → synthetic VO → SME polish.",
      design:
        "Gold-standard examples teach voice. Source docs teach the product. I don’t let the model invent. Drafting time is now formatting and judgment, not research.",
      explorer:
        "The model only writes from official TMT documentation and approved script examples — context ingestion and grounding, not a blank-page chatbot. I keep the design decisions: what the video is for, what to cut, what the SME must bless. That is how one designer covers a series that would otherwise need a larger team.",
    },
    outcomes: {
      exec: [
        "Drafting time: 3–4 hours → 5–10 minutes",
        "~65% faster production turnaround",
        "External voiceover licensing fees eliminated",
        "SME reviews accelerated; one designer covering a 50–60+ video series",
      ],
      design: [
        "Nearly consistent structure and house voice across the series",
        "Research step collapsed into library synthesis",
        "Primary task shifted from writing-from-scratch to polish",
        "Pipeline is reusable on the next product, not a one-off prompt",
      ],
      explorer: [
        "Proof that grounded gen-AI belongs in an L&D production system, not as a novelty",
        "Same pattern now informs how I think about team-wide prompt libraries and guardrails",
        "Pairs with the CoPilot credentialing work: assessments still need a human psychometric eye",
      ],
    },
    close: {
      exec: "Same headcount. A series that used to need a team.",
      design: "The craft moved upstream: examples, sources, and review gates.",
      explorer:
        "I am not interested in AI that writes faster junk. I am interested in AI that is locked to the source of truth so a designer can spend time on judgment.",
    },
    skills: [
      "Prompt Engineering",
      "Generative AI",
      "Google Gemini",
      "AI Context Ingestion & Grounding",
      "Human-in-the-Loop Workflow Design",
      "Generative AI Strategy & Implementation",
      "Cost Optimization & Vendor Elimination",
      "Organizational Scaling & Throughput",
      "L&D OKR & ROI Alignment",
      "Assessment & Credentialing",
      "Camtasia",
      "Video Production",
      "Content Creation",
      "Articulate Storyline",
    ],
    figure: "ai",
  },
  {
    id: "dtu",
    number: "02",
    tag: "Process",
    color: "#0D9488",
    title: "DTU Course Development Process",
    meta: "Duy Tan University · Đà Nẵng",
    summary: {
      exec: "No shared process existed. I designed a 50-week, five-phase university-wide framework so online courses could launch without falling apart when a person left.",
      design:
        "Roles (Developer, Team, Department), overlapping content gates, weekly check-ins, and a 4-week contingency buffer. Built for how faculty actually write — not a waterfall nobody would follow.",
      explorer:
        "In 2018–19 I was an international online-learning consultant in Đà Nẵng. Instructors were building courses in isolation. I had seen that movie at other institutions. The deliverable was not a course. It was a process the department could keep after I left — plus UI work for campus learning tools, done across language and culture.",
    },
    approach: {
      exec: "Initiation → planning → LMS build → launch → continuous improvement. Contingency baked in.",
      design:
        "Phase 1 contracts the SME. Phase 2 front-loads content in weekly submissions, not a dump at the end. Phase 3 is template/LMS build with developer review. Phase 4 is live with a freeze. Phase 5 collects feedback and revises.",
      explorer:
        "The Team — not the faculty member — owns HTML/LMS production. That single split is what keeps quality from depending on whoever happens to know Dreamweaver. Weekly contact is mandatory after kickoff so delays surface early. Department review is scoped to the original plan, not a rewrite in week 48.",
    },
    outcomes: {
      exec: [
        "End-to-end PMO lifecycle where none existed",
        "Clear RACI across faculty, production, and academic departments",
        "4-week risk buffer against launch failure",
        "Capacity left behind, not a one-off course package",
      ],
      design: [
        "Forms, sample course, and timeline the Team could hand a new developer",
        "Overlapping gates so production starts before the last lecture is written",
        "Post-semester improvement loop with a real intake form",
      ],
      explorer: [
        "Cross-cultural consulting: objectives and feedback in a workplace that was not mine",
        "Same systems thinking later applied to Cleveland policy and Trimble pipelines",
        "Taught TOEFL while doing the consulting — still in the classroom, not only the org chart",
      ],
    },
    close: {
      exec: "A map the department could keep using.",
      design: "Process is a design object. This one was meant to be inherited.",
      explorer:
        "The useful test of a process: does it still work when the person who drew it is on another continent?",
    },
    skills: [
      "End-to-End PMO Lifecycle Design",
      "Instructional Design",
      "Curriculum Pathway Architecture",
      "Cross-Functional Stakeholder Alignment",
      "Organizational Scaling & Throughput",
      "Adult Learning Theory",
      "ADDIE",
      "E-Learning",
      "Project Management",
      "SME & Faculty Consultation",
      "Educational Technology",
      "Web Design",
    ],
    figure: "dtu",
    video: {
      id: "Aeiud-0iM8E",
      title: "DTU course development process",
    },
  },
  {
    id: "columbia",
    number: "03",
    tag: "System",
    color: "#D97706",
    title: "Columbia College Course Template",
    meta: "Columbia College · D2L Brightspace",
    summary: {
      exec: "Every course looked different. Consultants were on the table. I built an in-house responsive template and applied it to 300+ online and hybrid courses. It is still the standard.",
      design:
        "Bootstrap dropped cleanly into Brightspace. One homepage pattern, one navigation model, banners that belong to the system. Other designers could actually use it.",
      explorer:
        "Inconsistent design was hurting maintenance and the student experience. We looked at expensive consultants and outsourcing. We shipped a simple, responsive template instead. I later co-authored a D2L Fusion 2017 talk on the dynamic homepage and responsive content. Nominated for the Professional Excellence Award in 2016.",
    },
    approach: {
      exec: "One HTML/CSS system. Convert the catalog. Stop paying for one-off page design.",
      design:
        "Responsive layout that blends into the D2L UI rather than fighting it. Designers inherit structure; faculty inherit a course that already knows how to behave on a phone.",
      explorer:
        "I had been the technologist on the team — HTML5, CSS, graphics, media — before leading developments. The template is the same impulse as the DTU process: stop depending on heroics. Make the good path the easy path.",
    },
    outcomes: {
      exec: [
        "300+ courses on one presentation and navigation model",
        "Fully responsive; students and faculty preferred it",
        "Still the standard years later",
        "Fusion 2017 presentation on the homepage system",
      ],
      design: [
        "Simple enough that other designers adopted it without a campaign",
        "Custom homepage + responsive content as a single object",
        "Banners and faculty media designed to the same system",
      ],
      explorer: [
        "Hybrid pilots used the same bones as fully online courses",
        "Maintenance cost dropped because there was one place to fix a pattern",
        "Proof that in-house craft can beat a consulting SOW",
      ],
    },
    close: {
      exec: "Before: fragmented. After: one system that scaled.",
      design: "A template nobody uses is decoration. This one stuck.",
      explorer:
        "The highest compliment for a course template is that nobody talks about it anymore. They just build in it.",
    },
    skills: [
      "UX/UI Standardization & Template Engineering",
      "HTML & CSS",
      "JavaScript",
      "D2L Brightspace",
      "Learning Management Systems",
      "Universal Design & Digital Accessibility",
      "Instructional Design",
      "W3C Accessibility",
      "Web Design",
      "Graphic Design",
      "End-to-End PMO Lifecycle Design",
      "Quality Matters",
    ],
    figure: "columbia",
    video: {
      id: "yEvw8SsIOU0",
      title: "Columbia College course template",
    },
  },
  {
    id: "cleveland",
    number: "04",
    tag: "Governance",
    color: "#38BDF8",
    title: "Cleveland Distance Ed & Faculty Handbook",
    meta: "Cleveland University · Crisis + policy",
    summary: {
      exec: "Owned campus distance education. Moved 100+ on-ground courses online in the COVID window with no stoppage, then wrote the first Faculty Manual and a QM-inspired review so it would not happen as a scramble again.",
      design:
        "Policy, rubric, ExamSoft, QM coordination, and a new Instructional Technology Committee. The handbook is the designed object: how we teach online here.",
      explorer:
        "I was responsible for distance education from user support through accreditation. COVID collapsed the timeline. After the lights stayed on, the work was to make quality a system: inaugural Distance Education Faculty Manual, a review process inspired by Quality Matters, and governance that did not live in one person’s inbox.",
    },
    approach: {
      exec: "Stabilize delivery, then lock standards: manual, rubric, committee, QM coordinator role.",
      design:
        "The rubric applies to existing courses and new developments. Review is a process, not a suggestion. ExamSoft admin sat next to the ID work because assessment infrastructure is part of the same system.",
      explorer:
        "Crisis leadership is not only speed. It is deciding what “good enough to launch” is, then raising the floor once people can breathe. The Faculty Manual is that floor. The committee is how it survives a staff change.",
    },
    outcomes: {
      exec: [
        "100+ courses transitioned in a compressed window",
        "First Distance Education Faculty Manual",
        "QM-inspired review applied to current and new courses",
        "QM Coordinator + Instructional Technology Committee stood up",
      ],
      design: [
        "One standard for consistency instead of course-by-course taste",
        "Assessment platform (ExamSoft) administered and trained",
        "Faculty support treated as part of the design system",
      ],
      explorer: [
        "Supported 500+ faculty, staff, and students",
        "Accreditation constraints were a design input, not an afterthought",
        "Same governance instinct as DTU’s process and Columbia’s template",
      ],
    },
    close: {
      exec: "Business continuity first. Then a system so the next crisis is not a blank page.",
      design: "Policy is instructional design for the institution.",
      explorer:
        "Anyone can move a course into an LMS. The job is leaving behind the rules, the rubric, and the people who will keep it honest.",
    },
    skills: [
      "Crisis Leadership & Business Continuity",
      "Enterprise Policy & Governance",
      "Accreditation & Quality Assurance Frameworks",
      "Quality Matters",
      "ExamSoft",
      "Learning Management Systems",
      "Cross-Functional Stakeholder Alignment",
      "Risk Mitigation & Change Management",
      "Interdisciplinary Committee Leadership",
      "Team Mentorship & Upskilling",
      "SME & Faculty Consultation",
      "Instructional Design",
    ],
    figure: "cleveland",
    video: {
      id: "y1JLi1DdJZ4",
      title: "Cleveland University distance education during COVID",
    },
  },
];

export const SKILLS = [
  { name: "HTML & CSS", level: 0.08 },
  { name: "JavaScript", level: 0.12 },
  { name: "Photoshop", level: 0.14 },
  { name: "Premiere Pro", level: 0.16 },
  { name: "Adobe Creative Cloud", level: 0.18 },
  { name: "Graphic Design", level: 0.2 },
  { name: "Camtasia", level: 0.22 },
  { name: "Video Production", level: 0.25 },
  { name: "Web Design", level: 0.27 },
  { name: "Content Creation", level: 0.29 },
  { name: "Articulate Storyline", level: 0.34 },
  { name: "D2L Brightspace", level: 0.33 },
  { name: "Canvas", level: 0.35 },
  { name: "ExamSoft", level: 0.36 },
  { name: "W3C Accessibility", level: 0.38 },
  { name: "E-Learning", level: 0.4 },
  { name: "Learning Management Systems", level: 0.42 },
  { name: "Quality Matters", level: 0.44 },
  { name: "ADDIE", level: 0.46 },
  { name: "Adult Learning Theory", level: 0.48 },
  { name: "Instructional Design", level: 0.5 },
  { name: "Educational Technology", level: 0.52 },
  { name: "Universal Design & Digital Accessibility", level: 0.53 },
  { name: "Curriculum Pathway Architecture", level: 0.55 },
  { name: "Assessment & Credentialing", level: 0.56 },
  { name: "SME & Faculty Consultation", level: 0.57 },
  { name: "Project Management", level: 0.59 },
  { name: "Team Mentorship & Upskilling", level: 0.6 },
  { name: "Data Analytics", level: 0.61 },
  { name: "UX/UI Standardization & Template Engineering", level: 0.66 },
  { name: "Prompt Engineering", level: 0.7 },
  { name: "Google Gemini", level: 0.72 },
  { name: "Generative AI", level: 0.74 },
  { name: "AI Context Ingestion & Grounding", level: 0.76 },
  { name: "Human-in-the-Loop Workflow Design", level: 0.78 },
  { name: "L&D OKR & ROI Alignment", level: 0.82 },
  { name: "Cross-Functional Stakeholder Alignment", level: 0.84 },
  { name: "Risk Mitigation & Change Management", level: 0.85 },
  { name: "Accreditation & Quality Assurance Frameworks", level: 0.86 },
  { name: "Interdisciplinary Committee Leadership", level: 0.87 },
  { name: "End-to-End PMO Lifecycle Design", level: 0.88 },
  { name: "Organizational Scaling & Throughput", level: 0.9 },
  { name: "Cost Optimization & Vendor Elimination", level: 0.91 },
  { name: "Crisis Leadership & Business Continuity", level: 0.93 },
  { name: "Enterprise Policy & Governance", level: 0.94 },
  { name: "Generative AI Strategy & Implementation", level: 0.96 },
];

export const ACHIEVEMENTS = [
  {
    id: "welcome",
    name: "Orientation complete",
    detail: "You opened the portfolio.",
  },
  {
    id: "insights",
    name: "Senior-level insights unlocked",
    detail: "You have seen most of the page.",
  },
  {
    id: "briefing",
    name: "Briefing started",
    detail: "Opened a case study.",
  },
  {
    id: "closed",
    name: "Case closed",
    detail: "Read a case through.",
  },
  {
    id: "reviewed",
    name: "Full portfolio reviewed",
    detail: "Opened every case study.",
  },
  {
    id: "path",
    name: "End of the path",
    detail: "Reached the close.",
  },
  {
    id: "line",
    name: "Line open",
    detail: "Started a message.",
  },
  {
    id: "packet",
    name: "Packet downloaded",
    detail: "Grabbed the resume or executive summary.",
  },
];
