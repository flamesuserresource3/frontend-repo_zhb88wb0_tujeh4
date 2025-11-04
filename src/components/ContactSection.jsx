export default function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">Contact us</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">Have questions about pricing, features, or enterprise? Send a message.</p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget as HTMLFormElement;
          form.reset();
          alert("Thanks! We'll get back to you shortly.");
        }}
        className="mx-auto mt-10 grid max-w-2xl gap-4"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            required
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full rounded-lg border border-black/10 bg-white px-4 py-2 text-sm outline-none ring-indigo-500/20 placeholder:text-zinc-400 focus:ring-4 dark:border-white/10 dark:bg-zinc-900"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full rounded-lg border border-black/10 bg-white px-4 py-2 text-sm outline-none ring-indigo-500/20 placeholder:text-zinc-400 focus:ring-4 dark:border-white/10 dark:bg-zinc-900"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject (optional)"
          className="w-full rounded-lg border border-black/10 bg-white px-4 py-2 text-sm outline-none ring-indigo-500/20 placeholder:text-zinc-400 focus:ring-4 dark:border-white/10 dark:bg-zinc-900"
        />
        <textarea
          required
          name="message"
          placeholder="Your message"
          rows={5}
          className="w-full rounded-lg border border-black/10 bg-white px-4 py-2 text-sm outline-none ring-indigo-500/20 placeholder:text-zinc-400 focus:ring-4 dark:border-white/10 dark:bg-zinc-900"
        />
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
            <input type="checkbox" className="rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500" />
            I agree to the privacy policy
          </label>
          <button type="submit" className="rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:opacity-90">
            Send message
          </button>
        </div>
      </form>
    </section>
  );
}
