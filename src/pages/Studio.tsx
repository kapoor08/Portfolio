import Layout from "@/components/layout/Layout";
import { principles } from "@/data/studio";
import SEO from "@/components/seo/SEO";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "url": "https://lakshaykapoor.in/studio",
  "name": "About Lakshay Kapoor",
  "description": "How Lakshay Kapoor approaches full-stack product engineering, AI integrations, SaaS workflows, and production-ready application development.",
  "mainEntity": {
    "@type": "Person",
    "@id": "https://lakshaykapoor.in/#person",
    "name": "Lakshay Kapoor",
    "jobTitle": "Full Stack Developer",
  },
};

const Studio = () => (
  <Layout>
    <SEO
      title="Studio"
      description="A practical look at how Lakshay Kapoor approaches full-stack product work across frontend, backend, real-time systems, payments, authentication, and AI integrations."
      canonical="/studio"
      jsonLd={jsonLd}
    />
    <div className="section-container py-28 md:py-36">
      <h1 className="text-4xl md:text-5xl font-semibold text-foreground fade-up">
        About the Work
      </h1>
      <p className="text-base text-muted-foreground/80 mt-4 max-w-lg leading-relaxed fade-up stagger-1">
        I build product features across the full stack, with a preference for
        clear flows, dependable systems, and interfaces that feel considered in
        real use.
      </p>

      <div className="mt-24 grid md:grid-cols-2 gap-12 md:gap-20">
        <div className="fade-up stagger-2">
          <h2 className="text-xs font-mono text-muted-foreground mb-4">
            Philosophy
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
            I like working close to the product problem. A booking flow, a
            healthcare intake, an admin panel, or an AI assistant each has its
            own rules, failure cases, and user expectations. Good engineering
            starts by making those details explicit.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-md">
            My work usually spans the interface, API, database, authentication,
            third-party services, deployment, and testing. That full path helps
            me make practical tradeoffs instead of solving one layer in
            isolation.
          </p>
        </div>

        <div className="fade-up stagger-3">
          <h2 className="text-xs font-mono text-muted-foreground mb-4">
            Approach
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
            I aim for features that are understandable after they ship. That
            means clear state, predictable API contracts, safe permission
            checks, useful empty states, and enough documentation for the next
            person to operate the system.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-md">
            For AI-enabled work, I treat the model as one part of the system.
            Source grounding, review steps, SQL safety, and operational
            guardrails matter as much as the prompt itself.
          </p>
        </div>
      </div>

      <div className="section-divider mt-24 pt-24">
        <h2 className="text-sm font-mono text-muted-foreground mb-14 fade-up">
          Core Principles
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {principles.map((p, i) => (
            <div key={p.title} className={`fade-up stagger-${i + 1}`}>
              <h3 className="text-lg font-medium text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default Studio;
