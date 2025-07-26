import request from "../request";
import { EmailRequest, EmailResponse } from "./entity";

const EMAILJS_API_URL = "https://api.emailjs.com/api/v1.0/email/send";

export const sendEmail = async (
  emailData: EmailRequest
): Promise<EmailResponse> => {
  const config = {
    method: "POST" as const,
    relativePath: EMAILJS_API_URL,
    data: emailData,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await request<EmailResponse>(config);
};

export const sendEmailDirect = async (
  emailData: EmailRequest
): Promise<EmailResponse> => {
  const response = await fetch(EMAILJS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw {
      status: response.status,
      text: errorText,
      message: `Failed to send email: ${response.statusText}`,
    };
  }

  return {
    status: response.status,
    text: await response.text(),
  };
};
