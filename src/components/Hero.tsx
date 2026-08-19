export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-6xl items-center px-6 py-20">
      <div className="max-w-3xl">
        <p className="mb-5 inline-flex rounded-full border border-sky-300/30 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-200">
          Portfolio website in progress
        </p>
        <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
          Building clean digital experiences for ambitious brands.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          faY0Tech blends thoughtful strategy, modern engineering, and polished interfaces to help teams launch fast and grow with confidence.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a className="rounded-full bg-sky-300 px-6 py-3 text-center font-bold text-slate-950 transition hover:bg-sky-200" href="mailto:hello@fay0tech.com">
            Start a project
          </a>
          <a className="rounded-full border border-white/20 px-6 py-3 text-center font-bold text-white transition hover:border-white/50 hover:bg-white/10" href="#work">
            View direction
          </a>
        </div>
      </div>
    </section>
  );
}
