This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Email Configuration

The chatbot uses nodemailer to send emails. To set up email functionality:

1. Create a `.env.local` file in the root directory
2. Add the following environment variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**For GoDaddy Email setup:**

- Use your regular GoDaddy email password
- Make sure your email is: `your-email@yourdomain.com`
- The password is your regular GoDaddy email password
- Server settings: `smtpout.secureserver.net` on port 465 with SSL/TLS
- If you have 2FA enabled, you might need to generate an app password from GoDaddy's control panel

**For Gmail setup:**

- Enable 2-Step Verification in your Google Account
- Go to Security > App passwords
- Generate a new app password for "Mail"
- Use that password in `EMAIL_PASS`

**For other email providers:**

- Update the SMTP settings in `app/api/chat/route.ts` to match your provider
- Use appropriate credentials for your email service

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
