# Haroon Gulzar Portfolio

## Vercel setup

The app root contains `package.json`, `src/`, and `api/`. Set the Vercel
project's **Root Directory** to `Portfolio` so Vercel detects the Vite app and
the `api/send-message.js` function together. `vercel.json` configures the Vite
build output; no catch-all rewrite is used, so `/api` requests reach the
serverless function.

Run `npm run dev` from the repository root to start Vercel's local development
server, including API routes. The first run may ask you to install the Vercel
CLI or link the project. Vite's `npm run dev` in `Portfolio/` alone does not
serve the API function.

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
