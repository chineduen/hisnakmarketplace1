# Hisnak Marketplace – Frontend

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-18+-green)
![Next.js](https://img.shields.io/badge/Next.js-14-black)

Hisnak Marketplace is an affiliate networking and digital product platform designed to empower creators and entrepreneurs to sell skill-based services, educational programs, apps, and more.

This is the frontend repository, built using Next.js, React, Tailwind CSS, and TypeScript, optimized for deployment on platforms like Render, Vercel, and Netlify.

## 🚀 Tech Stack

- **Next.js 14** – React framework for building fast, scalable web apps  
- **React 18** – Component-based UI  
- **Tailwind CSS** – Utility-first CSS for rapid styling  
- **TypeScript** – Type safety and cleaner code  
- **Stripe** – Payment processing integration
- **Lucide React** – Beautiful icons
- **Shadcn/UI** – Modern UI components

## 📁 Project Structure

```
hisnak-marketplace/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Route groups
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # Shadcn/UI components
│   ├── home/             # Home page sections
│   ├── layout/           # Layout components
│   └── payment/          # Payment components
├── lib/                  # Utilities and helpers
├── public/               # Static assets
├── backend/              # NestJS backend (separate)
├── docs/                 # Documentation
└── deployment configs    # Various deployment files
```

## 🛠 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 8+

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/chineduen/hisnak-marketplace.git
cd hisnak-marketplace
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your actual values
```

4. **Run the development server**
```bash
npm run dev
```

App will be running at: http://localhost:3000

## 🚀 Deployment

### Option 1: Render (Recommended)
1. Connect your GitHub repo to Render
2. Use these settings:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node.js
   - **Node Version**: 18

### Option 2: Vercel
```bash
npm install -g vercel
vercel --prod
```

### Option 3: Netlify
```bash
npm run build
# Deploy the 'out' folder to Netlify
```

### Option 4: Docker
```bash
docker build -t hisnak-marketplace .
docker run -p 3000:3000 hisnak-marketplace
```

## 🔧 Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run export` | Export static files |

## 🌍 Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_API_URL=https://api.hisnak.com/v1
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_your_stripe_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret
```

## 📦 Key Features

- ✅ **Affiliate Networking System** - Multi-level commission structure
- ✅ **Product Marketplace** - Digital products and courses
- ✅ **Stripe Integration** - Secure payment processing
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **SEO Optimized** - Meta tags and structured data
- ✅ **Performance Optimized** - Fast loading and optimized images

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

Built and maintained by **Chinedu Emmanuel Nwabunwanne**

For support or business inquiries: **admin@hisnak.com**

---

⭐ **Star this repo if you find it helpful!**