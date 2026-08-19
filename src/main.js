const services = [
  {
    title: 'Responsive Websites',
    description: 'Clean, mobile-first pages that make your offer easy to understand on any device.',
  },
  {
    title: 'Frontend Builds',
    description: 'Fast interfaces with thoughtful structure, polished styling, and room to grow.',
  },
  {
    title: 'Launch Support',
    description: 'Practical help getting the first version online, tested, and ready for feedback.',
  },
];

const serviceCards = services
  .map(
    (service) => `
      <article class="service-card">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </article>
    `,
  )
  .join('');

document.querySelector('#root').innerHTML = `
  <header class="navbar" aria-label="Primary navigation">
    <a class="brand" href="#top" aria-label="faY0Tech home">
      <span class="brand-mark">fY</span>
      <span>faY0Tech</span>
    </a>
    <nav>
      <a href="#services">Services</a>
      <a href="mailto:hello@fay0tech.dev">Email</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="top">
      <div class="hero-copy">
        <p class="eyebrow">Portfolio website · First version</p>
        <h1>Building sharp, responsive web experiences for modern teams.</h1>
        <p class="hero-description">
          faY0Tech turns early ideas into focused digital products with clean interfaces,
          clear messaging, and a build that is ready to expand section by section.
        </p>
        <div class="hero-actions" aria-label="Hero actions">
          <a class="button primary" href="mailto:hello@fay0tech.dev">Start a project</a>
          <a class="button secondary" href="#services">View services</a>
        </div>
      </div>
      <div class="hero-card" aria-label="Project snapshot">
        <span class="status-pill">Now shipping</span>
        <strong>Homepage v1</strong>
        <p>Navbar, hero, services preview, and footer — responsive today, ready for future sections.</p>
      </div>
    </section>

    <section class="services" id="services" aria-labelledby="services-title">
      <div class="section-heading">
        <p class="eyebrow">Services preview</p>
        <h2 id="services-title">Simple ways to move your web presence forward.</h2>
      </div>
      <div class="service-grid">
        ${serviceCards}
      </div>
    </section>
  </main>

  <footer class="footer">
    <p>© ${new Date().getFullYear()} faY0Tech. Built for the first launch.</p>
    <a href="mailto:hello@fay0tech.dev">hello@fay0tech.dev</a>
  </footer>
`;
