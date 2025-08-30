import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="relative border-t border-white/5 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">Deploy your developer matrix today</h3>
            <p className="mt-2 max-w-prose text-gray-300">Start with our free tier. Connect your repos, stream telemetry, and visualize your system in minutes.</p>
          </div>
          <div className="flex w-full flex-col items-start gap-3 sm:flex-row md:justify-end">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black sm:w-auto"
            >
              Create free account
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black sm:w-auto"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
