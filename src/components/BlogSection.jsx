const posts = [
  {
    title: "Announcing SaaSFlow Pro",
    excerpt: "All-new collaboration features, advanced analytics, and more.",
    date: "Oct 2, 2025",
    author: "Team SaaSFlow",
  },
  {
    title: "Designing a delightful onboarding",
    excerpt: "Principles we used to reduce time-to-value by 40%.",
    date: "Sep 18, 2025",
    author: "Casey Park",
  },
  {
    title: "From MVP to scale",
    excerpt: "What we learned taking our infra from 0 to millions of requests.",
    date: "Aug 29, 2025",
    author: "DevOps Guild",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">Latest from the blog</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">Insights, releases, and tips to help you build better.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-white/10 dark:bg-zinc-900">
            <div className="text-xs text-zinc-500">{p.date}</div>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900 group-hover:text-indigo-600 dark:text-white">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.excerpt}</p>
            <div className="mt-4 text-xs text-zinc-500">By {p.author}</div>
            <a href="#" className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:underline">Read more</a>
          </article>
        ))}
      </div>
    </section>
  );
}
