import { steps } from "@/data/process";

const Process = () => (
  <section id="process" className="section-divider">
    <div className="section-container py-24 md:py-32">
      <h2 className="text-sm font-mono text-muted-foreground mb-20 fade-up">
        Engineering Process
      </h2>

      <div className="space-y-0">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`group py-10 ${i > 0 ? "section-divider" : ""} fade-up stagger-${i + 1}`}
          >
            <div className="relative flex gap-6 md:gap-12 items-start">
              <span className="absolute -left-2 md:left-0 top-0 text-[5rem] md:text-[6rem] font-semibold text-foreground/[0.04] leading-none select-none pointer-events-none font-mono">
                {step.num}
              </span>
              <span className="text-xs font-mono text-muted-foreground mt-1 shrink-0 relative z-10">
                {step.num}
              </span>
              <div className="relative z-10">
                <h3 className="text-base md:text-lg font-medium text-foreground accent-underline ml-14">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-3 max-w-lg leading-relaxed ml-14">
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
