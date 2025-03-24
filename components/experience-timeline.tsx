"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase } from "lucide-react"

interface ExperienceTimelineProps {
  inView: boolean
}

export function ExperienceTimeline({ inView }: ExperienceTimelineProps) {
  const experiences = [
    {
      title: "Full-Stack Developer (Next.js)",
      company: "Lemlist",
      period: "04/2024 - 12/2024",
      location: "Remote",
      description: [
        "Part-time developer at Lemlist, improving features and ensuring smooth performance for a leading cold outreach tool.",
        "Work with a team of 12 developers to enhance Lemlist's features and functionality.",
        "Contribute to building tools for personalized cold emails and verified lead generation.",
      ],
      skills: ["Next.js", "React", "Node.js", "API Integration"],
    },
    {
      title: "Junior Full-Stack Development (MERN & Next.js)",
      company: "Zenth Solutions",
      period: "12/2024 - Present",
      location: "Karachi, Pakistan",
      description: [
        "Full-time Junior Full-Stack Developer at Zenth Solutions, specializing in MERN stack and Next.js for app development while managing branding and social media.",
        "Oversee branding and social media management, applying design and management skills to enhance the company's online presence.",
        "Develop and maintain production-level web apps using MERN stack and Next.js, focusing on both front-end and back-end development.",
      ],
      skills: ["MERN Stack", "Next.js", "Branding", "Social Media"],
    },
    {
      title: "Intern Frontend Web Developer (React/Next.js)",
      company: "POX Solutions",
      period: "08/2024 - 11/2024",
      location: "Remote",
      description: [
        "Completed a frontend internship at Pox Digital Solutions, learning web development and working on full-stack projects.",
        "Worked on various website features like login, signup, two-step authentication, chat, form handling, blog, and admin panel.",
        "Gained practical experience in real-world development, improving my technical skills.",
      ],
      skills: ["React", "Next.js", "Authentication", "UI/UX"],
    },
  ]

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <Card key={index} className="border-none shadow-lg">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <div>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Briefcase className="h-3.5 w-3.5" />
                  {exp.company}
                </CardDescription>
              </div>
              <Badge variant="outline" className="text-primary border-primary md:self-start">
                {exp.period}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                <span>{exp.location}</span>
              </div>
            </div>

            <ul className="list-disc pl-5 space-y-2 mb-4">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill, i) => (
                <Badge key={i} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

