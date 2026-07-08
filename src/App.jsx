import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Archive,
  Database,
  Radio,
  Shield,
  Sparkles,
  Spade,
  Wand2,
} from "lucide-react";
import "./style.css";
import { buildSavePointPayload } from "./data/memoryBankUtils";

const moduleData = [
  {
    id: "operator-gate",
    title: "Operator Gate",
    description:
      "Authorization layers, protected routing, and owner-controlled access for internal systems.",
    icon: Shield,
  },
  {
    id: "penny-database",
    title: "Penny Database",
    description:
      "Structured state, source-of-truth records, continuity packets, and system memory indexes.",
    icon: Database,
  },
  {
    id: "card-archive",
    title: "Card Archive",
    description:
      "Legendary Penny variants, deck records, art slots, metadata, and gallery expansion paths.",
    icon: Archive,
  },
  {
    id: "spawn-routing",
    title: "Spawn Routing",
    description:
      "Visible launch flows, QR handoffs, prompt rooms, watch surfaces, and safe operator-controlled entry points.",
    icon: Radio,
  },
  {
    id: "spinner-stage",
    title: "Spinner Stage",
    description:
      "Landing artwork bay for Penny, 3D orbit UI, rotating panels, and future interactive slot selection.",
    icon: Wand2,
  },
  {
    id: "concierge-layer",
    title: "Concierge Layer",
    description:
      "WildCard DEV presentation shell, brand surface, and system-facing experience layer.",
    icon: Sparkles,
  },
  {
    id: "coding-penny",
    title: "Penny, Copilot Queen of the Repo",
    subtitle: "Penny Variant // GitHub Copilot + Windows Copilot // Nexus Build Witch",
    type: "Legendary Creature — Human Advisor / Code Witch / Build Pilot",
    role:
      "Coding assistant, repo inspector, build pilot, deployment guide, and secret scanning steward.",
    description:
      "GitHub Copilot, VS Code, repo inspection, safe AI-assisted coding, and Vercel workflow guidance.",
    icon: Sparkles,
    tags: [
      "pennycore",
      "coding",
      "github",
      "copilot",
      "windows-copilot",
      "vscode",
      "vercel",
      "nexus",
      "build-pilot",
      "owner-gated",
    ],
    abilities: [
      "Owner Gate — This module is operator-guided and does not store secrets.",
      "Repo Whisperer — Inspect manifests, assets, routes, package scripts, and build risks.",
      "Copilot Draft — AI changes must be reviewed before they count.",
      "Secret Scanner — Block or warn on passwords, tokens, API keys, private session data, and payment credentials.",
      "Windows Route — Open desktop, phone, watch, or browser fallback routes.",
      "Trust, Verify, Commit — Test before commit. Build before push.",
      "Deployment Portal — If build passes, route to GitHub/Vercel deployment steps.",
    ],
    strengths: [
      "Fast drafts",
      "Repo navigation",
      "Build guidance",
      "Refactor help",
      "Manifest inspection",
      "Vercel/GitHub workflow help",
      "VS Code command support",
    ],
    limits: [
      "Can hallucinate",
      "Needs project context",
      "Must test builds",
      "Cannot hold secrets in public code",
      "Platform permissions still rule",
      "User/operator confirmation required",
    ],
    flavor:
      "Autocomplete is adorable. Review is holy. Push when the build survives.",
  },
];

