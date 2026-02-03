# Email Setup Instructions

This document explains how to set up email functionality for the contact forms on your website.

## Prerequisites

1. Create a Resend account at [https://resend.com](https://resend.com)
2. Get your API key from the Resend dashboard (API Keys section)

## Setup Steps

### 1. Environment Variables

Create a `.env.local` file in the root of your project (if it doesn't exist) and add:

```env
RESEND_API_KEY=re_your_api_key_here
```

Replace `re_your_api_key_here` with your actual Resend API key.

### 2. Domain Verification (Recommended for Production)

For production use, you should verify your domain in Resend:

1. Go to Resend Dashboard → Domains
2. Add your domain: `aplictsolutions.com`
3. Add the DNS records provided by Resend to your domain's DNS settings
4. Wait for verification (usually takes a few minutes)

Once verified, you can optionally set a custom `from` email address:

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=Aplict Solutions <noreply@aplictsolutions.com>
```

### 3. Testing

For initial testing, Resend allows you to use their default domain:
- From: `onboarding@resend.dev`
- To: `contact@aplictsolutions.com` (or any email you want to receive submissions)

### 4. Email Recipient

All form submissions will be sent to: **contact@aplictsolutions.com**

To change this, update the `to` field in `/src/app/api/contact/route.ts`:

```typescript
to: 'your-email@example.com',
```

## How It Works

1. When a user submits a form (Contact Form or Homepage CTA), the data is sent to `/api/contact`
2. The API route validates the data and formats it into a professional HTML email
3. The email is sent via Resend to `contact@aplictsolutions.com`
4. If a resume is attached (for Career inquiries), it's included as a PDF attachment
5. The user receives a success message on the website

## Troubleshooting

### Emails not being sent?

1. Check that `RESEND_API_KEY` is set in your `.env.local` file
2. Verify your API key is correct in the Resend dashboard
3. Check the server logs for error messages
4. Ensure your Resend account has sufficient credits/quota

### Domain verification issues?

- Make sure DNS records are correctly added
- Wait a few minutes for DNS propagation
- Check Resend dashboard for verification status

## Security Notes

- Never commit `.env.local` to version control
- Keep your API key secure
- The API route includes validation to prevent spam submissions
