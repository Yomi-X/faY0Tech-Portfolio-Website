const navigationItems = ["Work", "Services", "Contact"];

export default function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
      <a className="text-xl font-bold tracking-tight text-white" href="/">
        faY0Tech
      </a>

      <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-sm font-medium text-slate-300 sm:flex">
        {navigationItems.map((item) => (
          <a className="transition hover:text-sky-300" href={`#${item.toLowerCase()}`} key={item}>
            {item}
          </a>
        ))}
      </nav>

      <a
        className="rounded-full border border-sky-300/40 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-sky-300/10"
        href="mailto:hello@fay0tech.com"
      >
        Let&apos;s talk
      </a>
    </header>
  );
}
