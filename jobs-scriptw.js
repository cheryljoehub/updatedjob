// NEVER CHANGE THE ORDER OF THE CODE. ALWAYS REFER BACK TO THE MAIN.
//ALWAYS READ THE COMMENTS

/* ============================================================
   STEP 1 — ONE-TIME EMAILJS SETUP (free, ~5 minutes)
   1. Go to https://www.emailjs.com and create a free account.
   2. Add an Email Service (e.g. connect your Gmail) → copy its
      "Service ID" into EMAILJS_SERVICE_ID below.
   3. Create an Email Template. In the template body, use these
      variable names so they fill in correctly:
         {{to_email}}   → recipient's address
         {{job_count}}  → number of jobs selected
         {{week_of}}    → the week label
         {{job_list}}   → the formatted list of selected jobs
      Copy its "Template ID" into EMAILJS_TEMPLATE_ID below.
   4. Go to Account → General → copy your "Public Key" into
      EMAILJS_PUBLIC_KEY below.
   That's it — the form below will start sending real emails.
   ============================================================ */

const EMAILJS_SERVICE_ID  = "service_bazfoet";
const EMAILJS_TEMPLATE_ID = "template_h0w8en2";
const EMAILJS_PUBLIC_KEY  = "PNgKNRpf6HZ_tgm42";

