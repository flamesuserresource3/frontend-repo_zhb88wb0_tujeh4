import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    description: "Everything you need to validate your idea.",
    features: ["Email auth", "Basic analytics", "Community support"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For growing products that need reliability.",
    features: [
      "OAuth providers",
      "Usage-based billing",
      "Priority support",
      "Custom domains",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$99",
    period: "/mo",
    description: "Advanced features and premium support.",
    features: ["SSO/SAML", "Audit logs", "Dedicated infrastructure"],
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">
          Choose a plan that grows with your business.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl border p-6 shadow-sm transition hover:shadow-lg dark:border-zinc-800 ${
              tier.highlighted
                ? "border-transparent bg-gradient-to-b from-indigo-600 to-blue-600 text-white shadow-blue-600/20"
                : "bg-white dark:bg-zinc-900"
            }`}
          >
            <h3 className={`text-lg font-semibold ${tier.highlighted ? "text-white" : "text-zinc-900 dark:text-white"}`}>
              {tier.name}
            </h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className={`text-3xl font-extrabold ${tier.highlighted ? "text-white" : "text-zinc-900 dark:text-white"}`}>
                {tier.price}
              </span>
              <span className={`text-sm ${tier.highlighted ? "text-white/80" : "text-zinc-500 dark:text-zinc-400"}`}>
                {tier.period}
              </span>
            </div>
            <p className={`mt-2 text-sm ${tier.highlighted ? "text-white/90" : "text-zinc-600 dark:text-zinc-300"}`}>
              {tier.description}
            </p>

            <ul className="mt-6 space-y-2">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span
                    className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ${
                      tier.highlighted ? "bg-white/20" : "bg-indigo-600/10"
                    }`}
                  >
                    <Check className={`h-3.5 w-3.5 ${tier.highlighted ? "text-white" : "text-indigo-600"}`} />
                  </span>
                  <span className={tier.highlighted ? "text-white/95" : "text-zinc-700 dark:text-zinc-300"}>{f}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-6 w-full rounded-lg px-4 py-2 text-sm font-semibold transition ${
                tier.highlighted
                  ? "bg-white text-indigo-700 hover:opacity-90"
                  : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
              }`}
            >
              Choose {tier.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
