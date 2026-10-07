import {
  Check,
  Clock3,
  MessageCircle,
  Mail,
  FileText,
  MapPin,
  Send,
} from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import resumeUrl from "../assets/haroon_cv1.pdf";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [submissionError, setSubmissionError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSending(true);
    setSubmissionMessage("");
    setSubmissionError(false);

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.headers.get("content-type")?.includes("application/json")) {
        throw new Error(
          "The contact API is unavailable. Deploy on Vercel or run `vercel dev` locally."
        );
      }

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Your message could not be sent.");
      }
      if (typeof result.message !== "string") {
        throw new Error("The contact API returned an unexpected response.");
      }

      form.reset();
      setSubmissionMessage(result.message);
    } catch (error) {
      setSubmissionError(true);
      setSubmissionMessage(
        error instanceof Error
          ? error.message
          : "Your message could not be sent. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen scroll-mt-14 bg-[#0d1210] px-5 py-16 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#198161]">
            Get in touch
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Let’s build something{" "}
            <span className="text-[#198161]">together</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            Have a project in mind? Send me the details and I’ll get back to you
            as soon as possible.
          </p>

          {/* Availability badges */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {["Freelance", "Contract", "Remote", "AI Consulting"].map(
              (item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 rounded-full border border-[#185f4b] bg-[#101a17] px-3.5 py-1.5 text-xs font-medium text-[#2ac092]"
                >
                  <Check size={13} />
                  {item}
                </span>
              )
            )}
          </div>

          {/* Response time */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
            <Clock3 size={14} className="text-[#198161]" />
            Average response time: within 24 hours
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.7fr_1fr]">

          {/* Contact Form */}
          <div className="rounded-xl border border-[#29322f] bg-[#151c19] p-8 md:p-9">
            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Name + Email */}
              <div className="grid gap-6 md:grid-cols-2">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium text-gray-400"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-[#29332f] bg-[#0d1210] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 transition focus:border-[#20b486] focus:ring-1 focus:ring-[#20b486]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium text-gray-400"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-[#29332f] bg-[#0d1210] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 transition focus:border-[#20b486] focus:ring-1 focus:ring-[#20b486]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium text-gray-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none rounded-xl border border-[#29332f] bg-[#0d1210] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 transition focus:border-[#20b486] focus:ring-1 focus:ring-[#20b486]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="flex items-center gap-2 rounded-xl bg-[#20b486] px-5 py-3.5 text-sm font-medium text-[#07110d] shadow-lg shadow-[#20b486]/10 transition hover:bg-[#27c99a] hover:shadow-[#20b486]/20"
              >
                <Send size={16} />
                {sending ? "Sending..." : "Send Message"}
              </button>
              <p
                aria-live="polite"
                className={`text-sm ${submissionError ? "text-red-400" : "text-[#198161]"}`}
                role={submissionError ? "alert" : "status"}
              >
                {submissionMessage}
              </p>
            </form>
          </div>

          {/* Right Side */}
          <div className="space-y-3">

            {/* WhatsApp */}
            <a
              href="https://wa.me/923180946768"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-[#29322f] bg-[#151c19] p-5 transition hover:border-[#20b486]/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#145d49] bg-[#10251e] text-[#198161]">
                <MessageCircle size={21} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  WhatsApp
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  +92 3180946768
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:haroongulzar226@gmail.com"
              className="flex items-center gap-4 rounded-xl border border-[#29322f] bg-[#151c19] p-5 transition hover:border-[#20b486]/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#145d49] bg-[#10251e] text-[#198161]">
                <Mail size={20} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  Email
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  haroongulzar226@gmail.com
                </p>
              </div>
            </a>

            {/* Resume */}
            <a
              href={resumeUrl}
              download="haroon_cv1.pdf"
              className="flex items-center gap-4 rounded-xl border border-[#29322f] bg-[#151c19] p-5 transition hover:border-[#20b486]/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#145d49] bg-[#10251e] text-[#198161]">
                <FileText size={20} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  Resume
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Download CV (PDF)
                </p>
              </div>
            </a>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 pt-0">
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl border border-[#29322f] bg-[#151c19] px-4 py-4 text-sm font-medium transition hover:border-[#20b486]/50"
              >
                <FaLinkedinIn size={19} className="text-[#198161]" />
                LinkedIn
              </a>

              <a
                href="https://github.com/HaroonGulzar"
                className="flex items-center gap-3 rounded-xl border border-[#29322f] bg-[#151c19] px-4 py-4 text-sm font-medium transition hover:border-[#20b486]/50"
              >
                <FaGithub size={19} className="text-[#198161]" />
                GitHub
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 px-1 pt-2 text-xs text-gray-500">
              <MapPin size={15} />
              Swabi, KPK, Pakistan
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;