if (window.emailjs && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
  // initialize EmailJS with the public key (string form is compatible
  // with the CDN/browser bundle)
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

/* ============================================================
   STEP 2 — WEEKLY UPDATE ZONE
   Edit WEEK_OF and each major's job list every Monday.
   Each major should carry at least 10 postings: { title, company, link }
   Delete last week's entries and paste in the new ones.
   ============================================================ */

/* Add Mondays Date to
const WEEK_OF ="Enter Date or text in double quotes";
Example = const WEEK_OF = "July 7, 2026";
*/

const WEEK_OF = "September 7, 2026"; 

/*
Const MAJORS contains all the braches of the jobs that CCOB has that you can apply for
Always watch out for parenthesis and square brackets
*/

const MAJORS = {
  finance: {
    label: "Finance",
    icon: "💹",
    desc: "Investment banking, corporate finance, and asset management roles.",
    jobs: [
      { title: "Tax Staff", company: "WP+D", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/faa1f44dca8717d5e26bccbd8f0f59c5" },
      { title: "Tax Intern - Busy Season", company: "WP+D", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/7f5a1c64725b9acbb48a375109f7a56c" },
      { title: "Tax Preparer", company: "Landmark Certified Public Accountants", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/45953ea1c029e4e3ee685790f8ed83de" },
      { title: " Leadership Development Internship Program - Finance & Accounting ", company: "Textron", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/c25c0b141e641f5449d9e209e72f2766" },
      { title: "December 2026 Externship", company: "Equity Methods", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/0f5580039c68a6ae35df8d20b85f5f30" },
    ]
  },
  accounting: {
    label: "Accounting",
    icon: "📊",
    desc: "Audit, tax, and staff accounting positions at firms of every size.",
    jobs: [
      { title: " Leadership Development Internship Program - Finance & Accounting ", company: "Textron", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/c25c0b141e641f5449d9e209e72f2766" },
     /* { title: "Tax Associate", company: "Example Advisory", link: "#" },*/
      { title: "Audit Staff", company: "WP+D", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/40c36a9c153fade2a570f0c8dc87dd6a" },
      { title: "Accounting Clerk", company: "InnovaQuartz", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/aa1ea256aabedf5b87f4a67e5daa925d" },
   /*   { title: "Internal Audit Associate", company: "Example Holdings", link: "#" },
      { title: "Cost Accountant", company: "Example Manufacturing", link: "#" },
      { title: "Payroll Accountant", company: "Example Group", link: "#" },
      { title: "Forensic Accounting Assistant", company: "Example Advisory", link: "#" },
      { title: "Bookkeeper", company: "Example Small Biz", link: "#" },
      { title: "Compliance Associate", company: "Example & Co.", link: "#" }*/
    ]
  },
  economics: {
    label: "Economics",
    icon: "🌐",
    trend: "down",
    desc: "Research, policy, and consulting roles for data-driven thinkers.",
    jobs: [
    { title: "Intern - Ops Strat Analytics (Summer 2027)", company: "United Airlines", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/67975757f02c7da5966ac36272f32929" },
      { title: "2027 Intern - Contracts - Hunt Valley, MD", company: "Textron", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/140cce000c549d7bdf3a1fa6ce44b8ed" },
     /* { title: "Market Research Analyst", company: "Example Insights", link: "#" },
      { title: "Data & Policy Fellow", company: "Example Gov Agency", link: "#" },
      { title: "Quantitative Research Intern", company: "Example Fund", link: "#" },
      { title: "Public Policy Associate", company: "Example Institute", link: "#" },
      { title: "Trade Analyst", company: "Example Commerce Co.", link: "#" },
      { title: "Regulatory Affairs Assistant", company: "Example Group", link: "#" },
      { title: "Statistical Analyst", company: "Example Bureau", link: "#" }*/
    ]
  },
  marketing: {
    label: "Marketing",
    icon: "📣",
    trend: "up",
    desc: "Brand, digital, and growth marketing openings.",
    jobs: [
     /* { title: "Marketing Coordinator", company: "Example Brands", link: "#" },
      { title: "Digital Marketing Associate", company: "Example Agency", link: "#" },*/
      { title: "Sales and Marketing Intern", company: "Savage Air Conditioning", link: "gcu-csm.symplicity.com/students/app/jobs/detail/5f1f83b6d8b40bf75dce15553fef60aa" },
     /* { title: "Product Marketing Associate", company: "Example Tech", link: "#" },
      { title: "Marketing Analyst", company: "Example Brands", link: "#" },
      { title: "Events & Campaigns Coordinator", company: "Example Agency", link: "#" }*/
    ]
  },
  hr: {
    label: "Human Resources",
    icon: "🤝",
    trend: "steady",
    desc: "People operations, talent, and organizational development roles.",
    jobs: [
      { title: "2027 Intern - Human Resources", company: "Textron", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/83c9ce7df3d1cccdf76c51377b26155b " },
      { title: "HR Leadership Development Program Internship - Summer 2027", company: "Travelers Insurance Company", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/6acbec8503a5e07ff89e73182f7fa197" },
      /*{ title: "HR Coordinator", company: "Example Holdings", link: "#" },
      { title: "Benefits Administrator", company: "Example Inc.", link: "#" },
      { title: "Learning & Development Assistant", company: "Example Academy", link: "#" },
      { title: "DEI Program Coordinator", company: "Example Group", link: "#" },
      { title: "HRIS Analyst", company: "Example Systems", link: "#" },
      { title: "Employee Relations Associate", company: "Example Co.", link: "#" }*/
    ]
  },
  analytics: {
    label: "Business Analytics",
    icon: "📈",
    trend: "up",
    desc: "Data and business intelligence roles across industries.",
    jobs: [
     /* { title: "BI Developer", company: "Example Tech", link: "#" },
      { title: "Reporting Analyst", company: "Example Corp", link: "#" },
      { title: "Operations Analyst", company: "Example Holdings", link: "#" },
      { title: "Insights Analyst", company: "Example Retail", link: "#" },
      { title: "Junior Data Scientist", company: "Example Labs", link: "#" },
      { title: "Analytics Consultant", company: "Example Consulting", link: "#" },
      { title: "Dashboard & Metrics Analyst", company: "Example Group", link: "#" },
      { title: "Strategy Analyst", company: "Example Inc.", link: "#" }*/
    ]
  },
  entrepreneurship: {
    label: "Entrepreneurship",
    icon: "🚀",
    trend: "down",
    desc: "Startup, venture, and early-stage operating roles.",
    jobs: [
     /* { title: "Founder's Associate", company: "Example Startup", link: "#" },
      { title: "Venture Analyst", company: "Example Ventures", link: "#" },
      { title: "Startup Operations Associate", company: "Example Labs", link: "#" },
      { title: "Growth Associate", company: "Example Startup", link: "#" },
      { title: "Business Development Associate", company: "Example Co.", link: "#" },
      { title: "Incubator Program Coordinator", company: "Example Accelerator", link: "#" },
      { title: "Product Associate", company: "Example App", link: "#" },
      { title: "Venture Capital Intern", company: "Example Fund", link: "#" },
      { title: "New Ventures Analyst", company: "Example Group", link: "#" },
      { title: "Startup Founder Fellow", company: "Example Foundation", link: "#" }*/
    ]
  },
  hospitality: {
    label: "Hospitality Mgmt",
    icon: "🏨",
    trend: "steady",
    desc: "Hotel, event, and guest-experience operations roles.",
    jobs: [
     { title: "Day of Event Staff", company: "Perry Consulting", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/f02eb22bfa49c2951f976e7dbe210897" },
   { title: "Event Banquet Server / Bartender / Captain", company: "Atlasta Catering Service, INC - A Fine Catering Company", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/f3a30be0da0876f4de14c4536a2db814" },
    /*  { title: "Event Coordinator", company: "Example Venues", link: "#" },
      { title: "Guest Experience Associate", company: "Example Hospitality", link: "#" },
      { title: "Food & Beverage Supervisor", company: "Example Resort", link: "#" },
      { title: "Revenue Management Analyst", company: "Example Hotels", link: "#" },
      { title: "Catering Coordinator", company: "Example Venues", link: "#" },
      { title: "Concierge Team Lead", company: "Example Hotels", link: "#" },
      { title: "Resort Operations Associate", company: "Example Resort", link: "#" },
      { title: "Hospitality Management Trainee", company: "Example Group", link: "#" }*/
    ]
  },
  sportsManagement: {
    label: "Sports Management",
    icon: "🏟️",
    trend: "down",
    desc: "Team operations, athletic administration, and sports marketing.",
    jobs: [
     /* { title: "Athletic Administration Intern", company: "Example University", link: "#" },
      { title: "Sports Marketing Coordinator", company: "Example League", link: "#" },
      { title: "Ticket Sales Associate", company: "Example Team", link: "#" },
      { title: "Game Day Operations Assistant", company: "Example Arena", link: "#" },
      { title: "Community Relations Coordinator", company: "Example Team", link: "#" },
      { title: "Sponsorship Sales Associate", company: "Example League", link: "#" },
      { title: "Facilities Operations Assistant", company: "Example Stadium", link: "#" },
      { title: "Sports Analytics Assistant", company: "Example Athletics", link: "#" },
      { title: "Athlete Relations Coordinator", company: "Example Agency", link: "#" }*/
    ]
  },
  supplyChain: {
    label: "Supply Chain",
    icon: "📦",
    trend: "up",
    desc: "Logistics, procurement, and operations analyst roles.",
    jobs: [
      { title: "2027 Summer Intern - Manufacturing Supply Chain", company: "General Motors", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/1f6b344ab0a59b0f59a9d2e8d0e98522" },
      { title: "Retail Store Management Internship Summer 2027 - Philadelphia", company: "CVS Health", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/9ae9608f9b1262d6efde66de419609a0" },
     /* { title: "Logistics Coordinator", company: "Example Freight", link: "#" },
      { title: "Inventory Analyst", company: "Example Retail", link: "#" },
      { title: "Operations Coordinator", company: "Example Distribution", link: "#" },
      { title: "Demand Planning Analyst", company: "Example Group", link: "#" },
      { title: "Warehouse Operations Associate", company: "Example Logistics", link: "#" },
      { title: "Sourcing Analyst", company: "Example Manufacturing", link: "#" },
      { title: "Fleet Operations Assistant", company: "Example Freight", link: "#" },
      { title: "Supply Planning Associate", company: "Example Corp", link: "#" }*/
    ]
  },
  businessManagement: {
    label: "Business Mgmt",
    icon: "🧭",
    trend: "steady",
    desc: "Generalist operations, project, and management-track roles.",
    jobs: [
      { title: "Business Intern - Colonial Heights, VA", company: "Virginia Department of Transportation", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/9ae9608f9b1262d6efde66de419609a0" },
      { title: "Business Intern - Suffolk, VA", company: "Virginia Department of Transportation", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/1ace9ea2a5e418bf0dcda8b9a0a2b6d5" },
     /* { title: "Management Trainee", company: "Example Corp", link: "#" },
      { title: "Business Operations Associate", company: "Example Holdings", link: "#" },
      { title: "Process Improvement Analyst", company: "Example Inc.", link: "#" },
      { title: "General Manager Trainee", company: "Example Retail", link: "#" },
      { title: "Strategy & Ops Associate", company: "Example Group", link: "#" },
      { title: "Client Operations Coordinator", company: "Example Services", link: "#" },
      { title: "Program Coordinator", company: "Example Foundation", link: "#" },
      { title: "Junior Project Manager", company: "Example Corp", link: "#" }*/
    ]
  }
};

/* normalize job links need not be touched unless of an exception of a non working link*/


// Ensure each job has a working link (fallback to a Google search URL)
(function normalizeJobLinks() {
  Object.values(MAJORS).forEach((m) => {
    m.jobs.forEach((job) => {
      if (!job.link || job.link === "#") {
        const q = encodeURIComponent((job.title || "job") + " " + (job.company || ""));
        job.link = `https://www.google.com/search?q=${q}`;
      } else if (/^[^/:]+$/.test(job.link)) {
        // if link is like 'www.google.com', add protocol
        job.link = `https://${job.link}`;
      }
    });
  });
})();

/*
!!!!!!!!!!!!!!!DO NOT TOUCH BELOW THIS PART!!!!!!!!!!!!!!!!!
*/

/* ============================================================
   RENDER + SELECTION LOGIC — no need to touch below this line
   ============================================================ */

let activeMajor = Object.keys(MAJORS)[0];

// selection map keyed by "majorKey::index" → job object
const selected = new Map();
const PREVIOUS_PAGE_KEY = "jobPostingsPreviousPage";

function init() {
  rememberPreviousPage();
  buildStats();
  buildTicker();
  buildNav();
  renderPanel();
  bindSelectionBar();
  bindModal();
  bindBackButton();
}

function rememberPreviousPage() {
  const referrer = document.referrer;
  if (referrer && referrer !== window.location.href) {
    sessionStorage.setItem(PREVIOUS_PAGE_KEY, referrer);
  }
}

function goBack() {
  const storedPreviousPage = sessionStorage.getItem(PREVIOUS_PAGE_KEY);

  if (storedPreviousPage && storedPreviousPage !== window.location.href) {
    window.location.href = storedPreviousPage;
  } else if (document.referrer && document.referrer !== window.location.href) {
    window.location.href = document.referrer;
  } else if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "./";
  }
}

function bindBackButton() {
  const backBtn = document.getElementById("backBtn");
  if (!backBtn) return;

  backBtn.addEventListener("click", goBack);
}

function buildStats() {
  const majorCount = Object.keys(MAJORS).length;
  const jobCount = Object.values(MAJORS).reduce((sum, m) => sum + m.jobs.length, 0);

  document.getElementById("stat-strip").innerHTML = `
    <div class="stat-chip">
      <span class="stat-value">${jobCount}</span>
      <span class="stat-label">Open Roles</span>
    </div>
    <div class="stat-chip">
      <span class="stat-value">${majorCount}</span>
      <span class="stat-label">Departments</span>
    </div>
    <div class="stat-chip">
      <span class="stat-value">${WEEK_OF}</span>
      <span class="stat-label">Week Of</span>
    </div>
  `;
}

function buildTicker() {
  const track = document.getElementById("ticker-track");
  const trendMap = {
    up: { icon: "▲", label: "6+ openings", className: "up" },
    down: { icon: "▼", label: "0–2 openings", className: "down" },
    steady: { icon: "—", label: "3–5 openings", className: "steady" }
  };

  const items = Object.values(MAJORS).map(m => {
    const count = m.jobs.length;
    const trendKey = count > 5 ? "up" : count >= 3 ? "steady" : "down";
    const trend = trendMap[trendKey];
    return `
      <span class="ticker-item">
        <b>${m.label.toUpperCase()}</b>
        ${count} OPEN
        <span class="ticker-icon ${trend.className}" title="${trend.label}">${trend.icon}</span>
      </span>`;
  });

  track.innerHTML = items.join("") + items.join("");
}

function buildNav() {
  const nav = document.getElementById("majors-nav");
  nav.innerHTML = "";
  Object.entries(MAJORS).forEach(([key, m]) => {
    const btn = document.createElement("button");
    btn.className = "major-btn" + (key === activeMajor ? " active" : "");
    btn.innerHTML = `
      <span class="icon">${m.icon || "•"}</span>
      <span class="label">${m.label}</span>
      <span class="count">${m.jobs.length}</span>
    `;
    btn.onclick = () => {
      activeMajor = key;
      buildNav();
      renderPanel();
    };
    nav.appendChild(btn);
  });
}

function renderPanel() {
  const m = MAJORS[activeMajor];
  document.getElementById("panel-title").textContent = m.label;
  document.getElementById("panel-desc").textContent = m.desc || "";
  document.getElementById("week-chip").textContent = "Week of " + WEEK_OF;

  const list = document.getElementById("job-list");
  list.innerHTML = "";

  if (!m.jobs.length) {
    list.innerHTML = `<li class="empty-state">No roles posted for this department yet — check back next Monday.</li>`;
    return;
  }

  m.jobs.forEach((job, i) => {
    const selectionKey = activeMajor + "::" + i;
    const isChecked = selected.has(selectionKey);

    const li = document.createElement("li");
    li.innerHTML = `
      <div class="job${isChecked ? " checked" : ""}" data-key="${selectionKey}">
        <label class="job-check">
          <input type="checkbox" ${isChecked ? "checked" : ""} data-key="${selectionKey}">
          <span class="box">
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#241536" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </label>
        <span class="job-rank">${i + 1}</span>
        <span class="job-main">
          <p class="job-title">${job.title}</p>
          <span class="job-company">${job.company || ""}</span>
        </span>
        <!-- link icon removed; job.link still present for modal/email -->
      </div>
    `;
    list.appendChild(li);
  });

  // wire up checkboxes
  list.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", onCheckboxChange);
  });
}

function onCheckboxChange(e) {
  const key = e.target.dataset.key;
  const [majorKey, idx] = key.split("::");
  const job = MAJORS[majorKey].jobs[Number(idx)];
  const jobRow = e.target.closest(".job");

  if (e.target.checked) {
    selected.set(key, { ...job, majorLabel: MAJORS[majorKey].label });
    jobRow.classList.add("checked");
  } else {
    selected.delete(key);
    jobRow.classList.remove("checked");
  }

  updateSelectionBar();
}

function updateSelectionBar() {
  const bar = document.getElementById("selection-bar");
  const count = selected.size;
  document.getElementById("selected-count").textContent = count;
  document.getElementById("plural-s").textContent = count === 1 ? "" : "s";
  bar.classList.toggle("visible", count > 0);
}

function bindSelectionBar() {
  document.getElementById("email-btn").addEventListener("click", openModal);
}

function bindModal() {
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") closeModal();
  });
  document.getElementById("send-btn").addEventListener("click", sendSelectedJobs);
  document.getElementById("email-input").addEventListener("click", showEmailKeyboard);
  buildEmailKeyboard();
}

function showEmailKeyboard() {
  document.getElementById("email-keyboard").classList.add("visible");
}

let emailKeyboardShift = false;

function buildEmailKeyboard() {
  const keyboard = document.getElementById("email-keyboard");
  const rows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["@", ".", "-", "_", "+", "!", "#", "$", "%", "&"],
    ["'", "*", "/", "=", "?", "^", "`", "{", "|", "}", "~"]
  ];

  keyboard.innerHTML = rows.map(row => `
    <div class="keyboard-row">
      ${row.map(key => {
        const displayedKey = emailKeyboardShift && /^[a-z]$/.test(key) ? key.toUpperCase() : key;
        return `<button type="button" class="keyboard-key" data-key="${displayedKey}" aria-label="${displayedKey}">${displayedKey}</button>`;
      }).join("")}
    </div>
  `).join("") + `
    <div class="keyboard-row keyboard-actions">
      <button type="button" class="keyboard-key keyboard-action" data-action="shift" aria-label="Shift">${emailKeyboardShift ? "SHIFT" : "Shift"}</button>
      <button type="button" class="keyboard-key keyboard-action" data-action="backspace" aria-label="Backspace">⌫</button>
      <button type="button" class="keyboard-key keyboard-action keyboard-clear" data-action="clear">Clear</button>
    </div>
  `;

  keyboard.onclick = (e) => {
    const keyButton = e.target.closest("button");
    if (!keyButton) return;

    const input = document.getElementById("email-input");
    const action = keyButton.dataset.action;
    if (action === "shift") {
      emailKeyboardShift = !emailKeyboardShift;
      buildEmailKeyboard();
      return;
    }
    if (action === "backspace") input.value = input.value.slice(0, -1);
    else if (action === "clear") input.value = "";
    else input.value += keyButton.dataset.key;
    if (emailKeyboardShift) {
      emailKeyboardShift = false;
      buildEmailKeyboard();
    }
    input.dispatchEvent(new Event("input", { bubbles: true }));
  };
}

function openModal() {
  const overlay = document.getElementById("modal-overlay");
  const list = document.getElementById("modal-job-list");
  const sub = document.getElementById("modal-sub");

  const jobs = Array.from(selected.values());
  sub.textContent = `We'll send the links for your ${jobs.length} selected role${jobs.length === 1 ? "" : "s"}.`;

  list.innerHTML = jobs.map(j => `
    <li>${j.title} — ${j.company}<span>${j.majorLabel} · ${j.link}</span></li>
  `).join("");

  document.getElementById("modal-status").textContent = "";
  document.getElementById("modal-status").className = "modal-status";
  document.getElementById("email-keyboard").classList.remove("visible");
  emailKeyboardShift = false;
  overlay.classList.add("visible");
}

function buildMailto(jobs, toEmail) {
  const subject = encodeURIComponent(`Job links — ${WEEK_OF}`);
  const bodyLines = jobs.map((j, i) => `${i + 1}. ${j.title} — ${j.company} (${j.majorLabel})\n${j.link}`);
  const body = encodeURIComponent(`Here are the roles you selected for ${WEEK_OF}:\n\n${bodyLines.join("\n\n")}`);
  let mailto = `mailto:${encodeURIComponent(toEmail || "")}?subject=${subject}&body=${body}`;
  return mailto;
}

function openMailClient() {
  const emailInput = document.getElementById("email-input");
  const email = emailInput.value.trim();
  const jobs = Array.from(selected.values());
  const mailto = buildMailto(jobs, email);
  // open in new window/tab to avoid navigation in single-page contexts
  window.open(mailto);
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("visible");
  document.getElementById("email-keyboard").classList.remove("visible");
}

function sendSelectedJobs() {
  const emailInput = document.getElementById("email-input");
  const status = document.getElementById("modal-status");
  const email = emailInput.value.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = "Please enter a valid email address.";
    status.className = "modal-status error";
    return;
  }

  if (!window.emailjs || EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
    status.textContent = "Email sending isn't set up yet — see the setup note at the top of jobs-script.js.";
    status.className = "modal-status error";
    return;
  }

  const jobs = Array.from(selected.values());
  const jobListText = jobs
    .map((j, i) => `${i + 1}. ${j.title} (${j.company}, ${j.majorLabel}) — ${j.link}`)
    .join("\n");

  const sendBtn = document.getElementById("send-btn");
  sendBtn.disabled = true;
  sendBtn.textContent = "Sending...";
  const payload = {
    to_email: email,
    job_count: jobs.length,
    week_of: WEEK_OF,
    job_list: jobListText
  };

  console.debug("Email payload:", payload);

  if (!window.emailjs || typeof emailjs.send !== "function") {
    console.error("EmailJS SDK not available or not loaded correctly.");
    status.textContent = "EmailJS SDK not loaded. Check the script include in jobs.html.";
    status.className = "modal-status error";
    sendBtn.disabled = false;
    sendBtn.textContent = "Send Links";
    return;
  }

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload)
    .then((res) => {
      console.debug("EmailJS response:", res);
      status.textContent = "Sent! Check your inbox for the links.";
      status.className = "modal-status success";
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Links";
      setTimeout(closeModal, 1800);
    })
    .catch((err) => {
      console.error("EmailJS send error:", err);

      // Friendly, more-detailed error message for debugging — user can copy this
      let details = "";
      try {
        if (err && typeof err === "object") {
          if (err.status) details += ` Status: ${err.status}.`;
          if (err.text) details += ` Response: ${err.text}`;
          if (!details) details = " " + JSON.stringify(err);
        } else {
          details = " " + String(err);
        }
      } catch (ex) {
        details = " (error serializing error)";
      }

      status.textContent = "Something went wrong sending that email." + details;
      status.className = "modal-status error";
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Links";
    });
}

init();
