import {
  emailKeys,
  useSendConfirmationEmail,
  useSendNotificationEmail,
  useSendContactEmails,
} from "./useCase";

export const contact = {
  keys: emailKeys,
  useSendConfirmationEmail,
  useSendNotificationEmail,
  useSendContactEmails,
};

export * from "./entity";
