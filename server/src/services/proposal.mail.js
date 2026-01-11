import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY);

/* -----------------------------
   INTERNAL STUDIO EMAIL
----------------------------- */
export const sendStudioNotification = async (data) => {
  await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: "🎬 New Project Proposal Received",
    html: `
      <h2>New Proposal Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Role:</strong> ${data.role}</p>
      <p><strong>Platform:</strong> ${data.platform}</p>
      <p><strong>Audience:</strong> ${data.audienceSize}</p>
      <p><strong>Budget:</strong> ${data.budget}</p>
      <p><strong>Deadline:</strong> ${data.deadline}</p>
      <p><strong>Goals:</strong> ${data.goals.join(", ")}</p>
      <hr />
      <p>${data.problem}</p>
    `,
  });
};

/* -----------------------------
   CLIENT CONFIRMATION EMAIL
----------------------------- */
export const sendClientConfirmation = async (data) => {
  await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: data.email,
    subject: "Your project proposal is under review",
    html: `
      <p>Hi ${data.name},</p>

      <p>
        Your project proposal has been successfully received.
        We review all submissions within <strong>24–48 hours</strong>.
      </p>

      <p>
        If your vision aligns with our studio, you’ll receive a
        personal invitation for a discovery call.
      </p>

      <p style="margin-top:24px;">
        — <strong>ChitraPulse Studio</strong><br/>
        Cinematic Digital Experiences
      </p>
    `,
  });
};
