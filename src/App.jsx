import React from "react";
import { Sparkles, Shield, Database, Radio, Spade } from "lucide-react";
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
          Spinner-first Discord landing page, Penny database hub, card archive,
          state packet vault, and operator-controlled source-of-truth console.
        </p>

        <div className="spinner">
          <div className="orbit orbit-one">
            <button className="orbit-chip">Vault</button>
            <button className="orbit-chip">Spawn</button>
          </div>

          <div className="core-mark">
            <Spade size={42} />
          </div>
        </div>
      </section>

      <section className="modules">
        <article className="module-card">
          <div className="module-icon">
            <Shield size={20} />
          </div>
          <h2>Operator Gate</h2>
          <p>
            Controlled access, authorization layers, and protected internal
            routing.
          </p>
        </article>

        <article className="module-card">
          <div className="module-icon">
            <Database size={20} />
          </div>
          <h2>Penny Database</h2>
          <p>
            Structured memory, card records, state packets, and continuity
            storage.
          </p>
        </article>

        <article className="module-card">
          <div className="module-icon">
            <Radio size={20} />
          </div>
          <h2>Spawn + Signal</h2>
          <p>
            Launch flows, handoff points, QR routing, and external entry
            surfaces.
          </p>
        </article>

        <article className="module-card">
          <div className="module-icon">
            <Sparkles size={20} />
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

export default App;