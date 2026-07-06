import React from "react";
import { createRoot } from "react-dom/client";
import { Sparkles, Shield, Database, Radio, Spade } from "lucide-react";
import "./style.css";

function App() {
  return (
    <main className="nexus-shell">
      <section className="hero">
        <div className="badge">
          <Spade size={18} />
          <span>WildCard DEV // The Nexus</span>
        </div>

        <h1>PennyCore Nexus</h1>
        <p className="subtitle">
          Spinner-first Discord landing page, Penny database hub, card archive,
          state packet vault, and operator-controlled source-of-truth console.
        </p>

        <div className="spinner">
          <div className="orbit orbit-one">
            <button>Spawn</button>
            <button>Discord</button>
            <button>Cards</button>
            <button>Vault</button>
          </div>
          <div className="core">
            <Spade size={52} />
            <span>NEXUS</span>
          </div>
        </div>
      </section>

      <section className="grid">
        <article>
          <Shield />
          <h2>Owner Gate</h2>
          <p>Visible routes only. Secrets stay out of public assets. Auth remains operator-controlled.</p>
        </article>

        <article>
          <Database />
          <h2>Penny Database</h2>
          <p>Canon, variants, cards, prompts, state packets, assets, and restore manifests live here.</p>
        </article>

        <article>
          <Radio />
          <h2>Discord Rally Hub</h2>
          <p>Main community landing point with spinner navigation and portable Penny routing.</p>
        </article>

        <article>
          <Sparkles />
          <h2>Visual Canon</h2>
          <p>Magic-card style Penny variants, series labels, holo panels, QR route cards, and save points.</p>
        </article>
      </section>

      <footer>
        Right Person. Right State. Right Next Action. // Drag the deck, honey.
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
