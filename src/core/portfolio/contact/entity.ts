export interface EmailRequest {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: {
    from_name: string;
    from_email: string;
    subject: string;
    message: string;
    to_email?: string;
    reply_to?: string;
    [key: string]: string | undefined;
  };
  accessToken?: string;
}

export interface EmailResponse {
  status: number;
  text: string;
}

export interface EmailError {
  status: number;
  text: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailConfig {
  serviceId: string;
  confirmationTemplateId: string;
  notificationTemplateId: string;
  userId: string;
  receiverEmail: string;
}
