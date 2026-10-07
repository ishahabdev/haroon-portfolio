import { useState } from "react";
import Process from "./Process";

const PROJECTS = [
  {
    category: "AI Agent",
    status: "Live",
    pinned: true,
    badge: "Most Complex Project",
    date: "Jan 2026 — Present",
    title: "WhatsApp AI Travel Agent — Musafir.pk",
    url: "wa.me/18735100429",
    image: "", // add an image path, e.g. "/projects/musafir.png"
    description:
      "Problem: the travel team was handling flight, hotel, and tour inquiries on WhatsApp manually, one message at a time. Solution: a LangChain-based agent on the WhatsApp Business API that understands natural language, asks for missing details conversationally, and calls real booking APIs end-to-end. Outcome: bookings are handled 24/7 without a human in the loop.",
    tech: ["LangChain", "OpenAI API", "WhatsApp API", "Python"],
    demo: "https://wa.me/18735100429",
    caseStudy:
      "Built the conversation flow with LangGraph, added memory so users can change dates or cities mid-chat, and containerized the service with Docker for deployment.",
  },
  {
    category: "Machine Learning",
    status: "Completed",
    date: "Sep 2025 — Dec 2025",
    title: "Sales Forecasting Model",
    url: "forecast.example.com",
    image: "",
    description:
      "Problem: the business planned inventory using gut feeling and spreadsheets. Solution: a time-series model trained on two years of sales data with seasonality and promotion features. Outcome: forecast error dropped sharply and stock planning became a weekly routine.",
    tech: ["Python", "Pandas", "scikit-learn", "Prophet"],
    demo: "#",
    caseStudy:
      "Compared ARIMA, Prophet, and gradient boosting, then picked the best model by cross-validated error and wrapped it in a small FastAPI service.",
  },
  {
    category: "Data Analysis",
    status: "Completed",
    date: "Jun 2025 — Aug 2025",
    title: "Customer Churn Dashboard",
    url: "churn.example.com",
    image: "",
    description:
      "Problem: the team only learned a customer had left after they were gone. Solution: a churn prediction model plus an interactive dashboard that ranks customers by risk and shows the main reasons. Outcome: the support team now contacts at-risk customers before they cancel.",
    tech: ["Python", "XGBoost", "Plotly", "Streamlit"],
    demo: "#",
    caseStudy:
      "Handled class imbalance with resampling, explained predictions with SHAP values, and deployed the dashboard to a Docker container.",
  },
  {
    category: "Data Engineering",
    status: "Live",
    date: "Mar 2025 — May 2025",
    title: "Automated Data Pipeline",
    url: "pipeline.example.com",
    image: "",
    description:
      "Problem: reports were built by hand from three different systems every week. Solution: a scheduled pipeline that pulls data from APIs and databases, cleans it, and loads it into one PostgreSQL warehouse. Outcome: reports are ready every morning with no manual work.",
    tech: ["Python", "Airflow", "PostgreSQL", "Docker"],
    demo: "#",
    caseStudy:
      "Added retries, data quality checks, and Slack alerts so failures are caught early instead of showing up as wrong numbers in a report.",
  },
  {
    category: "LLM App",
    status: "Completed",
    date: "Dec 2024 — Feb 2025",
    title: "Document Q&A Chatbot",
    url: "docs-bot.example.com",
    image: "",
    description:
      "Problem: staff spent hours searching long PDFs for policy answers. Solution: a retrieval-augmented chatbot that indexes company documents and answers questions with the source page cited. Outcome: answers in seconds, with a link back to the original text.",
    tech: ["LangChain", "OpenAI API", "FAISS", "FastAPI"],
    demo: "#",
    caseStudy:
      "Tuned chunk size and retrieval settings on a test set of real questions, and added a fallback reply when the answer is not in the documents.",
  },
];

const Svg = ({ children, className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const gridBg = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
};

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);

  return (
<article className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/3 transition-all duration-300 hover:border-[#3fb68b]/50 hover:shadow-[0_0_40px_rgba(63,182,139,0.18)] lg:grid-cols-[1.05fr_1fr]">      {/* Left: browser mockup */}
      <div className="border-b border-white/10 p-5 sm:p-8 lg:border-b-0 lg:border-r" style={gridBg}>
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0f1412]">
          <div className="flex items-center gap-3 px-4 py-3">
            <span className="flex gap-2">
              <i className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <i className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <i className="h-3 w-3 rounded-full bg-[#28c840]" />
            </span>
            <span className="flex-1 truncate rounded-lg bg-white/6 px-4 py-1.5 text-xs text-[#9aa5a0]">
              {p.url}
            </span>
          </div>
          {p.image ? (
            <img src={p.image} alt={p.title} className="aspect-4/3 w-full object-cover" />
          ) : (
            <div className="flex aspect-4/3 items-center justify-center bg-linear-to-br from-[#1a2622] to-[#0f1412] p-8 text-center">
              <span className="font-['Space_Grotesk',sans-serif] text-2xl font-bold text-[#198161] sm:text-3xl">
                {p.title}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Right: details */}
      <div className="flex flex-col p-6 sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#198161]">
          {p.category}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2fa57a] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
            <i className="h-2 w-2 rounded-full bg-white/80" />
            {p.status}
          </span>
          {p.pinned && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3fb68b]/50 px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-[#198161]">
              <Svg className="h-3 w-3">
                <path d="M12 17v5M9 10.8a2 2 0 0 1-1.1 1.8l-1.8.9A2 2 0 0 0 5 15.2V17h14v-1.8a2 2 0 0 0-1.1-1.8l-1.8-.9a2 2 0 0 1-1.1-1.8V6a3 3 0 0 0 1-2H8a3 3 0 0 0 1 2Z" />
              </Svg>
              Pinned
            </span>
          )}
          {p.badge && (
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#9aa5a0]">
              {p.badge}
            </span>
          )}
          <span className="ml-auto text-sm text-[#9aa5a0]">{p.date}</span>
        </div>

        <h3 className="mt-5 font-['Space_Grotesk',sans-serif] text-xl font-semibold text-white sm:text-2xl">
          {p.title}
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-[#9aa5a0]">{p.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <li key={t} className="rounded-full bg-white/[0.07] px-3.5 py-1.5 text-sm text-[#9aa5a0]">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-6 text-[15px] font-medium text-[#198161]">
          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#198161]">
            Live Demo
            <Svg>
              <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </Svg>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="inline-flex items-center gap-2 hover:text-[#198161]"
          >
            View Case Study
            <Svg className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}>
              <path d="m6 9 6 6 6-6" />
            </Svg>
          </button>
        </div>

        {open && (
          <p className="mt-4 rounded-xl border border-white/10 bg-white/3 p-4 text-[15px] leading-relaxed text-[#9aa5a0]">
            {p.caseStudy}
          </p>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#111715] px-6 py-20 font-['Inter',sans-serif] sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#198161]">
              Projects
            </p>
            <h2 className="mt-4 font-['Space_Grotesk',sans-serif] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Selected work
            </h2>
          </div>
          <p className="text-base text-[#9aa5a0]">
            Shipped products used by businesses - not demos.
          </p>
        </div>

        <div className="mt-12  flex flex-col gap-8 ">
          {PROJECTS.map((p) => (
            <ProjectCard  key={p.title} p={p} />
          ))}
        </div>
      </div>
      <Process/>
    </section>
  );
}