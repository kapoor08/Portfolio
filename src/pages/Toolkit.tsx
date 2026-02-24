import Layout from "@/components/layout/Layout";
import { categories } from "@/data/toolkit";
import SEO from "@/components/seo/SEO";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://lakshaykapoor.in/toolkit",
  "name": "Engineering Toolkit — Lakshay Kapoor",
  "description": "Technologies and tools used by Lakshay Kapoor across engineering projects — React, Node.js, PostgreSQL, AWS, Docker, and more.",
  "author": { "@type": "Person", "name": "Lakshay Kapoor" },
};

const Toolkit = () => (
  <Layout>
    <SEO
      title="Toolkit"
      description="Technologies used by Lakshay Kapoor — React, Next.js, Node.js, FastAPI, PostgreSQL, Redis, AWS, Docker, Terraform and more."
      canonical="/toolkit"
      jsonLd={jsonLd}
    />
    <div className="section-container py-28 md:py-36">
      <h1 className="text-4xl md:text-5xl font-semibold text-foreground fade-up">
        Toolkit
      </h1>
      <p className="text-base text-muted-foreground/80 mt-4 max-w-lg fade-up stagger-1">
        Technologies and tools used across projects.
      </p>

      <div className="mt-24 space-y-0">
        {categories.map((cat, i) => (
          <div key={cat.label} className={`${i > 0 ? "section-divider" : ""}`}>
            <div className={`py-14 fade-up stagger-${i + 1}`}>
              <h2 className="text-base font-medium text-foreground">
                {cat.label}
              </h2>
              <p className="text-sm text-muted-foreground/70 mt-2">
                {cat.note}
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm font-mono text-muted-foreground border border-border px-3 py-1.5 rounded-sm hover:text-primary hover:border-primary/30 hover:bg-card transition-all duration-150 ease-out cursor-default hover-lift"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Toolkit;
