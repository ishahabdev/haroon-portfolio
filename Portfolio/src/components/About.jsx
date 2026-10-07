const STATS = [
  { value: "2.5+", label: "Years Experience" },
  { value: "5+", label: "Projects Delivered" },
  { value: "4", label: "International Clients" },
  { value: "1", label: "Live AI Agent" },
];

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const FEATURES = [
  {
    title: "End-to-End Ownership",
    text: "From data collection to model deployment — I own the entire process. No handoffs, no miscommunication, no surprises.",
    icon: (
      <Icon>
        <path d="m12 2 10 5-10 5L2 7Z" />
        <path d="m2 12 10 5 10-5" />
        <path d="m2 17 10 5 10-5" />
      </Icon>
    ),
  },
  {
    title: "Real Production Systems",
    text: "Every model and pipeline I deliver runs in production with real data — not notebooks that never ship.",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </Icon>
    ),
  },
  {
    title: "Fast Execution",
    text: "Clear communication, weekly delivery milestones, and zero ghosting. You always know project status.",
    icon: (
      <Icon>
        <path d="M13 2 3 14h9l-1 8 10-12h-9Z" />
      </Icon>
    ),
  },
  {
    title: "Business-First Thinking",
    text: "I don't just train models — I understand your business problem and build the most efficient solution for it.",
    icon: (
      <Icon>
        <path d="m22 7-8.5 8.5-5-5L2 17" />
        <path d="M16 7h6v6" />
      </Icon>
    ),
  },
];

const Hl = ({ children }) => (
  <span className="font-medium text-white">{children}</span>
);

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#111715] px-6 py-20 font-['Inter',sans-serif] text-[#9aa5a0] sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#198161]">
          About
        </p>

        <h4 className="mt-4 font-['Space_Grotesk',sans-serif] text-xl font-bold tracking-tight text-white sm:text-3xl lg:text-5xl">
  <span className="text-[#198161]">Data Science</span> &amp;{" "}
  <span className="text-[#198161]">Python</span> Developer.
</h4>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_520px] lg:gap-16">
<div className="space-y-6 text-[16px] leading-relaxed">            <p>
              I'm a Data Scientist and Python Developer based in{" "}
              <Hl>Peshawar, Pakistan</Hl>. For 2.5+ years I've turned raw data
              into predictive models, dashboards, and automated systems used by
              businesses in Pakistan, Turkey, and the UAE.
              asassas
            </p>

            <p>
              Day to day I work across the Python data stack — Pandas, NumPy,
              scikit-learn, TensorFlow, and Matplotlib — and build APIs and
              services with FastAPI and Flask. I design AI agents and
              automations with LangChain, OpenAI APIs, and the WhatsApp
              Business API. I package everything with Docker and have working
              AWS knowledge for hosting containerized services.
            </p>

            <p>
              Currently at <Hl>Isoft</Hl>, I've delivered data pipelines,
              machine learning models, and a live WhatsApp AI travel agent for{" "}
              <Hl>dummmy.pk</Hl>. I own projects end-to-end: data collection,
              modeling, APIs, deployment, and iteration with the client.hiahdadjajhjkdhjkahdjhajk
            </p>
          </div>

          <div className="grid max-w-96 grid-cols-2 gap-4 ml-20">
  {STATS.map((s) => (
    <div
      key={s.label}
      className="flex aspect-square flex-col  rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
    >
      <span className="font-['Space_Grotesk',sans-serif] text-3xl font-bold text-[#198161] sm:text-4xl">
        {s.value}
      </span>
      <span className="mt-2 text-sm text-[#9aa5a0]">{s.label}</span>
    </div>
  ))}
</div>
        </div>

        <div className="mt-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#198161]">
            Why choose me
          </p>
          <h3 className="mt-4 font-['Space_Grotesk',sans-serif] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Work With <span className="text-[#198161]">Me?</span>
          </h3>
<div className="mt-12 grid gap-5 md:grid-cols-2">
  {FEATURES.map((f) => (
    <div
      key={f.title}
      className="rounded-2xl  bg-[#16201b] p-6 transition-transform duration-900 ease-out hover:-translate-y-2 sm:p-7"
    >
      <span className="text-[#198161]">{f.icon}</span>
      <h4 className="mt-5 font-['Space_Grotesk',sans-serif] text-lg font-semibold text-white">
        {f.title}
      </h4>
      <p className="mt-3 text-[15px] leading-relaxed text-[#9aa5a0]">
        {f.text}
      </p>
    </div>
  ))}
</div>
          <blockquote className="mt-6 rounded-2xl border border-l-4 border-[#3fb68b]/40 border-l-[#3fb68b] bg-[#3fb68b]/[0.06] px-6 py-5 text-base italic text-[#198161]">
            "If you're looking for someone who understands both data and
            business impact — you're in the right place."
          </blockquote>
        </div>
      </div>
    </section>
  );
}