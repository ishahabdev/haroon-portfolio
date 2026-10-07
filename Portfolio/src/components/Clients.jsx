const CLIENTS = [
  {
    name: "Musafir.pk",
    region: "Pakistan",
    title: "WhatsApp AI Travel Agent",
    tech: ["LangChain", "OpenAI", "WhatsApp API", "Python"],
    link: "https://wa.me/18735100429",
    linkLabel: "Live agent",
  },
  {
    name: "RetailLens",
    region: "Pakistan",
    title: "Sales Forecasting & Inventory Dashboard",
    tech: ["Pandas", "scikit-learn", "Streamlit", "PostgreSQL"],
    link: "#",
    linkLabel: "Visit site",
  },
  {
    name: "ChurnGuard",
    region: "Turkey",
    title: "Customer Churn Prediction API",
    tech: ["XGBoost", "FastAPI", "Docker", "SHAP"],
    link: "#",
    linkLabel: "Visit site",
  },
  {
    name: "DocuMind",
    region: "Dubai, UAE",
    title: "Document Q&A Chatbot with RAG",
    tech: ["LangChain", "OpenAI", "FAISS", "FastAPI"],
    link: "#",
    linkLabel: "Visit site",
  },
  {
    name: "DataFlow Labs",
    region: "Dubai, UAE",
    title: "Automated ETL & Reporting Pipeline",
    tech: ["Python", "Airflow", "PostgreSQL", "Docker"],
    link: "#",
    linkLabel: "Visit site",
  },
  {
    name: "ML Model Platform",
    region: "Internal / AWS",
    title: "Model training and serving platform on AWS ECS",
    tech: ["AWS ECS", "Docker", "FastAPI", "MLflow"],
    link: "#",
    linkLabel: "Live platform",
  },
];

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

export default function Clients() {
  return (
    <section
      id="clients"
      className="bg-[#111715] px-6 py-20 font-['Inter',sans-serif] sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#198161]">
          Selected clients &amp; projects
        </p>
        <h2 className="mt-4 font-['Space_Grotesk',sans-serif] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Trusted work, in production
        </h2>
        <p className="mt-4 text-base text-[#9aa5a0] sm:text-lg">
          Real products delivered for companies in Pakistan, Turkey, and the
          UAE.
        </p>

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((c) => (
            <li
              key={c.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-['Space_Grotesk',sans-serif] text-xl font-semibold text-white">
                  {c.name}
                </h3>
                <span className="shrink-0 pt-1 text-xs font-medium uppercase tracking-wider text-[#9aa5a0]">
                  {c.region}
                </span>
              </div>

              <p className="mt-5 text-base leading-snug text-white">{c.title}</p>
              <p className="mt-3 text-sm text-[#9aa5a0]">{c.tech.join(" · ")}</p>

              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 pt-7 text-[15px] font-medium text-[#198161] hover:text-[#198161]"
              >
                {c.linkLabel}
                <ExternalIcon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}