import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { ContactFormData, EmailConfig } from "@/core/portfolio/contact";
import { AMO } from "@/core";
import { contactFormSchema } from "@/schema/contact-form";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppButton, Input, Textarea } from "@/shared/elements";
import { useTheme } from "@/provider/theme-provider";
import z from "zod";

const ContactForm = () => {
  const { actualTheme } = useTheme();
  type ContactFormSchema = z.infer<typeof contactFormSchema>;

  const confirmationMutation = AMO.portfolio.contact.useSendConfirmationEmail();
  const notificationMutation = AMO.portfolio.contact.useSendNotificationEmail();

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

      const [confirmationResult, notificationResult] = await Promise.allSettled(
        [
          confirmationMutation.mutateAsync({
            formData: data as ContactFormData,
            config: emailConfig,
          }),
          notificationMutation.mutateAsync({
            formData: data as ContactFormData,
            config: emailConfig,
          }),
        ]
      );

      const confirmationSuccess = confirmationResult.status === "fulfilled";
      const notificationSuccess = notificationResult.status === "fulfilled";

      if (confirmationSuccess && notificationSuccess) {
        toast({
          title: "Message sent successfully!",
          description:
            "Thanks for reaching out. You'll receive a confirmation email shortly, and I'll get back to you soon.",
        });
        reset();
      } else if (confirmationSuccess || notificationSuccess) {
        toast({
          title: "Message partially sent",
          description: confirmationSuccess
            ? "Your message was received, but there was an issue with the confirmation email. I'll still get back to you soon!"
            : "Message received! Confirmation email sent, but there was an issue with the notification.",
          variant: "default",
        });
        reset();
      } else {
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name Field */}
        <Input
          id="name"
          label="Name"
          type="text"
          placeholder="Your full name"
          register={register("name", { required: "Name is required" })}
          error={errors.name}
          getInputClasses={getInputClasses}
        />

        {/* Email Field */}
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="your.email@example.com"
          register={register("email", {
            required: "Email is required",
          })}
          error={errors.email}
          getInputClasses={getInputClasses}
        />
      </div>

      {/* Subject Field */}
      <Input
        id="subject"
        label="Subject"
        type="text"
        placeholder="What would you like to discuss?"
        register={register("subject", {
          required: "Subject is required",
          maxLength: 100,
        })}
        error={errors.subject}
        getInputClasses={getInputClasses}
        value={subjectValue}
        showCharCount
        maxLength={100}
      />

      {/* Message Field */}
      <Textarea
        id="message"
        label="Message"
        placeholder="Tell me about your project, ideas, or how I can help you..."
        register={register("message", {
          required: "Message is required",
          maxLength: 1000,
        })}
        error={errors.message}
        getInputClasses={getInputClasses}
        value={messageValue}
        showCharCount
        maxLength={1000}
        rows={5}
      />

      {/* Submit Button */}
      <AppButton
        type="submit"
        isLoading={isPending}
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
      </AppButton>

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
              actualTheme === "dark" ? "text-slate-400" : "text-slate-600"
            )}
          >
            📧 Sending confirmation email to you...
          </p>
          <p
            className={cn(
              "transition-colors duration-300",
              actualTheme === "dark" ? "text-slate-400" : "text-slate-600"
            )}
          >
            🔔 Sending notification email to me...
          </p>
        </div>
      )}
    </form>
  );
};
export default ContactForm;
