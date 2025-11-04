import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[68vh] w-full">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* soft gradient overlay to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-zinc-950 dark:via-zinc-950/60" />
      </div>

      <div className="mx-auto -mt-40 max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-white">
            Modern fintech SaaS for ambitious teams
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-300">
            Auth, billing, analytics, and a blazing-fast blog engineered for growth.
            Ship beautiful experiences with confidence.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:opacity-90"
            >
              Start free trial
            </a>
            <a
              href="#blog"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-200 px-5 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              Read the blog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
