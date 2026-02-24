import Layout from "@/components/layout/Layout";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <Layout>
      <div className="section-container py-28 md:py-36">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight fade-up">
            Let's Build
            <br />
            Something Meaningful.
          </h1>
          <p className="text-base text-muted-foreground/80 mt-4 max-w-sm leading-relaxed fade-up stagger-1">
            Have a project, an idea, or a system that needs engineering? I'd
            like to hear about it.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-14 space-y-6 fade-up stagger-2"
          >
            <div>
              <label className="text-xs font-mono text-muted-foreground block mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:bg-card/50 transition-all duration-150"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground block mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:bg-card/50 transition-all duration-150"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground block mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:bg-card/50 transition-all duration-150 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="text-sm bg-primary text-primary-foreground px-8 py-2.5 rounded-sm hover:bg-primary/90 transition-all duration-150 hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-sm text-primary fade-up">
                Message sent. I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive fade-up">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>

          <div className="section-divider mt-16 pt-8">
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@lakshaykapoor.in"
                className="text-sm accent-link"
              >
                hello@lakshaykapoor.in
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm accent-link"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
