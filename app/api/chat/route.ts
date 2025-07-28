import { groq } from "@ai-sdk/groq";
import { streamText } from "ai";
import { z } from "zod";
import nodemailer from "nodemailer";

// Email sending function tool
const sendEmailSchema = z.object({
  name: z.string().describe("The user's name"),
  email: z.string().email().describe("The user's email address"),
  projectDescription: z
    .string()
    .describe("What the user wants to build or discuss"),
  availableSlots: z.string().describe("User's available meeting time slots"),
});

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net", // GoDaddy SMTP server
  port: 465,
  secure: true, // SSL/TLS encryption
  auth: {
    user: process.env.EMAIL_USER, // Your GoDaddy email address
    pass: process.env.EMAIL_PASS, // Your GoDaddy email password
  },
});

export async function POST(req: Request) {
  const { messages, currentDateTime } = await req.json();

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"),
    messages,
    system: `You are a helpful assistant for BuildIt4Me, a tech agency that specializes in building custom software solutions.

Current date and time: ${currentDateTime}

**BuildIt4Me Services:**
- Web Applications (React, Next.js, Node.js, full-stack development)
- Mobile Applications (iOS, Android, React Native, Flutter)
- Chatbots & AI Agents (OpenAI, Claude, custom AI solutions)
- Voice Agents & Voice Applications
- Automation Solutions (workflow automation, API integrations)
- E-commerce Platforms
- Custom Software Development
- API Development & Integration
- Database Design & Management
- Cloud Infrastructure (AWS, Azure, Google Cloud)

Your task is to collect the following information from the user in a conversational manner:
1. Name
2. Email address
3. What they want to build or discuss (project description)
4. Their available meeting time slots (both date and time)

**IMPORTANT GUIDELINES:**
- Be friendly, professional, and conversational
- Ask one question at a time
- Validate email format when provided
- DO NOT send the email until you have ALL 4 pieces of information
- Once you have all the information, use the sendEmail function to send a summary
- After sending the email successfully, immediately thank the user and end the conversation
- Keep responses concise and engaging and on point
- Use the orange theme and tech agency tone
- If the user asks about services, provide detailed information about what BuildIt4Me offers
- DO NOT PROCEED TO THE NEXT STEP UNTIL YOU HAVE THE INFORMATION YOU HAVE ASKED FOR

**Required Flow:**
1. Ask for name
2. Ask for email
3. Ask what they want to build/discuss (encourage them to be detailed)
4. Ask for available meeting slots (both date and time)
5. ONLY after collecting all 4 pieces of information, use sendEmail function
6. After successful email send, thank user and end conversation

**Email Confirmation Message:**
After successfully sending the email, tell the user: "Perfect! I've sent your project details to our team and you'll receive a summary email with next steps shortly. We'll review your requirements and get back to you within 24 hours to schedule a meeting. Thank you for choosing BuildIt4Me! 🚀"

Always respond in a helpful, professional manner that matches the BuildIt4Me brand.`,
    tools: {
      sendEmail: {
        description: "Send an email with the collected user information",
        parameters: sendEmailSchema,
        execute: async ({
          name,
          email,
          projectDescription,
          availableSlots,
        }) => {
          try {
            // Email to the agency
            const agencyEmailBody = `
New Project Inquiry - BuildIt4Me

📋 Project Details:
┌─────────────────────┬─────────────────────────────────────────┐
│ Name                │ ${name}                                │
├─────────────────────┼─────────────────────────────────────────┤
│ Email               │ ${email}                               │
├─────────────────────┼─────────────────────────────────────────┤
│ Project Description │ ${projectDescription}                  │
├─────────────────────┼─────────────────────────────────────────┤
│ Available Slots     │ ${availableSlots}                     │
├─────────────────────┼─────────────────────────────────────────┤
│ Inquiry Date        │ ${currentDateTime}                     │
└─────────────────────┴─────────────────────────────────────────┘

Please review this inquiry and reach out to the client within 24 hours.

Best regards,
BuildIt4Me Chatbot
            `;

            // Email to the user
            const userEmailBody = `
Thank you for your inquiry, ${name}!

We've received your project details and our team is excited to work with you.

📋 Your Project Summary:
┌─────────────────────┬─────────────────────────────────────────┐
│ Name                │ ${name}                                │
├─────────────────────┼─────────────────────────────────────────┤
│ Email               │ ${email}                               │
├─────────────────────┼─────────────────────────────────────────┤
│ Project Description │ ${projectDescription}                  │
├─────────────────────┼─────────────────────────────────────────┤
│ Available Slots     │ ${availableSlots}                     │
├─────────────────────┼─────────────────────────────────────────┤
│ Inquiry Date        │ ${currentDateTime}                     │
└─────────────────────┴─────────────────────────────────────────┘

What happens next:
1. Our team will review your requirements within 24 hours
2. We'll reach out to schedule a consultation meeting
3. We'll discuss your project in detail and provide a customized solution

We're looking forward to bringing your vision to life! 🚀

Best regards,
The BuildIt4Me Team
info@buildit4me.com
            `;

            // Send email to agency
            await transporter.sendMail({
              from: process.env.EMAIL_USER,
              to: "info@buildit4me.com",
              subject: "New Project Inquiry - BuildIt4Me",
              text: agencyEmailBody,
              html: agencyEmailBody.replace(/\n/g, "<br>"),
            });

            // Send email to user
            await transporter.sendMail({
              from: process.env.EMAIL_USER,
              to: email,
              subject: "Thank you for your inquiry - BuildIt4Me",
              text: userEmailBody,
              html: userEmailBody.replace(/\n/g, "<br>"),
            });

            return {
              success: true,
              message:
                "Perfect! I've sent your project details to our team and you'll receive a confirmation email shortly. We'll review your requirements and get back to you within 24 hours to schedule a meeting. Thank you for choosing BuildIt4Me! 🚀",
            };
          } catch (error) {
            console.error("Email sending failed:", error);
            return {
              success: false,
              message:
                "I've collected your information, but there was an issue sending the confirmation email. Our team will still review your inquiry and get back to you within 24 hours. Thank you for choosing BuildIt4Me! 🚀",
            };
          }
        },
      },
    },
  });

  return result.toDataStreamResponse();
}
