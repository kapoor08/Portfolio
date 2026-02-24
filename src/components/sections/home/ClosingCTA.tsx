import { Link } from "react-router-dom";

const ClosingCTA = () => (
  <section className="section-divider">
    <div className="section-container py-28 md:py-36 text-center">
      <h2 className="text-3xl md:text-5xl font-semibold text-foreground fade-up">
        Building systems that scale.
      </h2>
      <div className="mt-10 fade-up stagger-1">
        <Link
          to="/contact"
          className="inline-block text-sm bg-primary text-primary-foreground px-8 py-3 rounded-sm hover:bg-primary/90 transition-all duration-150 hover-lift"
        >
          Start a Project
        </Link>
      </div>
    </div>
  </section>
);

export default ClosingCTA;
