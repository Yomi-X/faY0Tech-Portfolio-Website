export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col gap-3 border-t border-white/10 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} faY0Tech. All rights reserved.</p>
      <p>Designed for a focused first-pass portfolio launch.</p>
    </footer>
  );
}
