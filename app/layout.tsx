import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qitmeer Raza | Full-Stack Web Developer | MERN Stack, Next.js",
  description:
    "Qitmeer Raza is a highly accomplished Full-Stack Web Developer with specialized expertise in MERN Stack (MongoDB, Express.js, React.js, Node.js) and Next.js. With years of experience crafting dynamic, scalable, and high-performance web applications, Qitmeer delivers seamless user experiences and robust server-side solutions. Known for his award-winning contributions at Lemlist and Zenth Solutions, he has built responsive SPAs, SSR applications, RESTful APIs, SaaS platforms, eCommerce systems, real-time dashboards, and complex backend infrastructures. Adept at integrating third-party APIs, cloud services, and performance optimization techniques, Qitmeer ensures each project meets industry standards, SEO best practices, and mobile responsiveness. Highly rated by clients for clean code, attention to detail, and exceptional project delivery. Available for hire worldwide to build modern web applications, microservices, serverless architectures, and full-stack digital products for startups, enterprises, and agencies. Proficient in cloud deployment (Vercel, AWS), advanced JavaScript frameworks, TDD, PWA development, and custom CMS platforms.",
  keywords: [
    // Main personal/professional tags
    "Qitmeer Raza",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Software Engineer",
    "Freelance Full-Stack Developer",
    // MERN & Next.js technical stacks
    "MongoDB Developer",
    "Express.js Developer",
    "React.js Developer",
    "Node.js Specialist",
    "Next.js Full-Stack Development",
    "Server-Side Rendering (SSR)",
    "Static Site Generation (SSG)",
    "API Developer",
    // Industry services
    "SaaS Developer",
    "eCommerce Platform Developer",
    "Custom CMS Development",
    "Real-Time Dashboard Developer",
    "RESTful API Developer",
    "GraphQL Developer",
    "Cloud Application Developer",
    // Performance & optimization
    "Web Performance Optimization",
    "SEO Best Practices",
    "Mobile-First Web Development",
    "Cross-Browser Compatibility",
    "Lazy Loading Implementation",
    "Code Splitting Techniques",
    // Advanced skills & libraries
    "React Hooks Expert",
    "Redux State Management",
    "Context API Developer",
    "Material UI Developer",
    "Tailwind CSS Developer",
    "Headless CMS Integration",
    "Microservices Architecture",
    "PWA Developer",
    // Tools & DevOps
    "GitHub Portfolio",
    "CI/CD Pipelines",
    "Unit Testing & TDD",
    "Jest & Cypress Testing",
    "Agile Development",
    "Scrum Master Skills",
    "Docker Deployment",
    "AWS Lambda Functions",
    // API integrations & security
    "Stripe Payment Integration",
    "Firebase Backend Developer",
    "OAuth Authentication",
    "JWT Secure APIs",
    "WebSockets Real-Time Apps",
    "Serverless Framework Expert",
    // Modern tech stack buzzwords for SEO
    "Web3 Developer",
    "Blockchain-Ready Applications",
    "AI Integrated Web Apps",
    "Machine Learning APIs",
    "Modern JavaScript Developer",
    "ES6+ Expert",
    "React Native Prototype Developer",
    // Freelance & hire keywords
    "Hire MERN Developer",
    "Hire Next.js Developer",
    "Hire JavaScript Developer",
    "Hire Node.js Backend Developer",
    "Hire SaaS Developer",
    "Remote Web Developer for Hire",
    // UI/UX and frontend
    "Responsive Design",
    "Pixel Perfect Frontend",
    "Accessibility (a11y) Web Developer",
    "UI/UX Expert",
    "Frontend Animation with Framer Motion",
    "Custom React Components Developer",
    // Cloud and deployment
    "AWS Cloud Developer",
    "Vercel Deployment Expert",
    "Netlify Web Developer",
    "Google Cloud Certified Developer",
    "Firebase App Developer",
    // Project types & use cases
    "SaaS MVP Developer",
    "B2B Web Solutions Developer",
    "B2C eCommerce Web Developer",
    "CRM Developer",
    "ERP Systems Developer",
    "Custom Web Portals",
    // Specific technologies for SEO
    "TypeScript Developer",
    "JavaScript ES6+ Expert",
    "NextAuth Integration",
    "GraphQL Apollo Developer",
    "Prisma ORM Developer",
    "SQL and NoSQL Expert",
    "MongoDB Atlas Developer",
    // Performance & security
    "Secure Web Development Practices",
    "Cross-Site Scripting (XSS) Prevention",
    "CSRF Protection in Web Apps",
    "Application Load Balancing",
    "Caching Strategies with Redis",
    // Business-focused keywords
    "Web Solutions for Startups",
    "Enterprise Web Development",
    "Small Business Web Solutions",
    "Remote Software Engineer for Hire",
    "Outsourced Full-Stack Development",
    // Additional long-tail keywords for SEO
    "Professional Full-Stack Web Developer for SaaS",
    "Advanced Next.js Developer for Complex Applications",
    "React and Node.js Freelance Consultant",
    "Custom Web Application Designer and Developer",
    "Web Developer with a Proven Track Record of Client Satisfaction",
    "Portfolio of Scalable Web Projects in SaaS, eCommerce, and Real-Time Apps",
    // Expand into niche and location-based keywords
    "Full-Stack Web Developer USA",
    "Hire a Next.js Developer UK",
    "JavaScript Developer for Hire Europe",
    "Remote Full-Stack Developer India",
    "Top-Rated Upwork Developer",
    // Add broad tech terms to reach more searches
    "Artificial Intelligence in Web Apps",
    "Machine Learning Web Developer",
    "Data Visualization with D3.js",
    "Three.js 3D Web Development",
    "Interactive Web Animations",
    "Web Development for Fintech Applications",
    "Custom Web-Based CRM Systems",
    "Healthcare Web Solutions",
    "Educational Web Apps Developer",
    // Scaling up keywords to reach the 1000 mark with variations
    "Custom Node.js APIs",
    "Next.js SSR Apps",
    "Static Websites with Next.js",
    "GraphQL APIs with Node.js",
    "React Context vs Redux",
    "Modern Web Architecture",
    "Full-Stack Developer for SaaS Startups",
    "Enterprise React Developer",
    "Real-Time Chat Application Developer",
    "Full-Stack Developer for AI-Based Platforms",
    "Custom Dashboards with React.js",
    "Admin Panels with Next.js",
    "Data-Intensive Web Apps",
    "Interactive Web UI Developer",
    // … (repeat variations, location tags, freelance keywords, role-specific SEO terms, industry verticals, toolchains, libraries, and buzzwords to reach 1000+ tags)
  ],
  authors: [{ name: "Qitmeer Raza" }],
  creator: "Qitmeer Raza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics /> 
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
