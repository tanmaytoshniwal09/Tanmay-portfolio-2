"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "./section-title"
import { SkillCard } from "./skill-card"
import { SKILLS } from "../data/skills-data"

export function SkillsSection() {
  return (
    <section id="skills" className="skills-section scroll-mt-16">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionTitle>TECH SKILLS</SectionTitle>
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.55 }}>
              <SkillCard title={s.title} skills={s.skills} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
