import { projects } from "@/data/projects";

const FeaturedWork = () => (
  <section className="section-divider">
    <div className="section-container py-24 md:py-32">
      <h2 className="text-sm font-mono text-muted-foreground mb-20 fade-up">
        Featured Work
      </h2>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <div
            key={project.num}
            className={`${i > 0 ? "section-divider" : ""} ${i % 2 === 1 ? "bg-alt -mx-6 md:-mx-12 px-6 md:px-12" : ""}`}
          >
            <div
              className={`group cursor-pointer py-16 md:py-20 fade-up stagger-${i + 1} transition-colors duration-200`}
            >
              <div
                className={`grid md:grid-cols-[1fr_1fr] gap-8 md:gap-16 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <span className="text-xs font-mono text-muted-foreground/60">
                    Project {project.num}
                  </span>
                  <h3 className="text-2xl md:text-[1.7rem] ml-3 font-semibold text-foreground mt-3 accent-underline">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 mt-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div
                  className={`flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <p className="text-sm font-mono text-primary font-medium">
                    {project.impact}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-muted-foreground border border-border px-2.5 py-1 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedWork;
