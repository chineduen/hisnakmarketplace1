
## Hisnak Marketplace – Frontend

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

Hisnak Marketplace is an affiliate networking and digital product platform designed to empower creators and entrepreneurs to sell skill-based services, educational programs, apps, and more.

This is the frontend repository, built using Next.js, React, Tailwind CSS, and TypeScript, and optimized for deployment on platforms like AWS Amplify and Vercel.


 ## Tech Stack

- Next.js – React framework for building fast, scalable web apps  
- React – Component-based UI  
- Tailwind CSS – Utility-first CSS for rapid styling  
- TypeScript – Type safety and cleaner code  
- Node.js & npm – Runtime and package manager  

## Folder Structure

hisnakmarketplace1/
├── app/ # Main app routing (Next.js)
├── components/ # Shared components
├── hooks/ # Custom React hooks
├── lib/ # Utilities and API helpers
├── public/ # Static assets
├── styles/ # Global styles (Tailwind config)
├── package.json # Project metadata & scripts
└── README.md # This file

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/chineduen/hisnakmarketplace1.git
cd hisnakmarketplace1
2. Install dependencies
bash

npm install
3. Run the development server
bash

npm run dev
App will be running at: http://localhost:3000

## Build & Export (Static Deployment)
bash

npm run build && npm run export
This creates an out/ folder with static files. Perfect for AWS Amplify or Netlify.

## Deployment
This app is intended to be deployed on:

AWS Amplify

Vercel

Netlify (optional for static hosting)

Screenshots
<!-- Uncomment and add screenshots when available ### 🖼 Home Page ![Home Screenshot](screenshots/home.png) ### 💻 Dashboard ![Dashboard Screenshot](screenshots/dashboard.png) -->
Contributing
Contributions are welcome! To contribute:

## Fork the repo

Create your feature branch: git checkout -b feature/new-feature

Commit changes: git commit -m 'Add new feature'

Push to the branch: git push origin feature/new-feature

Open a pull request

License
This project is licensed under the MIT License.

Contact
Built and maintained by Chinedu Emmanuel Nwabunwanne

For support or business inquiries: admin@hisnak.com

