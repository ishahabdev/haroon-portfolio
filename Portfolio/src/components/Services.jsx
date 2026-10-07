const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const SERVICES = [
  {
    title: "Data Analysis & Visualization",
    text: "Cleaning, exploring, and visualizing messy business data with Pandas, NumPy, and Plotly — so decisions are backed by clear dashboards and reports, not guesswork.",
    icon: (
      <Icon>
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </Icon>
    ),
  },
  {
    title: "Machine Learning Models",
    text: "Predictive models for forecasting, classification, and recommendations using scikit-learn and TensorFlow — validated, tuned, and ready to run on real data.",
    icon: (
      <Icon>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
      </Icon>
    ),
  },
  {
    title: "AI Agents & LLM Apps",
    text: "Conversational and task-oriented agents on WhatsApp, web, and internal tools using LangChain, LangGraph, and OpenAI — so support, bookings, and lead handling run without staff intervention.",
    icon: (
      <Icon>
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
      </Icon>
    ),
  },
  {
    title: "Data Pipelines & ETL",
    text: "Automated pipelines that collect, transform, and load data from APIs, databases, and files into one reliable source — scheduled, monitored, and easy to maintain.",
    icon: (
      <Icon>
        <rect width="8" height="8" x="3" y="3" rx="2" />
        <path d="M7 11v4a2 2 0 0 0 2 2h4" />
        <rect width="8" height="8" x="13" y="13" rx="2" />
      </Icon>
    ),
  },
  {
    title: "Python APIs & Automation",
    text: "FastAPI services and custom Python scripts that expose your models, connect third-party tools, and automate reporting, notifications, and repetitive manual work.",
    icon: (
      <Icon>
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </Icon>
    ),
  },
  {
    title: "Docker Deployment",
    text: "Dockerized models, APIs, and workers with clean environment separation — reproducible on your machine, your server, or AWS.",
    icon: (
      <Icon>
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </Icon>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#111715] px-6 py-20 font-['Inter',sans-serif] sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl ">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#198161]">
          Services
        </p>
        <h2 className="mt-4 font-['Space_Grotesk',sans-serif] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          What I do
        </h2>
        <p className="mt-4 text-base text-[#9aa5a0] sm:text-lg">
          Focused on business outcomes — not just the stack behind them.
        </p>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
  {SERVICES.map((s) => (
    <div
      key={s.title}
      className="rounded-2xl border-2 border-white/10 bg-[#131A18] p-6 transition-all duration-300 hover:border-[#3fb68b]/60 hover:shadow-[0_0_30px_rgba(63,182,139,0.2)] sm:p-7"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3fb68b]/30 bg-[#3fb68b]/10 text-[#198161]">
        {s.icon}
      </span>
      <h3 className="mt-6 font-['Space_Grotesk',sans-serif] text-lg font-semibold text-white">
        {s.title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-[#9aa5a0]">
        {s.text}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}