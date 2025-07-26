import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { sendEmailDirect } from "./repository";
import {
  EmailRequest,
  EmailResponse,
  EmailError,
  ContactFormData,
  EmailConfig,
} from "./entity";

export const emailKeys = {
  all: ["email"] as const,
  send: () => [...emailKeys.all, "send"] as const,
  confirmation: () => [...emailKeys.all, "confirmation"] as const,
  notification: () => [...emailKeys.all, "notification"] as const,
};

export const useSendConfirmationEmail = (): UseMutationResult<
  EmailResponse,
  EmailError,
  { formData: ContactFormData; config: EmailConfig },
  unknown
> => {
  return useMutation({
    mutationKey: emailKeys.confirmation(),
    mutationFn: async ({ formData, config }) => {
      const emailData: EmailRequest = {
        service_id: config.serviceId,
        template_id: config.confirmationTemplateId,
        user_id: config.userId,
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: formData.email,
          reply_to: config.receiverEmail,
          sender_name: "Lakshay Kapoor",
          sender_email: "lakshaykapoor08@gmail.com",
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        },
      };
      return await sendEmailDirect(emailData);
    },
    onSuccess: (data) => {
      console.log("Confirmation email sent successfully:", data);
    },
    onError: (error: EmailError) => {
      console.error("Failed to send confirmation email:", error);
    },
  });
};

export const useSendNotificationEmail = (): UseMutationResult<
  EmailResponse,
  EmailError,
  { formData: ContactFormData; config: EmailConfig },
  unknown
> => {
  return useMutation({
    mutationKey: emailKeys.notification(),
    mutationFn: async ({ formData, config }) => {
      const emailData: EmailRequest = {
        service_id: config.serviceId,
        template_id: config.notificationTemplateId,
        user_id: config.userId,
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: config.receiverEmail,
          reply_to: formData.email,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        },
      };
      return await sendEmailDirect(emailData);
    },
    onSuccess: (data) => {
      console.log("Notification email sent successfully:", data);
    },
    onError: (error: EmailError) => {
      console.error("Failed to send notification email:", error);
    },
  });
};

export const useSendContactEmails = (): UseMutationResult<
  { confirmation: EmailResponse; notification: EmailResponse },
  EmailError,
  { formData: ContactFormData; config: EmailConfig },
  unknown
> => {
  return useMutation({
    mutationKey: emailKeys.send(),
    mutationFn: async ({ formData, config }) => {
      const confirmationEmailData: EmailRequest = {
        service_id: config.serviceId,
        template_id: config.confirmationTemplateId,
        user_id: config.userId,
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: formData.email,
          reply_to: config.receiverEmail,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        },
      };

      const notificationEmailData: EmailRequest = {
        service_id: config.serviceId,
        template_id: config.notificationTemplateId,
        user_id: config.userId,
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: config.receiverEmail,
          reply_to: formData.email,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        },
      };

      const [confirmation, notification] = await Promise.all([
        sendEmailDirect(confirmationEmailData),
        sendEmailDirect(notificationEmailData),
      ]);

      return { confirmation, notification };
    },
    onSuccess: (data) => {
      console.log("Both emails sent successfully:", data);
    },
    onError: (error: EmailError) => {
      console.error("Failed to send emails:", error);
    },
  });
};
