const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const STEPS = [
  {
    title: "Discovery",
    text: "Understand the business problem, data sources, and success metrics before writing a line of code.",
    icon: (
      <Icon>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </Icon>
    ),
  },
  {
    title: "Data Exploration",
    text: "Clean the data, check its quality, and choose the right approach — kept as simple as the problem allows.",
    icon: (
      <Icon>
        <rect width="18" height="7" x="3" y="3" rx="1" />
        <rect width="9" height="7" x="3" y="14" rx="1" />
        <rect width="5" height="7" x="16" y="14" rx="1" />
      </Icon>
    ),
  },
  {
    title: "Development",
    text: "Build and train in short, reviewable iterations so you see results every week.",
    icon: (
      <Icon>
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </Icon>
    ),
  },
  {
    title: "Evaluation",
    text: "Validate models with the right metrics, cross-validation, and edge cases before release.",
    icon: (
      <Icon>
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </Icon>
    ),
  },
  {
    title: "Deployment",
    text: "Dockerized models and APIs deployed to your server or AWS with clean environments and rollbacks.",
    icon: (
      <Icon>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </Icon>
    ),
  },
  {
    title: "Support",
    text: "Monitoring, retraining, and improvements after launch — I don't disappear at handover.",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <path d="m4.93 4.93 4.24 4.24" />
        <path d="m14.83 9.17 4.24-4.24" />
        <path d="m14.83 14.83 4.24 4.24" />
        <path d="m9.17 14.83-4.24 4.24" />
      </Icon>
    ),
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#111715] px-6 py-20 font-['Inter',sans-serif] sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#198161]">
          Process
        </p>
        <h2 className="mt-4 font-['Space_Grotesk',sans-serif] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          How I work
        </h2>
        <p className="mt-4 text-base text-[#9aa5a0] sm:text-lg">
          A predictable path from an initial conversation to a live, supported
          product.
        </p>

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
           <li
  key={s.title}
  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#3fb68b]/50 hover:shadow-[0_0_40px_rgba(63,182,139,0.18)]"
>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3fb68b]/30 bg-[#3fb68b]/10 text-[#198161]">
                  {s.icon}
                </span>
                <span className="font-mono text-sm text-[#9aa5a0]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-['Space_Grotesk',sans-serif] text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#9aa5a0]">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}