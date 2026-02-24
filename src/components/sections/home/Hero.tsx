import { Link } from "react-router-dom";

const techStack = [
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "React Native",
  "FastAPI",
];

const Hero = () => (
  <section className="section-container py-28 md:py-44">
    <div className="max-w-3xl">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[1.08] fade-up">
        Lakshay Kapoor
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground/80 font-light mt-3 fade-up stagger-1">
        Full Stack Engineer
      </p>
      <p className="text-base text-[hsl(240_5%_67%)] mt-6 max-w-lg leading-relaxed fade-up stagger-2">
        Engineering scalable systems
        <br />
        from architecture to deployment.
      </p>

      <div className="flex gap-4 mt-10 fade-up stagger-3">
        <Link
          to="/work"
          className="text-sm bg-primary text-primary-foreground px-6 py-2.5 rounded-sm hover:bg-primary/90 transition-all duration-150 hover-lift"
        >
          View Work
        </Link>
        <Link
          to="/contact"
          className="text-sm border border-border text-muted-foreground px-6 py-2.5 rounded-sm hover:text-foreground hover:border-muted-foreground transition-all duration-150 hover-lift"
        >
          Start a Conversation
        </Link>
      </div>

      <div className="flex flex-wrap gap-3 mt-14 fade-up stagger-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono text-muted-foreground/70 tracking-wide"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
