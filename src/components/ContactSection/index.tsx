import { cn } from "@/lib/utils";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "@/provider/theme-provider";
import { toast } from "@/hooks/use-toast";
import { ContactFormData, EmailConfig } from "@/core/portfolio/contact";
import { AMO } from "@/core";
import { contactFormSchema } from "@/schema/contact-form";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const ContactSection = () => {
  const { actualTheme } = useTheme();

  type ContactFormSchema = z.infer<typeof contactFormSchema>;

  // FIXED: Use individual mutations for better control
  const confirmationMutation = AMO.portfolio.contact.useSendConfirmationEmail();
  const notificationMutation = AMO.portfolio.contact.useSendNotificationEmail();

  // Track if either email is sending
  const isPending =
    confirmationMutation.isPending || notificationMutation.isPending;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
    watch,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const messageValue = watch("message");
  const subjectValue = watch("subject");

  // FIXED: Corrected input classes logic
  const getInputClasses = (hasError: boolean) => {
    return cn(
      "w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-0",
      hasError
        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
        : actualTheme === "dark"
        ? "bg-slate-700 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500"
        : "bg-white border-slate-500 text-slate-700 focus:border-blue-400 focus:ring-blue-400"
    );
  };

  const onSubmit: SubmitHandler<ContactFormSchema> = async (data) => {
    try {
      const emailConfig: EmailConfig = {
        serviceId: "service_hvz80o7",
        confirmationTemplateId: "template_cha0vyo",
        notificationTemplateId: "template_rfjoq0h",
        userId: "CGSxtWvw4qzxEOP05",
        receiverEmail: "lakshaykapoor08@gmail.com",
      };

      // FIXED: Send both emails in parallel with proper error handling
      const [confirmationResult, notificationResult] = await Promise.allSettled(
        [
          // Send confirmation email to the sender
          confirmationMutation.mutateAsync({
            formData: data as ContactFormData,
            config: emailConfig,
          }),
          // Send notification email to you (the owner)
          notificationMutation.mutateAsync({
            formData: data as ContactFormData,
            config: emailConfig,
          }),
        ]
      );

      // Check results and show appropriate messages
      const confirmationSuccess = confirmationResult.status === "fulfilled";
      const notificationSuccess = notificationResult.status === "fulfilled";

      if (confirmationSuccess && notificationSuccess) {
        // Both emails sent successfully
        toast({
          title: "Message sent successfully!",
          description:
            "Thanks for reaching out. You'll receive a confirmation email shortly, and I'll get back to you soon.",
        });
        reset(); // Clear form only on complete success
      } else if (confirmationSuccess || notificationSuccess) {
        // Partial success
        toast({
          title: "Message partially sent",
          description: confirmationSuccess
            ? "Your message was received, but there was an issue with the confirmation email. I'll still get back to you soon!"
            : "Message received! Confirmation email sent, but there was an issue with the notification.",
          variant: "default",
        });
        reset(); // Still clear form as message was received
      } else {
        // Both failed
        throw new Error("Both emails failed to send");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Failed to send message",
        description:
          "There was an issue sending your message. Please try again or contact me directly at lakshaykapoor08@gmail.com",
        variant: "destructive",
      });
    }
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
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
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className={getInputClasses(!!errors.name)}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
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
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={getInputClasses(!!errors.email)}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className={cn(
                    "text-sm font-medium",
                    actualTheme === "dark" ? "text-slate-300" : "text-slate-700"
                  )}
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject")}
                  className={getInputClasses(!!errors.subject)}
                  placeholder="What would you like to discuss?"
                />
                <div className="flex justify-between items-center">
                  {errors.subject && (
                    <p className="text-red-500 text-sm">
                      {errors.subject.message}
                    </p>
                  )}
                  <span
                    className={cn(
                      "text-xs",
                      actualTheme === "dark"
                        ? "text-slate-400"
                        : "text-slate-500"
                    )}
                  >
                    {subjectValue?.length || 0}/100
                  </span>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className={cn(
                    "text-sm font-medium",
                    actualTheme === "dark" ? "text-slate-300" : "text-slate-700"
                  )}
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className={getInputClasses(!!errors.message)}
                  placeholder="Tell me about your project, ideas, or how I can help you..."
                />
                <div className="flex justify-between items-center">
                  {errors.message ? (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  ) : (
                    <div></div>
                  )}
                  <span
                    className={cn(
                      "text-xs",
                      actualTheme === "dark"
                        ? "text-slate-400"
                        : "text-slate-500"
                    )}
                  >
                    {messageValue?.length || 0}/1000
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isPending || !isValid || !isDirty}
                className={cn(
                  "w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",
                  actualTheme === "dark" ? "text-slate-900" : "text-slate-50"
                )}
              >
                {isPending ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending emails...
                  </div>
                ) : (
                  "Send Message"
                )}
              </Button>

              {!isValid && isDirty && (
                <p className="text-sm text-center text-amber-600">
                  Please fix the errors above to send your message
                </p>
              )}

              {/* ADDED: Email Status Indicators */}
              {isPending && (
                <div className="text-sm text-center space-y-1">
                  <p
                    className={cn(
                      "transition-colors duration-300",
                      actualTheme === "dark"
                        ? "text-slate-400"
                        : "text-slate-600"
                    )}
                  >
                    📧 Sending confirmation email to you...
                  </p>
                  <p
                    className={cn(
                      "transition-colors duration-300",
                      actualTheme === "dark"
                        ? "text-slate-400"
                        : "text-slate-600"
                    )}
                  >
                    🔔 Sending notification email to me...
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information Section - Unchanged */}
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
