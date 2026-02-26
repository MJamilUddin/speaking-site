# Contact Form Setup Instructions

Your contact form is now set up at `/contact` using **Web3Forms** - a free service that sends form submissions directly to your email without requiring a backend.

## Setup Steps (Takes 2 minutes)

### 1. Get Your Web3Forms Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click "Get Started - It's Free"
3. Enter your email: **jamiluddin.eng@gmail.com**
4. Click "Create Access Key"
5. Check your email for the verification link
6. Click the verification link to confirm
7. Copy your **Access Key** (it will look like: `a1b2c3d4-1234-5678-abcd-ef1234567890`)

### 2. Add Your Access Key to the Contact Form

Open this file: `/src/app/contact/page.tsx`

Find line 30 and replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key:

```typescript
// BEFORE:
access_key: "YOUR_WEB3FORMS_ACCESS_KEY",

// AFTER (example):
access_key: "a1b2c3d4-1234-5678-abcd-ef1234567890",
```

### 3. Test It!

1. Start your development server (if not already running): `npm run dev`
2. Visit: `http://localhost:3000/contact`
3. Fill out the form and submit
4. Check your email at **jamiluddin.eng@gmail.com**

## What Information Gets Collected

The form collects:
- ✅ **Name** (required)
- ✅ **Email** (required)
- ✅ **Company/Organization** (optional)
- ✅ **Message** (required)

Each submission is sent to your email with the subject: "New Workshop Inquiry from [Name]"

## Features Included

- ✨ Clean, modern form design matching your site
- ✅ Form validation
- 🎯 Success/error states
- 📧 Sends directly to your email
- 🆓 Completely free
- 🚀 No backend or database needed
- 📱 Fully responsive

## Navigation Updates

I've also updated all the navigation:
- **Navbar "Let's Talk" button** → Links to `/contact`
- **Hero "Book a Workshop" button** → Links to `/contact`
- **CTA "Get in Touch" button** → Links to `/contact`
- **Navbar links** → Updated to work from any page

## Alternative: Direct Email Link

If you prefer a simple mailto link instead of a form, you can change any button to:

```html
<a href="mailto:jamiluddin.eng@gmail.com?subject=Workshop%20Inquiry">
  Get in Touch
</a>
```

But the form is much more professional and gives you structured data!
