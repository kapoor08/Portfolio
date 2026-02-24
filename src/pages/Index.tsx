import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/home/Hero";
import StudioStatement from "@/components/sections/home/StudioStatement";
import FeaturedWork from "@/components/sections/home/FeaturedWork";
import Process from "@/components/sections/home/Process";
import Experience from "@/components/sections/home/Experience";
import ClosingCTA from "@/components/sections/home/ClosingCTA";

const Index = () => (
  <Layout>
    <Hero />
    <StudioStatement />
    <FeaturedWork />
    <Process />
    <Experience />
    <ClosingCTA />
  </Layout>
);

export default Index;
