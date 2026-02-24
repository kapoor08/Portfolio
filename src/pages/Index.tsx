import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/home/Hero";
import StudioStatement from "@/components/sections/home/StudioStatement";
import FeaturedWork from "@/components/sections/home/FeaturedWork";
import Process from "@/components/sections/home/Process";
import Experience from "@/components/sections/home/Experience";
import ClosingCTA from "@/components/sections/home/ClosingCTA";
import SEO from "@/components/seo/SEO";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://lakshaykapoor.in/#person",
      "name": "Lakshay Kapoor",
      "url": "https://lakshaykapoor.in",
      "jobTitle": "Full Stack Engineer",
      "description": "Full Stack Engineer building scalable systems from architecture to deployment.",
      "knowsAbout": ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "FastAPI", "Docker", "TypeScript", "Redis", "Kafka"],
    },
    {
      "@type": "WebSite",
      "@id": "https://lakshaykapoor.in/#website",
      "url": "https://lakshaykapoor.in",
      "name": "Lakshay Kapoor — Full Stack Engineer",
      "author": { "@id": "https://lakshaykapoor.in/#person" },
    },
  ],
};

const Index = () => (
  <Layout>
    <SEO
      description="Full Stack Engineer building scalable systems from architecture to deployment. Specialized in React, Node.js, PostgreSQL, and AWS."
      canonical="/"
      jsonLd={jsonLd}
    />
    <Hero />
    <StudioStatement />
    <FeaturedWork />
    <Process />
    <Experience />
    <ClosingCTA />
  </Layout>
);

export default Index;
