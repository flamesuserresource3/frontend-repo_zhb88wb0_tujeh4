import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900 dark:from-zinc-950 dark:to-zinc-900 dark:text-zinc-100">
      <Navbar />

      <main>
        {/* Hero (inline to keep component count at 4 while still showcasing a modern hero) */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                Build, launch, and scale your SaaS faster
              </h1>
              <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-300">
                Auth, billing, blog, and beautiful UI — all in one modern starter. Ship with confidence and focus on what matters.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <a href="#pricing" className="rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:opacity-90">
                  Get started free
                </a>
                <a href="#blog" className="rounded-lg border border-black/10 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-white/10 dark:text-white dark:hover:bg-zinc-800">
                  Read the blog
                </a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 text-xs text-zinc-500">
                <div>SSO-ready</div>
                <div>API first</div>
                <div>Dark mode</div>
              </div>
            </div>
          </div>
        </section>

        <PricingSection />
        <BlogSection />
        <ContactSection />
      </main>

      <footer className="border-t border-black/10 bg-white py-6 text-center text-sm text-zinc-500 dark:border-white/10 dark:bg-zinc-900">
        © {new Date().getFullYear()} SaaSFlow. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
