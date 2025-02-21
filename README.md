<div align="center">

# AI Task Assistant Convex 🚀

A next-generation AI-powered task assistant platform built with Next.js and a real-time Convex backend, designed to boost your productivity and streamline your workflow.

![Landing Page](/public/project-image/landingpage.png)

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Convex](https://img.shields.io/badge/Convex-000000?style=for-the-badge&logo=convex&logoColor=white)](https://www.convex.dev/)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-000000?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)
[![AI SDK](https://img.shields.io/badge/AI_SDK-000000?style=for-the-badge&logo=ai&logoColor=white)](https://sdk.vercel.ai/)
[![Zod](https://img.shields.io/badge/Zod-3068B7?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Shadcn/ui](https://img.shields.io/badge/Shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

## ✨ Features

<div align="center">

| Feature                         | Description                                                               |
| ------------------------------- | ------------------------------------------------------------------------- |
| 🤖 AI Task Assistant            | Intelligent task management leveraging advanced AI algorithms.            |
| 💬 Chat-Based CRUD              | Perform natural language CRUD operations via an intuitive chat interface. |
| 📊 Data Analysis & Optimization | Gain data-driven insights with analysis and optimization suggestions.     |
| 🔧 Vercel AI SDK Integration    | Access robust tool-calling capabilities powered by Vercel AI SDK.         |
| ⚡ Real-time Synchronization    | Enjoy seamless, real-time task updates powered by Convex DB.              |
| 🔐 Secure Authentication        | Ensure secure access with Clerk-powered authentication.                   |
| 📈 Responsive Dashboard         | Explore metrics and productivity insights via a modern dashboard.         |

</div>

## 🌟 Tech Highlights

- Type-safe API layer ensuring robust and maintainable code.
- Modern UI components built with shadcn/ui and styled with Tailwind CSS.
- Edge-ready deployment enabling fast, scalable, and reliable performance.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-task-assistant-convex.git

# Navigate into the project directory
cd ai-task-assistant-convex

# Install dependencies
npm install

# Create your environment variables file
cp .env.example .env

# (Optional) Start the local Convex development server
npx convex dev

# Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the application

## 🛠️ Tech Stack

<details>
<summary>Click to expand tech stack details</summary>

### Core Framework

- **[Next.js](https://nextjs.org/)** - React framework with App Router for SSR and static pages
- **[TypeScript](https://www.typescriptlang.org/)** - For robust type safety and improved development experience
- **[React](https://reactjs.org/)** - Build dynamic UIs with modern React features

### Backend & Data

- **[Convex](https://www.convex.dev/)** - Serverless, real-time backend to power dynamic data operations

### Authentication

- **[Clerk](https://clerk.com/)** - Modern authentication and user management solution

### AI

- **[AI SDK](https://sdk.vercel.ai/)** - Powerful AI SDK for building AI-powered features
- **[OpenAI](https://openai.com/)** - (Optional) Integrate advanced AI features for task automation

### Form Management & Validation

- **[Zod](https://zod.dev/)** - TypeScript-first schema validation with static type inference

### State Management

- **[React Query](https://tanstack.com/query/latest)** - Powerful data synchronization and state management

### UI & Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for fast and responsive design
- **[shadcn/ui](https://ui.shadcn.com/)** - Pre-built, modern UI components to accelerate development
- **[Lucide Icons](https://lucide.dev/)** - Icon library for clean and customizable visuals

### Development & Deployment

- **[ESLint](https://eslint.org/)** - Enforces code quality and consistency
- **[Prettier](https://prettier.io/)** - Automatic code formatting
- **[Vercel](https://vercel.com/)** - Lightning-fast deployment and hosting platform

</details>

## 📸 Screenshots

<div align="center">

### Dashboard View

![Dashboard View](/public/project-image/dashboard.png)

</div>

## 🔐 Environment Variables

To run this project, add the following environment variables to your `.env` file:

| Variable                            | Description                                           |
| ----------------------------------- | ----------------------------------------------------- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key for client-side authentication  |
| `CLERK_SECRET_KEY`                  | Clerk secret key for server-side authentication       |
| `CLERK_ISSUER_URL`                  | Clerk issuer URL (Add to Convex Environment Variable) |
| `CONVEX_DEPLOYMENT`                 | Convex deployment identifier                          |
| `NEXT_PUBLIC_CONVEX_URL`            | URL for the Convex backend service                    |
| `OPENAI_API_KEY`                    | API key for OpenAI integration (if applicable)        |

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
CLERK_ISSUER_URL="Add to Convex Environment Variable"
CONVEX_DEPLOYMENT="your-convex-deployment"
NEXT_PUBLIC_CONVEX_URL="your-convex-url"
OPENAI_API_KEY="your-openai-api-key"
```
