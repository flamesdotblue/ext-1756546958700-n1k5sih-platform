import { Code, Shield, Zap, Cpu } from 'lucide-react';

const features = [
  {
    title: 'Composable Workflows',
    description: 'Wire services, jobs, and infra as a clear, auditable graph. Ship faster with repeatable patterns.',
    icon: Code,
  },
  {
    title: 'Secure by Default',
    description: 'Secrets, policies, and access control integrated end-to-end with least-privilege boundaries.',
    icon: Shield,
  },
  {
    title: 'Real-time Telemetry',
    description: 'Stream logs, traces, and metrics into a single matrix. Investigate issues in seconds, not hours.',
    icon: Zap,
  },
  {
    title: 'Edge-Ready Performance',
    description: 'Optimized pipelines and caching layers deliver sub-ms responses across regions.',
    icon: Cpu,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-white/5 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Everything you need to ship with confidence</h2>
          <p className="mt-3 text-gray-300">Focus on code. We handle the matrix—visibility, performance, and governance out of the box.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, icon: Icon }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-emerald-400/40">
      <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-emerald-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-400/20">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
    </div>
  );
}
