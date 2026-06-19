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
      "jobTitle": "Full Stack Developer",
      "description": "Full Stack Developer with 3+ years of experience building web, mobile, desktop, SaaS, real-time, and AI-powered applications.",
      "knowsAbout": [
        "React",
        "Next.js",
        "Angular",
        "TypeScript",
        "Node.js",
        "FastAPI",
        "PostgreSQL",
        "MongoDB",
        "Stripe",
        "Socket.IO",
        "LangChain",
        "LangGraph",
        "RAG",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://lakshaykapoor.in/#website",
      "url": "https://lakshaykapoor.in",
      "name": "Lakshay Kapoor - Full Stack Developer",
      "author": { "@id": "https://lakshaykapoor.in/#person" },
    },
  ],
};

const Index = () => (
  <Layout>
    <SEO
      description="Lakshay Kapoor is a Full Stack Developer building web, mobile, desktop, SaaS, real-time, and AI-powered applications with React, Next.js, Node.js, FastAPI, PostgreSQL, and LangChain."
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
