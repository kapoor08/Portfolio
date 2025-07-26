import { cn } from "@/lib/utils";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "@/provider/theme-provider";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { actualTheme } = useTheme();

  const handleContactSubmit = () => {
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section
      id="contact"
      className={cn(
        "py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300",
        actualTheme === "dark" ? "bg-slate-800" : "bg-white"
      )}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={cn(
              "text-4xl font-bold mb-4",
              actualTheme === "dark" ? "text-white" : "text-slate-800"
            )}
          >
            Let's Work Together
          </h2>
          {/* <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"> */}
          <p
            className={cn(
              "text-lg transition-colors duration-300 mb-8 max-w-2xl mx-auto",
              actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
            )}
          >
            Have a project in mind? I'd love to hear about it. Let's chat and
            see how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={cn(
              "p-8 rounded-lg transition-colors duration-300",
              actualTheme === "dark" ? "bg-slate-900" : "bg-slate-50 shadow-lg"
            )}
          >
            <h3
              className={cn(
                "text-2xl font-semibold mb-6",
                actualTheme === "dark" ? "text-white" : "text-slate-700"
              )}
            >
              Get in Touch
            </h3>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className={cn(
                      "text-sm font-medium",
                      actualTheme === "dark"
                        ? "text-slate-300"
                        : "text-slate-700"
                    )}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className={cn(
                      "w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-0",
                      actualTheme === "dark"
                        ? "bg-slate-700 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "bg-white border-slate-500 text-slate-700 focus:border-blue-400 focus:ring-blue-400"
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className={cn(
                      "text-sm font-medium",
                      actualTheme === "dark"
                        ? "text-slate-300"
                        : "text-slate-700"
                    )}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className={cn(
                      "w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-0",
                      actualTheme === "dark"
                        ? "bg-slate-700 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500"
                        : "bg-white border-slate-500 text-slate-700 focus:border-blue-400 focus:ring-blue-400"
                    )}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className={cn(
                    "text-sm font-medium",
                    actualTheme === "dark" ? "text-slate-300" : "text-slate-700"
                  )}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  className={cn(
                    "w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-0",
                    actualTheme === "dark"
                      ? "bg-slate-700 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500"
                      : "bg-white border-slate-500 text-slate-700 focus:border-blue-400 focus:ring-blue-400"
                  )}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className={cn(
                    "text-sm font-medium",
                    actualTheme === "dark" ? "text-slate-300" : "text-slate-700"
                  )}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className={cn(
                    "w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-0",
                    actualTheme === "dark"
                      ? "bg-slate-700 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500"
                      : "bg-white border-slate-500 text-slate-700 focus:border-blue-400 focus:ring-blue-400"
                  )}
                ></textarea>
              </div>
              <Button
                type="submit"
                className={cn(
                  "w-full bg-blue-600 hover:bg-blue-700",
                  actualTheme === "dark" ? "text-slate-900" : "text-slate-50"
                )}
              >
                Send Message
              </Button>
            </form>
          </div>

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
                        actualTheme === "dark"
                          ? "text-blue-400"
                          : "text-slate-600"
                      )}
                    />
                  </div>
                  <div>
                    <h4
                      className={cn(
                        "text-lg font-medium",
                        actualTheme === "dark"
                          ? "text-slate-300"
                          : "text-slate-600"
                      )}
                    >
                      Email
                    </h4>
                    <p
                      className={cn(
                        actualTheme === "dark"
                          ? "text-slate-300"
                          : "text-slate-500"
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
                        actualTheme === "dark"
                          ? "text-blue-400"
                          : "text-slate-600"
                      )}
                    />
                  </div>
                  <div>
                    <h4
                      className={cn(
                        "text-lg font-medium",
                        actualTheme === "dark"
                          ? "text-slate-300"
                          : "text-slate-600"
                      )}
                    >
                      LinkedIn
                    </h4>
                    <p
                      className={cn(
                        actualTheme === "dark"
                          ? "text-slate-300"
                          : "text-slate-500"
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
                        actualTheme === "dark"
                          ? "text-blue-400"
                          : "text-slate-600"
                      )}
                    />
                  </div>
                  <div>
                    <h4
                      className={cn(
                        "text-lg font-medium",
                        actualTheme === "dark"
                          ? "text-slate-300"
                          : "text-slate-600"
                      )}
                    >
                      GitHub
                    </h4>
                    <p
                      className={cn(
                        actualTheme === "dark"
                          ? "text-slate-300"
                          : "text-slate-500"
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
                I'm currently available for freelance work and full-time
                positions.
              </p>
              <Button
                className={cn(
                  "w-full bg-blue-600 hover:bg-blue-700",
                  actualTheme === "dark" ? "text-slate-800" : "text-slate-50"
                )}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
