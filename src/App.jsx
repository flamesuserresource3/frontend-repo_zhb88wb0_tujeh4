import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />

        {/* Blog preview */}
        <section id="blog" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">From the blog</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">Insights on product, growth, and engineering.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{
              title: "Designing delightful onboarding",
              tag: "Product",
              excerpt: "Reduce friction and boost activations with these patterns.",
            },{
              title: "Usage-based pricing at scale",
              tag: "Growth",
              excerpt: "How we built a flexible billing system with clear UX.",
            },{
              title: "A pragmatic guide to OAuth",
              tag: "Engineering",
              excerpt: "Auth that’s secure, simple, and maintainable.",
            }].map((p) => (
              <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 h-36 w-full rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 transition dark:from-indigo-950 dark:to-blue-950" />
                <span className="inline-flex items-center rounded-full border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">{p.tag}</span>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{p.excerpt}</p>
                <div className="mt-4 text-sm font-semibold text-indigo-600">Read more →</div>
              </article>
            ))}
          </div>
        </section>

        <PricingSection />
        <ContactSection />
      </main>

      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
        © {new Date().getFullYear()} SaaSFlow. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
