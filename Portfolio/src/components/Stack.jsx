import Clients from "./Clients";

const ICON = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

// `invert: true` lightens logos that are black/dark so they show on the dark tile.
const CATEGORIES = [
  {
    label: "Data Science",
    tools: [
      { name: "Python", icon: ICON("python") },
      { name: "NumPy", icon: ICON("numpy") },
      { name: "Pandas", icon: ICON("pandas"), invert: true },
      { name: "Matplotlib", icon: ICON("matplotlib") },
      { name: "Jupyter", icon: ICON("jupyter") },
    ],
    chips: ["Seaborn", "Plotly", "SciPy", "Statistics", "EDA"],
  },
  {
    label: "Machine Learning",
    tools: [
      { name: "scikit-learn", icon: ICON("scikitlearn") },
      { name: "TensorFlow", icon: ICON("tensorflow") },
      { name: "PyTorch", icon: ICON("pytorch") },
      { name: "Keras", icon: ICON("keras") },
    ],
    chips: ["XGBoost", "Feature Engineering", "Model Tuning", "Time Series"],
  },
  {
    label: "Backend & Databases",
    tools: [
      { name: "FastAPI", icon: ICON("fastapi") },
      { name: "Flask", icon: ICON("flask"), invert: true },
      { name: "PostgreSQL", icon: ICON("postgresql") },
      { name: "MySQL", icon: ICON("mysql") },
      { name: "MongoDB", icon: ICON("mongodb") },
    ],
    chips: ["REST APIs", "JWT", "OAuth 2.0"],
  },
  {
    label: "AI & Automation",
    tools: [],
    chips: ["LangChain", "LangGraph", "OpenAI", "RAG", "n8n", "WhatsApp Business API"],
  },
  {
    label: "Deployment & Tools",
    tools: [
      { name: "Docker", icon: ICON("docker") },
      { name: "Git", icon: ICON("git") },
      { name: "GitHub", icon: ICON("github"), invert: true },
      { name: "Linux", icon: ICON("linux") },
    ],
    chips: ["AWS", "CI/CD"],
  },
];

function Tool({ name, icon, invert }) {
  return (
    <li className="flex w-24 flex-col items-center gap-3 lg:w-[138px]">
      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1a2622]">
        <img
          src={icon}
          alt=""
          loading="lazy"
          className={`h-8 w-8 ${invert ? "invert" : ""}`}
        />
      </span>
      <span className="text-center text-xs text-[#9aa5a0]">{name}</span>
    </li>
  );
}

export default function Stack() {
  return (
    <section
      id="stack"
      className="bg-[#111715] px-6 py-20 font-['Inter',sans-serif] sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#3fb68b]">
          Technical expertise
        </p>
        <h2 className="mt-4 font-['Space_Grotesk',sans-serif] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Tools I use daily
        </h2>
        <p className="mt-4 text-base text-[#9aa5a0] sm:text-lg">
          The stack behind the models, data pipelines, and AI agents I ship.
        </p>

        <div className="mt-14 space-y-12">
          {CATEGORIES.map((c) => (
            <div key={c.label}>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#3fb68b]">
                {c.label}
              </h3>

              {c.tools.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-y-6">
                  {c.tools.map((t) => (
                    <Tool key={t.name} {...t} />
                  ))}
                </ul>
              )}

              {c.chips.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-3">
                  {c.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-lg border border-[#3fb68b]/30 bg-[#3fb68b]/10 px-3.5 py-1.5 text-sm font-medium text-[#3fb68b]"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <Clients/>
    </section>
  );
}