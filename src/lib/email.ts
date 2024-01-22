import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { env } from "../env";

const resend = new Resend(env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${env.BASE_URL}/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirme seu email",
    text: "Email de verificação",
    react: EmailTemplate({confirmationLink: confirmLink}),
  });
};
