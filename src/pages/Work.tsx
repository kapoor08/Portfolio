import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const Work = () => (
  <Layout>
    <div className="section-container py-28 md:py-36">
      <h1 className="text-4xl md:text-5xl font-semibold text-foreground fade-up">
        Work
      </h1>
      <p className="text-base text-muted-foreground/80 mt-4 max-w-lg fade-up stagger-1">
        Selected projects. Each structured as a technical case study.
      </p>

      <div className="mt-24 space-y-0">
        {projects.map((project, i) => (
          <div
            key={project.num}
            className={`${i > 0 ? "section-divider" : ""}`}
          >
            <article className="py-20 fade-up">
              <span className="text-xs font-mono text-muted-foreground/60">
                Project {project.num}
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-3">
                {project.title}
              </h2>

              <div className="grid md:grid-cols-3 gap-4 mt-6 text-sm">
                <div>
                  <span className="text-muted-foreground/60">Role:</span>{" "}
                  <span className="text-foreground">{project.role}</span>
                </div>
                <div>
                  <span className="text-muted-foreground/60">Duration:</span>{" "}
                  <span className="text-foreground">{project.duration}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mt-12">
                <div>
                  <h3 className="text-xs font-mono text-muted-foreground mb-3">
                    Problem
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-mono text-muted-foreground mb-3">
                    Solution
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xs font-mono text-muted-foreground mb-3">
                  Results
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.results.map((r) => (
                    <span
                      key={r}
                      className="text-sm font-mono text-primary font-medium"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xs font-mono text-muted-foreground mb-3">
                  Stack
                </h3>
                <div className="flex flex-wrap gap-2">
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
            </article>
          </div>
        ))}
      </div>

      <div className="section-divider pt-16 mt-4">
        <Link
          to="/contact"
          className="inline-block text-sm accent-link accent-underline"
        >
          Have a project in mind? Let's talk →
        </Link>
      </div>
    </div>
  </Layout>
);

export default Work;
