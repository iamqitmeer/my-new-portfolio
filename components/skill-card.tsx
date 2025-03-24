"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Skill {
  name: string
  level: number
}

interface SkillCardProps {
  category: {
    name: string
    skills: Skill[]
  }
  inView: boolean
}

export function SkillCard({ category, inView }: SkillCardProps) {
  return (
    <Card className="h-full border-none shadow-lg card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-primary">{category.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {category.skills.map((skill, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between">
              <span>{skill.name}</span>
              <span className="text-primary font-medium">{skill.level}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

