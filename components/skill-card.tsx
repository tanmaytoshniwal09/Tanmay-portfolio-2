"use client"

import { motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"

interface Skill {
  name: string
  img: StaticImageData
}

interface SkillCardProps {
  title: string
  skills: Skill[]
}

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <motion.div className="skill-cat-card" whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
      <div className="skill-cat-header">{title}</div>
      {skills.map(s => (
        <div key={s.name} className="skill-row">
          <Image src={s.img} alt={s.name} width={30} height={30} style={{ objectFit: "contain" }} />
          <span>{s.name}</span>
        </div>
      ))}
    </motion.div>
  )
}
