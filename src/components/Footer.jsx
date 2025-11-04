export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 bg-white py-10 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">© {year} VibeLaunch. All rights reserved.</p>
        <div className="flex items-center gap-5 text-sm">
          <a href="#privacy" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Privacy</a>
          <a href="#terms" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Terms</a>
          <a href="#contact" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
