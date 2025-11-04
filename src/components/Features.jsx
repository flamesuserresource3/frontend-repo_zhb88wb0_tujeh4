import { Rocket, Shield, Stars } from "lucide-react";

const features = [
  {
    title: "Blazing performance",
    description:
      "Optimized defaults, smart bundling, and edge-ready APIs so your app stays fast.",
    icon: Rocket,
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Enterprise-grade security",
    description:
      "Hardened best practices, secrets management, and role-based access built in.",
    icon: Shield,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Delightful UX",
    description:
      "Thoughtful components, motion, and theming tools to craft beautiful experiences.",
    icon: Stars,
    color: "from-fuchsia-500 to-pink-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Everything you need to ship
          </h2>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">
            A cohesive set of tools that work beautifully together — from first commit to global scale.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, icon: Icon, color }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{description}</p>
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-white/40 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:from-white/10" />
    </div>
  );
}
