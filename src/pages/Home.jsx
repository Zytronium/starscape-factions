import "../App.css";

export default function Home() {
  return (
    <main id="root">
      <div className="preview-banner">
        🚧 This website is <strong>under construction</strong> and this is a preview. The service is <strong>not yet available</strong>. 🚧
      </div>
      <section className="hero">
        <div className="hero-inner">
          <img src="/logo.png" className="brand" alt="Starscape Factions logo" />
          <h1 className="hero-title">Welcome to the Factionscape</h1>
          <p className="lead">
            Professional faction websites. Cheap. Modern. SEO-friendly.
          </p>

          <div className="hero-ctas">
            <a className="btn primary" href="/shop">Get Started</a>
            <a className="btn ghost" href="/factions">Browse Collection</a>
          </div>

          <p className="promo">First customers get <strong>50% off</strong> and priority build</p>
          <a className="btn ghost" href="/pricing">View Pricing</a>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">What we offer</h2>

        <div className="features-grid">
          <article className="card feature">
            <div className="icon">💰</div>
            <h3>Affordable Pricing</h3>
            <p>Cheap, reasonable pricing ranging from 2k credits to 20k credits, depending on your request</p>
          </article>

          <article className="card feature">
            <div className="icon">🎨</div>
            <h3>Custom Themes</h3>
            <p>Customize your theme to your faction's color scheme</p>
          </article>

          <article className="card feature">
            <div className="icon">🧩</div>
            <h3>Modern Design</h3>
            <p>Using the latest modern styles and techniques to create websites with a modern feel; or try another style if you don't like it</p>
          </article>

          <article className="card feature">
            <div className="icon">🔎</div>
            <h3>SEO Friendly</h3>
            <p>Prerendered, responsive layouts with SEO-optimized content keeps your website is on top of the search results</p>
          </article>

          <article className="card feature">
            <div className="icon">📣</div>
            <h3>Free Advertising</h3>
            <p>Option to upload your faction data to The Faction Nexus to appear on their factions directory, as well as on our list of faction websites</p>
          </article>

          <article className="card feature">
            <div className="icon">⚙️</div>
            <h3>Full Control</h3>
            <p>You decide what goes on your website; plus potential access to website analytics in the future</p>
          </article>
        </div>
      </section>

      <section className="browse">
        <h2 className="section-title">Browse our Collection</h2>
        <p className="muted">
          See sites built for previous clients. If none are public yet, be the
          first to get a showcase site and <strong>50% off</strong>!
        </p>
        <div className="cta-row">
          <a className="btn primary" href="/factions">View Directory</a>
          <a className="btn ghost" href="/contact">Claim Discount</a>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="section-title">Testimonials</h2>
        <div className="test-grid">
          <div className="card testimonial">
            <p className="quote">“Placeholder testimonial — real ones coming soon.”</p>
            <p className="author">— A satisfied commander</p>
          </div>
        </div>
      </section>

      <section className="partners">
        <h2 className="section-title">Our Partners</h2>
        <div className="partners-row">
          <a href="https://thefactionnexus.tech/?ref=starscape-factions" target="_blank" rel="noreferrer" className="partner-link">
            <img src="/TFN_logo.png" alt="The Faction Nexus" className="partner-logo" />
            The Faction Nexus
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div>© {new Date().getFullYear()} Zytronium. All rights reserved.</div>
      </footer>
    </main>
  );
}
