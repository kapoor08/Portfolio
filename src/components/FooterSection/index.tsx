import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";
import { Github, Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  const { actualTheme } = useTheme();
  return (
    <footer
      className={cn(
        "py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300",
        actualTheme === "dark" ? "bg-slate-900" : "bg-slate-900"
      )}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            © 2025 Lakshay Kapoor. Built with React and Tailwind CSS.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
