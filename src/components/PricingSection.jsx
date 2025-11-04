import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    descriptor: "Free forever",
    features: ["Unlimited projects", "Basic analytics", "Community support"],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    descriptor: "per month",
    features: ["Everything in Starter", "Advanced analytics", "Priority support", "Team collaboration"],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$99",
    descriptor: "per month",
    features: ["Unlimited seats", "SSO & SAML", "Audit logs", "Dedicated success manager"],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">Pricing for every stage</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">Simple, transparent plans designed to grow with you.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl border p-6 shadow-sm transition hover:shadow-lg dark:border-white/10 ${
              tier.highlighted ? "border-indigo-500/40 ring-2 ring-indigo-500/30" : "border-black/10"
            }`}
          >
            {tier.highlighted && (
              <span className="absolute -top-3 left-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">Most popular</span>
            )}
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{tier.name}</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-zinc-900 dark:text-white">{tier.price}</span>
              <span className="text-sm text-zinc-500">{tier.descriptor}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <Check className="mt-0.5 h-4 w-4 text-green-500" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button className={`mt-8 w-full rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition ${
              tier.highlighted
                ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:opacity-90"
                : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900"
            }`}>
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
