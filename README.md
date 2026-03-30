# DHBOT Landing Page Deployment Guide

## 🚀 Deployment to Vercel

1. **Upload to GitHub:** Push all files to a new repository.
2. **Connect to Vercel:** Import the repository into Vercel.
3. **Configure Environment Variables:**
   - Go to **Project Settings > Environment Variables**.
   - Add the following keys:
     - `TELEGRAM_BOT_TOKEN`: Your bot token from @BotFather.
     - `TELEGRAM_CHAT_ID`: Your Telegram chat ID.
4. **Deploy:** Click "Deploy".

## 📁 Project Structure

- `index.html`: Main landing page (Tailwind CSS, AOS Animations, Lead Modal).
- `api/send-lead.js`: Serverless function for secure Telegram delivery.
- `logo.jpg`: Branding asset.
- `package.json`: Project metadata.

## 🛠 Features

- **Responsive Design:** Optimized for mobile and desktop.
- **Premium Animations:** Using AOS (Animate On Scroll).
- **Secure Leads:** Credentials are never exposed to the client.
- **Smart Form:** Validates that at least one contact method is provided.

---
© 2026 DHBOT Precision Systems.
