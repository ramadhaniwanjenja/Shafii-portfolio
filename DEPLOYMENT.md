# 🚀 Deployment Guide for Shafii Portfolio

## Prerequisites

- GitHub account
- Vercel account (free)
- Gmail app password for email functionality

## 📋 Step-by-Step Deployment

### 1. Push to GitHub

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit - Portfolio ready for deployment"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com) and sign in with GitHub**

2. **Click "New Project"**

3. **Import your GitHub repository**

4. **Configure the project:**

   - **Project Name:** `shafii-portfolio`
   - **Framework Preset:** Other
   - **Root Directory:** Leave empty (uses root)
   - **Build Command:** `cd frontend && npm run build`
   - **Output Directory:** `frontend/dist`

5. **Add Environment Variables** (Click "Environment Variables"):

   ```
   EMAIL_USER = ramadhanishafiiwanjenja@gmail.com
   EMAIL_PASSWORD = uijdtnhangpvsfdo
   NODE_ENV = production
   OPENAI_API_KEY = sk-proj-0123456789abcdef0123456789abcdef
   CORS_ORIGIN = https://your-vercel-domain.vercel.app
   FRONTEND_URL = https://your-vercel-domain.vercel.app
   ```

6. **Click "Deploy"**

### 3. Post-Deployment Setup

After deployment, you'll get a URL like: `https://shafii-portfolio-xxx.vercel.app`

1. **Update CORS settings:**

   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Update `CORS_ORIGIN` and `FRONTEND_URL` with your actual Vercel URL

2. **Redeploy:**
   - Go to Deployments tab
   - Click the three dots on the latest deployment
   - Click "Redeploy"

## 🔧 Environment Variables Needed

| Variable         | Description               | Example                             |
| ---------------- | ------------------------- | ----------------------------------- |
| `EMAIL_USER`     | Your Gmail address        | `ramadhanishafiiwanjenja@gmail.com` |
| `EMAIL_PASSWORD` | Gmail App Password        | `uijdtnhangpvsfdo`                  |
| `NODE_ENV`       | Environment               | `production`                        |
| `OPENAI_API_KEY` | OpenAI API Key (optional) | `sk-proj-...`                       |
| `CORS_ORIGIN`    | Frontend URL for CORS     | `https://your-domain.vercel.app`    |
| `FRONTEND_URL`   | Frontend URL              | `https://your-domain.vercel.app`    |

## 📧 Gmail App Password Setup

1. Enable 2-Factor Authentication on your Gmail
2. Go to Google Account → Security → 2-Step Verification → App passwords
3. Generate password for "Mail"
4. Use the 16-character password as `EMAIL_PASSWORD`

## 🔄 Updating Your Site

To update your deployed site:

1. Make changes to your code
2. Push to GitHub: `git push`
3. Vercel will automatically redeploy

## 🐛 Troubleshooting

### Email not working:

- Check Gmail app password is correct
- Verify environment variables in Vercel dashboard
- Check deployment logs in Vercel

### Contact form 500 error:

- Check backend environment variables
- Look at function logs in Vercel dashboard

### Build failures:

- Check if all dependencies are in package.json
- Verify build commands in vercel.json

## 📁 Project Structure

```
Shafii-portfolio/
├── frontend/          # React + Vite app
├── backend/           # Express.js API
├── vercel.json        # Vercel configuration
├── .gitignore         # Git ignore rules
└── DEPLOYMENT.md      # This guide
```

## 🎉 Your Portfolio Features

✅ **Contact Form with Email**

- Visitors can send you messages
- You receive emails with their details
- They get auto-reply confirmation

✅ **Professional Design**

- Modern UI with animations
- Responsive design
- Dark theme

✅ **Fast & Secure**

- Deployed on Vercel CDN
- Serverless backend
- Environment variables protection

---

**🚀 Your portfolio is now live and professional!**
