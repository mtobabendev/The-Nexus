import React from "react";
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

function App() {
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
          PennyCore landing hub, spinner interface, card archive, state packet
          vault, and operator-controlled source-of-truth console.
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
        <article className="module-card">
          <div className="module-icon">
            <Shield size={22} />
          </div>
          <h2>Operator Gate</h2>
          <p>
            Authorization layers, protected routing, and owner-controlled access
            for internal systems.
          </p>
        </article>

        <article className="module-card">
          <div className="module-icon">
            <Database size={22} />
          </div>
          <h2>Penny Database</h2>
          <p>
            Structured state, source-of-truth records, continuity packets, and
            system memory indexes.
          </p>
        </article>

        <article className="module-card">
          <div className="module-icon">
            <Archive size={22} />
          </div>
          <h2>Card Archive</h2>
          <p>
            Legendary Penny variants, deck records, art slots, metadata, and
            gallery expansion paths.
          </p>
        </article>

        <article className="module-card">
          <div className="module-icon">
            <Radio size={22} />
          </div>
          <h2>Spawn Routing</h2>
          <p>
            Visible launch flows, QR handoffs, prompt rooms, watch surfaces, and
            safe operator-controlled entry points.
          </p>
        </article>

        <article className="module-card">
          <div className="module-icon">
            <Wand2 size={22} />
          </div>
          <h2>Spinner Stage</h2>
          <p>
            Landing artwork bay for Penny, 3D orbit UI, rotating panels, and
            future interactive slot selection.
          </p>
        </article>

        <article className="module-card">
          <div className="module-icon">
            <Sparkles size={22} />
          </div>
          <h2>Concierge Layer</h2>
          <p>
            WildCard DEV presentation shell, brand surface, and system-facing
            experience layer.
          </p>
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