"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "./section-title"
import { ProjectCard } from "./project-card"
import { PROJECTS } from "../data/projects-data"

export function ProjectsSection() {
  return (
    <section id="projects" className="projects-section scroll-mt-16">
      <div className="projects-section-inner">
        <SectionTitle>PROJECTS</SectionTitle>
        <div className="proj-timeline">
          {PROJECTS.map((p, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div key={i} className="proj-row"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}>
                {isLeft  ? <div className="proj-col-left"><ProjectCard p={p} /></div>  : <div className="proj-col-empty" />}
                <div className="proj-col-center">
                  <div className="proj-dot" style={{ borderColor: p.accent, boxShadow: `0 0 16px ${p.accent}88` }}>
                    <div className="proj-dot-inner" style={{ background: p.accent }} />
                  </div>
                  <span className="proj-date">{p.date}</span>
                </div>
                {!isLeft ? <div className="proj-col-right"><ProjectCard p={p} /></div> : <div className="proj-col-empty" />}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
