import { useEffect, useState } from "react";

const SPECIALTIES = [
  "Machine Learning & Modeling",
  "Data Pipelines & ETL",
  "Python Automation & APIs",
];

const AGENT_URL = "https://wa.me/18735100429";
const RESUME_URL = "https://adil-p.netlify.app/Muhammad-Adil-Resume.pdf";

function useTypewriter(words, typeMs = 70, pauseMs = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = words[index];
    let delay = deleting ? typeMs / 2 : typeMs;

    if (!deleting && text === full) delay = pauseMs;

    const t = setTimeout(() => {
      if (!deleting && text === full) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setIndex((i) => (i + 1) % words.length);
      }
      setText(full.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeMs, pauseMs]);

  return text;
}

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

const FileDownIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M12 18v-6" />
    <path d="m9 15 3 3 3-3" />
  </svg>
);

export default function Hero() {
  const specialty = useTypewriter(SPECIALTIES);

  return (
    <section className="flex min-h-screen items-center bg-linear-to-br from-[#111715] to-[#0d1210] px-6 py-20 font-['Inter',sans-serif] text-[#e8eeeb] sm:px-10 lg:px-20">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="max-w-3xl font-['Space_Grotesk',sans-serif] text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-[#7ee8b5]">Data Scientist</span> &amp; Python
          Developer for businesses.
        </h1>

        <p className="mt-10 max-w-xl text-base leading-relaxed text-[#9aa5a0] sm:text-lg">
          I clean and analyze data, train predictive models, and ship
          production-ready Python applications using Pandas, scikit-learn,
          TensorFlow, and FastAPI — deployed in Docker containers for
          international clients.
        </p>

        <p className="mt-10 flex flex-wrap items-center gap-x-3 text-base text-[#9aa5a0] sm:text-lg">
          <span>Specialized in</span>
          <span
            className="font-['Space_Grotesk',sans-serif] font-semibold text-[#3fb68b]"
            aria-live="polite"
          >
            {specialty}
            <span className="ml-0.5 inline-block h-5 w-0.5 translate-y-1 animate-pulse bg-[#3fb68b] motion-reduce:animate-none" />
          </span>
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-[#3fb68b]/30 bg-[#3fb68b]/2 px-4 py-3 font-['Space_Grotesk',sans-serif] font-medium text-[#3fb68b] transition-colors hover:bg-[#3fb68b]/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3fb68b]"
          >
            <FileDownIcon />
            Download Resume
          </a>
          <a
            href={AGENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-[#3fb68b] bg-[#3fb68b]/10 px-6 w-44 py-3 font-['Space_Grotesk',sans-serif] font-medium text-[#3fb68b] transition-colors hover:bg-[#3fb68b]/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3fb68b]"
          >
            <ChatIcon />
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}