import Layout from "@/components/layout/Layout";
import { principles } from "@/data/studio";
import SEO from "@/components/seo/SEO";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "url": "https://lakshaykapoor.in/studio",
  "name": "About the Studio — Lakshay Kapoor",
  "description": "A one-person engineering practice focused on building clean, performant, and scalable systems.",
  "mainEntity": {
    "@type": "Person",
    "@id": "https://lakshaykapoor.in/#person",
    "name": "Lakshay Kapoor",
    "jobTitle": "Full Stack Engineer",
  },
};

const Studio = () => (
  <Layout>
    <SEO
      title="Studio"
      description="A one-person engineering practice focused on building clean, performant, and scalable systems. Learn about Lakshay Kapoor's philosophy and approach."
      canonical="/studio"
      jsonLd={jsonLd}
    />
    <div className="section-container py-28 md:py-36">
      <h1 className="text-4xl md:text-5xl font-semibold text-foreground fade-up">
        About the Studio
      </h1>
      <p className="text-base text-muted-foreground/80 mt-4 max-w-lg leading-relaxed fade-up stagger-1">
        A one-person engineering practice focused on building systems that are
        clean, performant, and built to last.
      </p>

      <div className="mt-24 grid md:grid-cols-2 gap-12 md:gap-20">
        <div className="fade-up stagger-2">
          <h2 className="text-xs font-mono text-muted-foreground mb-4">
            Philosophy
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
            I approach every project as a system design problem. The goal is
            never just to ship features — it's to build architecture that
            remains maintainable as complexity grows. Clean code, well-defined
            boundaries, and thoughtful abstractions are the foundation of
            everything I build.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-md">
            Performance is treated as a first-class requirement. From database
            query optimization to frontend rendering pipelines, every layer is
            profiled and refined. DevOps isn't a separate concern — it's
            integrated into the engineering workflow from day one.
          </p>
        </div>

        <div className="fade-up stagger-3">
          <h2 className="text-xs font-mono text-muted-foreground mb-4">
            Approach
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
            I work with startups and established teams who need senior-level
            engineering without the overhead. Whether it's greenfield
            development, system redesign, or performance optimization, the
            approach is always the same: understand the problem deeply, design
            the right solution, and execute with precision.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-md">
            Every engagement starts with discovery — mapping data flows,
            identifying bottlenecks, and aligning technical decisions with
            business goals. The result is infrastructure that scales with your
            growth.
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