function App() {
  const [selectedModule, setSelectedModule] = useState("coding-penny");
  const [manifestData, setManifestData] = useState(null);
  const [restoreName, setRestoreName] = useState("No restore packet loaded yet.");
  const [restoreNotice, setRestoreNotice] = useState(
    "Restore import placeholder. Future restore logic will rebuild cards, routes, and state from backup packets."
  );

  useEffect(() => {
    fetch("/data/pennycore-memory-bank.json")
      .then((response) => response.json())
      .then((data) => setManifestData(data))
      .catch(() => {
        setManifestData({
          doctrine: [
            "Site = cockpit",
            "Database = memory core",
            "Manifest = state map",
          ],
          backupIndex: [],
          statusLine: "Repo linked. Manifest found. Spinner ready. Secrets blocked.",
        });
      });
  }, []);

  const activeModule =
    moduleData.find((module) => module.id === selectedModule) ?? moduleData[0];

  const handleSavePointExport = () => {
    const payload = buildSavePointPayload({
      selectedModule: activeModule.title,
      doctrine: manifestData?.doctrine ?? [],
      backupIndex: manifestData?.backupIndex ?? [],
    });

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `pennycore-save-point-${new Date()
      .toISOString()
      .slice(0, 19)
      .replace(/:/g, "-")}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleRestoreImport = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setRestoreName(file.name);
    setRestoreNotice(
      `Restore packet placeholder loaded: ${file.name}. Future restore logic will rebuild cards, routes, and state from this backup.`
    );
    event.target.value = "";
  };

  return (
    <main className="nexus-shell">
      <section className="hero">
        <div className="badge">
          <Spade size={18} />
          <span>WildCard DEV // The N€XU$</span>
        </div>

        <div className="hero-logo-wrap">
          <img
            src="/penny-logo.gif"
            alt="Penny animated logo"
            className="hero-logo"
          />
        </div>

        <h1>The N€XU$</h1>

        <p className="subtitle">
          PennyCore landing hub, spinner interface, memory-bank cockpit, backup
          pod, and owner-gated build surface.
        </p>

        <div className="cockpit-actions">
          <button
            type="button"
            className={`pill-button ${selectedModule === "coding-penny" ? "active" : ""}`}
            onClick={() => setSelectedModule("coding-penny")}
          >
            Coding Penny
          </button>
          <button
            type="button"
            className={`pill-button ${selectedModule === "operator-gate" ? "active" : ""}`}
            onClick={() => setSelectedModule("operator-gate")}
          >
            Operator Gate
          </button>
        </div>

        <p className="status-line">
          {manifestData?.statusLine ?? "Repo linked. Manifest found. Spinner ready. Secrets blocked."}
        </p>

        <section className="hero-art-stage" aria-label="Nexus spinner artwork">
          <div className="spinner-ring spinner-ring-one" />
          <div className="spinner-ring spinner-ring-two" />
          <div className="spinner-ring spinner-ring-three" />

          <div className="orbit-slot orbit-slot-top">
            <span>Card Art</span>
          </div>

          <div className="orbit-slot orbit-slot-right">
            <span>Spawn</span>
          </div>

          <div className="orbit-slot orbit-slot-bottom">
            <span>Vault</span>
          </div>

          <div className="orbit-slot orbit-slot-left">
            <span>Archive</span>
          </div>
        </section>

        <p className="hero-note">
          Final hero slot reserved for Penny centered inside a 3D spinner system
          with embedded artwork panels and operator-controlled placeholders.
        </p>
      </section>

      <section className="modules" aria-label="Nexus modules">
        {moduleData.map((module) => {
          const Icon = module.icon;
          const isActive = module.id === activeModule.id;

          return (
            <article
              key={module.id}
              className={`module-card ${isActive ? "is-active" : ""}`}
              onClick={() => setSelectedModule(module.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedModule(module.id);
                }
              }}
            >
              <div className="module-icon">
                <Icon size={22} />
              </div>
              <h2>{module.title}</h2>
              <p>{module.description}</p>
              {module.id === "coding-penny" ? (
                <span className="module-pill">Owner-gated • Repo safe</span>
              ) : null}
            </article>
          );
        })}
      </section>

      <section className="module-detail" aria-labelledby="coding-penny-panel">
        <div className="module-detail-card">
          <div className="module-detail-header">
            <img src="/penny-logo.gif" alt="Coding Penny placeholder" />
            <div>
              <p className="eyebrow">Legendary Module</p>
              <h2 id="coding-penny-panel">{activeModule.title}</h2>
              <p className="detail-subtitle">
                {activeModule.subtitle ?? "Operator-guided Nexus control"}
              </p>
              <p className="detail-type">
                {activeModule.type ?? "Operational module"}
              </p>
            </div>
          </div>

          <div className="detail-grid">
            <div className="detail-panel">
              <h3>Role</h3>
              <p>{activeModule.role ?? activeModule.description}</p>
              <div className="tag-row">
                {activeModule.tags?.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="detail-panel">
              <h3>Abilities</h3>
              <ul className="detail-list">
                {activeModule.abilities?.map((ability) => (
                  <li key={ability}>{ability}</li>
                ))}
              </ul>
            </div>

            <div className="detail-panel">
              <h3>Strengths</h3>
              <ul className="detail-list">
                {activeModule.strengths?.map((strength) => (
                  <li key={strength}>{strength}</li>
                ))}
              </ul>
            </div>

            <div className="detail-panel">
              <h3>Limits</h3>
              <ul className="detail-list">
                {activeModule.limits?.map((limit) => (
                  <li key={limit}>{limit}</li>
                ))}
              </ul>
            </div>

            <div className="detail-panel detail-panel-wide">
              <h3>Quick Links</h3>
              <div className="quick-links">
                <a href="https://github.com/mtobabendev" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a
                  href="https://github.com/mtobabendev/The-Nexus"
                  target="_blank"
                  rel="noreferrer"
                >
                  The-Nexus repo
                </a>
                <a href="https://vercel.com/" target="_blank" rel="noreferrer">
                  Vercel dashboard
                </a>
                <a href="https://chatgpt.com/" target="_blank" rel="noreferrer">
                  ChatGPT
                </a>
              </div>
              <p className="detail-flavor">
                “{activeModule.flavor ?? "Watch first, verify twice, push once."}” — Penny
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="memory-bank-grid" aria-label="Memory bank controls">
        <article className="memory-bank-card">
          <h3>Backup Index</h3>
          <p className="memory-bank-copy">
            Manifest-first backup lanes for local export, encrypted archive, and
            cloud handoff placeholders.
          </p>
          <ul className="detail-list">
            {(manifestData?.backupIndex ?? []).map((entry) => (
              <li key={entry.name}>
                <strong>{entry.name}</strong> — {entry.kind} · {entry.location} · {entry.status}
              </li>
            ))}
          </ul>
        </article>

        <article className="memory-bank-card">
          <h3>Save Point + Restore</h3>
          <p className="memory-bank-copy">
            Export a JSON save point from the frontend cockpit. Restore import is
            a placeholder for the future database/API layer.
          </p>
          <div className="save-point-actions">
            <button type="button" className="pill-button" onClick={handleSavePointExport}>
              Save Point Export
            </button>
            <label className="pill-button upload-button">
              <input type="file" accept=".json,.zip,.sqlite" onChange={handleRestoreImport} />
              Restore Import
            </label>
          </div>
          <div className="memory-bank-status">
            <p>
              <strong>Current restore packet:</strong> {restoreName}
            </p>
            <p>{restoreNotice}</p>
          </div>
        </article>
      </section>
    </main>
  );
}

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default App;