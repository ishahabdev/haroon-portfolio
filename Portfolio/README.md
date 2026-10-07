# Haroon Gulzar Portfolio

## Contact form email delivery

The contact form sends messages through the Vercel serverless function at
`api/send-message.js` and Resend. Messages are delivered to
`haroongulzar226@gmail.com`.

In your Vercel project settings, add these environment variables to each
deployment environment:

- `RESEND_API_KEY`: an API key from Resend.
- `RESEND_FROM_EMAIL`: an email address verified with Resend, such as
  `Portfolio <contact@your-verified-domain.com>`.

Redeploy after adding the variables. For local development, use `vercel dev`
from the `Portfolio` directory with the same variables configured locally;
Vite alone does not run Vercel API functions.
