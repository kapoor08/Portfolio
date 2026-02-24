import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "Toolkit", href: "/toolkit" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <Link
          to="/"
          className="text-foreground font-semibold text-lg tracking-tight"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm accent-underline transition-colors duration-200 ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Lakshay_Kapoor's_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-border text-muted-foreground px-4 py-1.5 rounded-sm hover:text-foreground hover:border-muted-foreground transition-colors duration-200"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-muted-foreground hover:text-foreground"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu?.classList.toggle("hidden");
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M3 5h14M3 10h14M3 15h14"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className="hidden md:hidden bg-background border-b border-border"
      >
        <div className="section-container py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => {
                handleNavClick(link.href);
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
