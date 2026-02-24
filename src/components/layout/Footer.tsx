import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="section-divider">
    <div className="section-container py-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Lakshay Kapoor
      </span>
      <div className="flex items-center gap-6">
        <Link
          to="/work"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Work
        </Link>
        <Link
          to="/studio"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Studio
        </Link>
        <Link
          to="/contact"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Contact
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
