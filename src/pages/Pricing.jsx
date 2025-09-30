/* src/pages/Pricing.jsx */
import "../App.css";

/* --------------------------------------------------------------
   Helper to format numbers with commas (e.g. 15000 → "15,000")
---------------------------------------------------------------- */
const fmt = (n) => Number(n).toLocaleString();

/* --------------------------------------------------------------
   Main component – purely informational
---------------------------------------------------------------- */
export default function Pricing() {
  return (
    <main id="root" className="pricing-page">
      {/* -----------------------------------------------------------------
          Banner – keeps the same “under construction” tone you use elsewhere
       ----------------------------------------------------------------- */}
      <section className="preview-banner">
        This is a <strong>read‑only</strong> pricing overview and is <strong>not final</strong>.
      </section>

      <h1 className="hero-title">Pricing Overview</h1>

      {/* -----------------------------------------------------------------
          1 Base Build
       ----------------------------------------------------------------- */}
      <article className="card">
        <h2>Base Build</h2>
        <p>
          <strong>Price:</strong> {fmt(2000)} credits or $1&nbsp;USD
        </p>
      </article>

      {/* -----------------------------------------------------------------
          2 Website URL options
       ----------------------------------------------------------------- */}
      <article className="card">
        <h2>Website URL</h2>

        <ul className="price-list">
          <li>
            <code>starscapefactions.netlify.app/&lt;faction-name&gt;</code> – Free
            (second free slot: +{fmt(500)} credits or $0.25)
          </li>
          <li>
            <code>starscapefactions.vercel.app/&lt;faction-name&gt;</code> – Free
            (second free slot: +{fmt(500)} credits or $0.25)
          </li>
          <li>
            <code>starscapefactions.zytronium.dev/&lt;faction-name&gt;</code> – Free
            (second free slot: +{fmt(500)} credits or $0.25)
          </li>
          <li>
            <code>&lt;faction-name&gt;.whatthefuckisakilometer.com</code> – <em>Deluxe</em>:
            +{fmt(1000)} credits or $0.50
          </li>
          <li>
            <code>&lt;faction-name&gt;.starscapefactions.com</code> – <em>Premium</em>:
            $10&nbsp;USD. Credits are <strong>not</strong> accepted for
            this domain because the domain purchase is a real‑world expense.
          </li>
          <li>
            <code>&lt;faction-name&gt;.factionscape.com</code> – <em>Premium</em>:
            $10&nbsp;USD. Credits are <strong>not</strong> accepted for
            this domain because the domain purchase is a real‑world expense.
          </li>
        </ul>
        <p>
          If you already have a domain and just need the website, feel free to pick one
          of these URLs and have it redirect to your website, I'm happy to build your
          website anyway.
        </p>
      </article>

      {/* -----------------------------------------------------------------
          3 Custom Instructions
       ----------------------------------------------------------------- */}
      <article className="card">
        <h2>Instructions</h2>
        <p>
          Prices for specified features are negotiated individually via Discord or
          Email. The exact cost depends on the scope of the requested
          functionality.
        </p>
      </article>

      {/* -----------------------------------------------------------------
          4 Priority levels
       ----------------------------------------------------------------- */}
      <article className="card">
        <h2>Priority (development speed & visibility)</h2>
        <ul className="price-list">
          <li>
            <strong>Standard</strong> – Free<br/>
            <small>- Standard development time</small><br/>
            <small>- Queued behind higher-priority orders</small>
          </li>
          <li>
            <strong>Higher priority</strong>: {fmt(10000)} credits or $2.50<br/>
            <small>- Faster development time</small>
          </li>
          <li>
            <strong>Deluxe priority</strong>: {fmt(50000)} credits or $12.00<br/>
            <small>- Even faster development time</small>
          </li>
          <li>
            <strong>Premium priority</strong>: {fmt(250000)} credits or $30.00<br/>
            <small>- Much faster development time</small><br/>
            <small>- Platinum badge on our public collection (if displayed)</small><br/>
            <small>- Order skips all non‑premium jobs in the queue</small>
          </li>
          <li>
            <strong><em>Maximum priority!</em> </strong>: {fmt(10000000)} credits or $60.00<br/>
            <small>- <strong>ASAP</strong> completion</small><br/>
            <small>- <strong>MINIMUM OF $10 USD PAYMENT</strong> in addition to price in credits if paid with credits</small><br/>
            <small>- Platinum badge on our public collection (if displayed)</small><br/>
            <small>- Order jumps to the very top of the queue; work starts immediately</small>
          </li>
        </ul>
      </article>

      {/* -----------------------------------------------------------------
          5 Payment
       ----------------------------------------------------------------- */}
      <article className="card">
        <h2>Payment</h2>
        <p>
          You may pay in credits, USD, or Bitcoin.
        </p>
        <p>
          Credits can only be traded in-game on Starscape (main game only).<br />
          USD must be paid via Venmo (more options coming soon).<br />
          Bitcoin payments are not yet available.<br />
        </p>
      </article>

      {/* -----------------------------------------------------------------
          6 Donations
       ----------------------------------------------------------------- */}
      <article className="card">
        <h2>Donations</h2>
        <p>
          You may donate in credits, USD, or Bitcoin. Any donation of ≥&nbsp;$25&nbsp;USD
          or ≥&nbsp;200,000&nbsp;credits earns a <strong>premium badge</strong> if your site is
          publicly displayed in our collection.
        </p>
      </article>
    </main>
  );
}