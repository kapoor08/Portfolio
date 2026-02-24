import { experiences } from "@/data/experience";

const renderBullet = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-foreground font-medium">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

const Experience = () => (
  <section id="experience" className="section-divider">
    <div className="section-container py-24 md:py-32">
      <h2 className="text-sm font-mono text-muted-foreground mb-20 fade-up">Experience</h2>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <div key={exp.company} className={`${i > 0 ? "section-divider" : ""}`}>
            <div className={`py-14 fade-up stagger-${i + 1}`}>
              <div className="grid md:grid-cols-[240px_1fr] gap-4 md:gap-12">
                <div>
                  <h3 className="text-lg font-medium text-foreground">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground/70 mt-1">{exp.role}</p>
                  <p className="text-xs font-mono text-muted-foreground/50 mt-1">{exp.duration}</p>
                </div>
                <ul className="space-y-3 mt-3 md:mt-0">
                  {exp.bullets.map((b) => (
                    <li key={b} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                      <span className="text-primary mt-1.5 shrink-0">·</span>
                      <span>{renderBullet(b)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
