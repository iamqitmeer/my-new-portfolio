"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  url: string;
  image: string;
  description: string;
  features: string[];
  tech: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

export function ProjectCard({ project, index, inView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border-none shadow-lg card-hover">
        <div className="relative h-48 overflow-hidden">
          import Image from "next/image";
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={400} // Set a fixed width
            height={300} // Set a fixed height
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 w-full">
              <Button variant="default" size="sm" asChild className="w-full">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span>View Project</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{project.title}</span>
            <Button variant="ghost" size="icon" asChild>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="transition-all hover:bg-primary hover:text-primary-foreground"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
