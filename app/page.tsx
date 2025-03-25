"use client";

import type React from "react";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Download,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { ThemeToggle } from "@/components/theme-toggle";
import { ProjectCard } from "@/components/project-card";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ContactForm } from "@/components/contact-form";
import { SkillCard } from "@/components/skill-card";
import { cn } from "@/lib/utils";

import { RefObject, createRef } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const achievementsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { amount: 0.5 });
  const aboutInView = useInView(aboutRef, { amount: 0.5 });
  const experienceInView = useInView(experienceRef, { amount: 0.5 });
  const projectsInView = useInView(projectsRef, { amount: 0.5 });
  const skillsInView = useInView(skillsRef, { amount: 0.5 });
  const achievementsInView = useInView(achievementsRef, { amount: 0.5 });
  const contactInView = useInView(contactRef, { amount: 0.5 });

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (heroInView) setActiveSection("home");
    else if (aboutInView) setActiveSection("about");
    else if (experienceInView) setActiveSection("experience");
    else if (projectsInView) setActiveSection("projects");
    else if (skillsInView) setActiveSection("skills");
    else if (achievementsInView) setActiveSection("achievements");
    else if (contactInView) setActiveSection("contact");
  }, [
    heroInView,
    aboutInView,
    experienceInView,
    projectsInView,
    skillsInView,
    achievementsInView,
    contactInView,
  ]);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", ref: heroRef, icon: "🏠" },
    { name: "About", ref: aboutRef, icon: "👨‍💻" },
    { name: "Experience", ref: experienceRef, icon: "📈" },
    { name: "Projects", ref: projectsRef, icon: "🚀" },
    { name: "Skills", ref: skillsRef, icon: "🛠️" },
    { name: "Achievements", ref: achievementsRef, icon: "🏆" },
    { name: "Contact", ref: contactRef, icon: "📧" },
  ];

  return (
    <div className="relative">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300",
          hasScrolled
            ? "bg-background/90 backdrop-blur-sm border-b py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">
              <span className="text-primary">Q</span>itmeer{" "}
              <span className="text-primary">R</span>aza
            </h1>
          </div>

          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.ref)}
                className={`text-sm font-medium transition-colors hover:text-primary relative ${
                  activeSection === item.name.toLowerCase()
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <span className="flex items-center gap-1">
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </span>
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <ThemeToggle />

            <div className="hidden md:block">
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/iamqitmeer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="hidden md:block">
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/iamqitmeer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-md z-40 border-b shadow-lg lg:hidden">
          <div className="container mx-auto py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={`w-full justify-start text-lg ${
                    activeSection === item.name.toLowerCase()
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => scrollToSection(item.ref)}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </span>
                </Button>
              ))}
            </nav>
          </div>
        </div>
      )}

      <main className="pt-16">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="min-h-screen flex items-center justify-center relative"
        >
          <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <Badge
                variant="outline"
                className="text-lg px-4 py-1.5 border-primary mb-4 inline-block"
              >
                Full-Stack Developer
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="block">Hi, I&apos;m</span>
                <span className="gradient-text block">Qitmeer Raza</span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
                Building modern web applications
              </h2>

              <p className="text-lg mb-8 max-w-lg">
                Specializing in MERN Stack & Next.js development with a passion
                for building high-quality web applications and delivering
                exceptional user experiences.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection(contactRef)}>
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button variant="outline" asChild>
                  <a href="https://my-resume74.tiiny.site" target="blank" download>
                    Check Out My Resume <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/80 rounded-full p-1">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
                    <Avatar className="w-full h-full">
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/152205810?v=4"
                        alt="Qitmeer Raza"
                      />
                      <AvatarFallback>QR</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => scrollToSection(aboutRef)}
                className="rounded-full h-12 w-12 border-primary"
              >
                <ChevronDown className="h-6 w-6 text-primary" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold gradient-text">About Me</h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-4" />
            </div>

            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="lg:w-1/2">
                <Card className="border-none shadow-lg card-hover">
                  <CardContent className="pt-6">
                    <p className="text-lg leading-relaxed">
                      I am a full-stack web developer with strong skills in both
                      front-end and back-end development, specializing in the
                      MERN stack and Next.js. I have successfully completed 6
                      projects, consistently earning a 4.8 client satisfaction
                      rating.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                      My contributions to feature development at Lemlist and
                      Zenth Solutions earned me the &apos;Employee of the
                      Month&apos; award twice, reflecting my commitment to
                      improving client satisfaction. I am now seeking a
                      mid-level Node.js developer role where I can leverage my
                      skills to build and optimize server-side applications,
                      supporting your company&apos;s mission to deliver
                      top-quality software solutions.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:w-1/2">
                <Card className="border-none shadow-lg card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      🎓 Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      {
                        school: "GBCHS College Korangi No 3",
                        degree: "Intermediate Pre-Engineering",
                        period: "2023 - Present",
                        location: "Karachi",
                      },
                      {
                        school: "Government Boys Secondary School, KTS-11",
                        degree: "Matriculation in Science",
                        period: "2021 - 2023",
                        location: "Karachi, Pakistan",
                      },
                    ].map((edu, index) => (
                      <div
                        key={index}
                        className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300"
                      >
                        <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px]" />
                        <h3 className="font-semibold text-lg">{edu.school}</h3>
                        <p className="text-primary">{edu.degree}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {edu.period} • {edu.location}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="mt-6 grid grid-cols-3 gap-2">
                  {[
                    "Full-Stack Developer",
                    "MERN Stack",
                    "Next.js",
                    "React.js",
                    "Node.js",
                    "MongoDB",
                  ].map((badge) => (
                    <Badge
                      key={badge}
                      variant="secondary"
                      className="w-full justify-center py-1.5 font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold gradient-text">
                Work Experience
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-4" />
            </div>

            <ExperienceTimeline inView={experienceInView} />
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold gradient-text">Projects</h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-4" />
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                Explore my latest projects showcasing my skills in full-stack
                development, UI/UX design, and problem-solving.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AutoPitch.ai",
                  url: "https://autopitch.ai/",
                  image: "/placeholder.svg?height=200&width=400",
                  description:
                    "A sales research tool powered by AI that helps craft personalized pitches for technical products.",
                  features: [
                    "Automates the generation of research reports using 6 data sources.",
                    "Tailors pitches based on the prospect&apos;s role, company, and industry to improve sales outreach.",
                  ],
                  tech: ["Next.js", "AI", "React", "Node.js"],
                },
                {
                  title: "Attryb",
                  url: "https://attryb.com/",
                  image: "/placeholder.svg?height=200&width=400",
                  description:
                    "A personalization platform that helps brands optimize conversions by creating customized shopping journeys for visitors using AI.",
                  features: [
                    "Builds visitor profiles by leveraging first-party data to predict shopping behavior.",
                    "Offers dynamic segments and no-code personalization for tailored user experiences.",
                  ],
                  tech: ["React", "AI", "Node.js", "MongoDB"],
                },
                {
                  title: "School Management System",
                  url: "https://realschoolmanagementsystem.iamqitmeer.vercel.app/",
                  image: "/placeholder.svg?height=200&width=400",
                  description:
                    "A web-based school management system to enhance communication between students, teachers, and administrators.",
                  features: [
                    "Manages user roles (Admin, Teacher, Student) with specific functionalities and access levels.",
                    "Features attendance tracking, performance assessments, data visualization, and communication tools.",
                  ],
                  tech: ["MERN Stack", "Next.js", "Tailwind CSS"],
                },
              ].map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                  inView={projectsInView}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <a
                  href="https://github.com/iamqitmeer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  <span>View More Projects on GitHub</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold gradient-text">
                Skills & Expertise
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-4" />
            </div>

            <Tabs defaultValue="technical" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger
                  value="technical"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Technical Skills
                </TabsTrigger>
                <TabsTrigger
                  value="soft"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Soft Skills
                </TabsTrigger>
              </TabsList>

              <TabsContent value="technical">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {[
                    {
                      name: "Frontend",
                      skills: [
                        { name: "React.js", level: 85 },
                        { name: "Next.js", level: 80 },
                        { name: "TypeScript", level: 75 },
                        { name: "Tailwind CSS", level: 90 },
                        { name: "Framer Motion", level: 70 },
                      ],
                    },
                    {
                      name: "Backend",
                      skills: [
                        { name: "Node.js", level: 85 },
                        { name: "Express.js", level: 80 },
                        { name: "RESTful APIs", level: 85 },
                        { name: "GraphQL", level: 70 },
                        { name: "Authentication", level: 75 },
                      ],
                    },
                    {
                      name: "Database",
                      skills: [
                        { name: "MongoDB", level: 85 },
                        { name: "Firebase", level: 75 },
                        { name: "PostgreSQL", level: 70 },
                        { name: "Redis", level: 65 },
                        { name: "Data Modeling", level: 80 },
                      ],
                    },
                  ].map((category, index) => (
                    <SkillCard
                      key={index}
                      category={category}
                      inView={skillsInView}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "Git",
                    "Figma",
                    "Responsive Design",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-background rounded-lg p-3 text-center border border-border hover:bg-muted/20 transition-colors hover:border-primary card-hover"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="soft">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { name: "Team Collaboration", value: 90 },
                    { name: "Communication", value: 85 },
                    { name: "Problem Solving", value: 90 },
                    { name: "Adaptability", value: 80 },
                    { name: "Time Management", value: 85 },
                    { name: "Project Management", value: 75 },
                    { name: "Attention to Detail", value: 90 },
                    { name: "Client Communication", value: 80 },
                  ].map((skill) => (
                    <Card
                      key={skill.name}
                      className="border-none shadow-lg card-hover"
                    >
                      <CardContent className="pt-6 text-center">
                        <h3 className="text-lg font-medium mb-2">
                          {skill.name}
                        </h3>
                        <div className="w-full bg-muted rounded-full h-2.5 mb-4">
                          <motion.div
                            className="bg-primary h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={
                              skillsInView
                                ? { width: `${skill.value}%` }
                                : { width: 0 }
                            }
                            transition={{ duration: 1 }}
                          />
                        </div>
                        <p className="text-primary font-semibold">
                          {skill.value}%
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Achievements Section */}
        <section ref={achievementsRef} className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold gradient-text">
                Key Achievements
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-none shadow-lg card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    ⭐ High Client Satisfaction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center mb-4">
                    <div className="text-4xl font-bold gradient-text">
                      4.8/5
                    </div>
                  </div>
                  <p className="text-center">
                    Worked on 6 projects with a consistent rating of 4.8 on
                    each, demonstrating dedication to delivering high-quality
                    work and customer satisfaction.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🏆 Employee of the Month
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center mb-4">
                    <div className="text-4xl font-bold gradient-text">
                      2 times
                    </div>
                  </div>
                  <p className="text-center">
                    Received &apos;Employee of the Month&apos; recognition for
                    exceptional contributions in feature development, product
                    optimization, and full-stack development, significantly
                    improving client satisfaction and project outcomes.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Projects Completed", value: 6, icon: "🚀" },
                { label: "Happy Clients", value: 12, icon: "😊" },
                { label: "Technologies", value: 15, icon: "💻" },
                { label: "Years Experience", value: 2, icon: "⏳" },
              ].map((stat) => (
                <Card
                  key={stat.label}
                  className="border-none shadow-lg text-center p-6 card-hover"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold gradient-text">Get In Touch</h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-4" />
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                Have a project in mind or want to discuss potential
                opportunities? I&apos;d love to hear from you!
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-primary/10 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold mb-6 text-primary">
                        Contact Information
                      </h3>

                      <div className="space-y-6">
                        <div className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                          <div className="bg-primary/20 p-3 rounded-full">
                            <Mail className="h-6 w-6 text-primary" />
                          </div>
                          <a
                            href="mailto:iamqitmeeer@gmail.com"
                            className="hover:text-primary transition-colors"
                          >
                            iamqitmeeer@gmail.com
                          </a>
                        </div>

                        <div className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                          <div className="bg-primary/20 p-3 rounded-full">
                            <Linkedin className="h-6 w-6 text-primary" />
                          </div>
                          <a
                            href="https://linkedin.com/in/iamqitmeer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            linkedin.com/in/iamqitmeer
                          </a>
                        </div>

                        <div className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                          <div className="bg-primary/20 p-3 rounded-full">
                            <Github className="h-6 w-6 text-primary" />
                          </div>
                          <a
                            href="https://github.com/iamqitmeer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            github.com/iamqitmeer
                          </a>
                        </div>

                        <div className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                          <div className="bg-primary/20 p-3 rounded-full">
                            <ExternalLink className="h-6 w-6 text-primary" />
                          </div>
                          <a
                            href="https://www.iamqitmeer-portfolio.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            iamqitmeer-portfolio.vercel.app
                          </a>
                        </div>
                      </div>

                      <div className="mt-12">
                        <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                        <div className="flex gap-3">
                          {[
                            {
                              icon: <Linkedin className="h-5 w-5" />,
                              url: "https://linkedin.com/in/iamqitmeer",
                            },
                            {
                              icon: <Github className="h-5 w-5" />,
                              url: "https://github.com/iamqitmeer",
                            },
                            {
                              icon: <Mail className="h-5 w-5" />,
                              url: "mailto:iamqitmeeer@gmail.com",
                            },
                          ].map((social, index) => (
                            <a
                              key={index}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-background p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              {social.icon}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <ContactForm inView={contactInView} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-muted/50 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Qitmeer Raza. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary transition-colors"
            >
              <a
                href="https://linkedin.com/in/iamqitmeer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary transition-colors"
            >
              <a
                href="https://github.com/iamqitmeer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary transition-colors"
            >
              <a href="mailto:iamqitmeeer@gmail.com">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
