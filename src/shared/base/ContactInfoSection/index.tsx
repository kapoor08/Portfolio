import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";
import { AppButton } from "@/shared/elements";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const ContactInfoSection = () => {
  const { actualTheme } = useTheme();
  return (
    <div className="flex flex-col justify-between">
      <div>
        <h3
          className={cn(
            "text-2xl font-semibold mb-6",
            actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
          )}
        >
          Contact Information
        </h3>
        <div className="space-y-6">
          <div className="flex items-start">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-colors duration-300",
                actualTheme === "dark"
                  ? "bg-slate-900"
                  : "bg-slate-100 shadow-md"
              )}
            >
              <Mail
                className={cn(
                  "h-5 w-5",
                  actualTheme === "dark" ? "text-blue-400" : "text-slate-600"
                )}
              />
            </div>
            <div>
              <h4
                className={cn(
                  "text-lg font-medium",
                  actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
                )}
              >
                Email
              </h4>
              <p
                className={cn(
                  actualTheme === "dark" ? "text-slate-300" : "text-slate-500"
                )}
              >
                lakshaykapoor08@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-colors duration-300",
                actualTheme === "dark"
                  ? "bg-slate-900"
                  : "bg-slate-100 shadow-md"
              )}
            >
              <Linkedin
                className={cn(
                  "h-5 w-5",
                  actualTheme === "dark" ? "text-blue-400" : "text-slate-600"
                )}
              />
            </div>
            <div>
              <h4
                className={cn(
                  "text-lg font-medium",
                  actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
                )}
              >
                LinkedIn
              </h4>
              <p
                className={cn(
                  actualTheme === "dark" ? "text-slate-300" : "text-slate-500"
                )}
              >
                linkedin.com/in/lakshaykapoor
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-colors duration-300",
                actualTheme === "dark"
                  ? "bg-slate-900"
                  : "bg-slate-100 shadow-md"
              )}
            >
              <Github
                className={cn(
                  "h-5 w-5",
                  actualTheme === "dark" ? "text-blue-400" : "text-slate-600"
                )}
              />
            </div>
            <div>
              <h4
                className={cn(
                  "text-lg font-medium",
                  actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
                )}
              >
                GitHub
              </h4>
              <p
                className={cn(
                  actualTheme === "dark" ? "text-slate-300" : "text-slate-500"
                )}
              >
                github.com/kapoor08
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "mt-8 p-6 rounded-lg transition-colors duration-300 shadow-lg",
          actualTheme === "dark" ? "bg-slate-900" : "bg-slate-50"
        )}
      >
        <h4
          className={cn(
            "text-lg font-medium mb-2",
            actualTheme === "dark" ? "text-slate-50" : "text-slate-800"
          )}
        >
          Availability
        </h4>
        <p
          className={cn(
            "mb-4",
            actualTheme === "dark" ? "text-slate-300" : "text-slate-700"
          )}
        >
          I'm currently available for freelance work and full-time positions.
        </p>
        <AppButton
          className={cn(
            "w-full bg-blue-600 hover:bg-blue-700",
            actualTheme === "dark" ? "text-slate-800" : "text-slate-50"
          )}
          icon={<Download className="mr-2 h-4 w-4" />}
        >
          Download Resume
        </AppButton>
      </div>
    </div>
  );
};

export default ContactInfoSection;
