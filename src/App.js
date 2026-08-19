import Hero from './components/Hero.js';

const outcomes = [
  {
    title: 'Visibility that attracts better opportunities',
    description:
      'Clarify your message, improve discoverability, and give prospects a stronger reason to trust your brand before the first conversation.',
  },
  {
    title: 'Conversion-focused web experiences',
    description:
      'Turn attention into action with pages, flows, and calls to action designed around the way your customers actually decide.',
  },
  {
    title: 'Systems that reduce friction',
    description:
      'Connect the tools, automations, and operational touchpoints that help your team move faster with fewer manual bottlenecks.',
  },
];

const pillars = [
  'Digital presence that communicates credibility',
  'Automation that saves time and improves consistency',
  'Web experiences built to support measurable growth',
  'Operational improvements that make the business easier to run',
];

const OutcomeCard = ({ title, description }) => `
  <article class="card">
    <h3>${title}</h3>
    <p>${description}</p>
  </article>
`;

function App() {
  return `
    <main>
      ${Hero()}

      <section class="section section--intro" aria-labelledby="positioning-heading">
        <div class="section__content">
          <p class="eyebrow">Brand positioning</p>
          <h2 id="positioning-heading">More than a website partner.</h2>
          <p>
            faY0Tech helps businesses shape a stronger digital presence, build smarter systems,
            and launch growth-focused web experiences that support real business outcomes.
          </p>
        </div>
      </section>

      <section class="section" aria-labelledby="outcomes-heading">
        <div class="section__content">
          <p class="eyebrow">Business outcomes</p>
          <h2 id="outcomes-heading">Built for visibility, conversion, and operational momentum.</h2>
          <div class="card-grid">
            ${outcomes.map(OutcomeCard).join('')}
          </div>
        </div>
      </section>

      <section class="section section--accent" aria-labelledby="systems-heading">
        <div class="section__content section__content--split">
          <div>
            <p class="eyebrow">What we strengthen</p>
            <h2 id="systems-heading">A digital foundation that works harder for your business.</h2>
          </div>
          <ul class="pillar-list">
            ${pillars.map((pillar) => `<li>${pillar}</li>`).join('')}
          </ul>
        </div>
      </section>
    </main>
  `;
}

export default App;
