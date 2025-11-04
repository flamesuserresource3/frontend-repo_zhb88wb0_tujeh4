import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    // Fake delay to simulate request
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-stretch gap-10 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
            <Mail className="h-3.5 w-3.5" /> Contact
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Let’s build something great together
          </h2>
          <p className="mt-3 max-w-prose text-zinc-600 dark:text-zinc-300">
            Questions about pricing, security, or enterprise? Send us a message and a member of our team will get back within 1 business day.
          </p>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
              <input required type="text" className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none ring-0 transition focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white" placeholder="Jane Doe" />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
              <input required type="email" className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none ring-0 transition focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white" placeholder="jane@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
              <textarea required rows={4} className="w-full resize-none rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none ring-0 transition focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white" placeholder="Tell us about your project..." />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "success" ? (
              <>Message sent</>
            ) : (
              <>
                <Send className="h-4 w-4" />
                {status === "loading" ? "Sending..." : "Send message"}
              </>
            )}
          </button>
          {status === "success" && (
            <p className="mt-3 text-sm text-green-600 dark:text-green-400">Thanks! We received your message.</p>
          )}
        </form>
      </div>
    </section>
  );
}
