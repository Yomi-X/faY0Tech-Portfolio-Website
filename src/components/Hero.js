function Hero() {
  return `
    <section class="hero" aria-labelledby="hero-heading">
      <div class="hero__content">
        <p class="eyebrow">faY0Tech digital growth studio</p>
        <h1 id="hero-heading">Digital presence, stronger systems, and web experiences built for growth.</h1>
        <p class="hero__lead">
          We help businesses become easier to find, easier to trust, and easier to buy from by
          combining credible brand positioning, conversion-minded web experiences, and practical
          systems that improve day-to-day operations.
        </p>
        <div class="hero__actions" aria-label="Primary actions">
          <a class="button" href="mailto:hello@fay0tech.com">
            Start the conversation
          </a>
          <a class="button button--secondary" href="#outcomes-heading">
            Explore outcomes
          </a>
        </div>
      </div>
    </section>
  `;
}

export default Hero;
