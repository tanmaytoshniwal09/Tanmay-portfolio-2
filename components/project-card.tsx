"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Github, Globe, ChevronRight } from "lucide-react"

interface Project {
  title: string
  emoji: string
  description: string
  tech: string[]
  github: string
  live: string
  accent: string
  badge: string
  date: string
}

interface ProjectCardProps {
  p: Project
}

export function ProjectCard({ p }: ProjectCardProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="proj-card">
      <div className="proj-card-img" style={{ background: `linear-gradient(135deg,${p.accent}18,#071020)` }}>
        <div>
          <div className="proj-card-emoji">{p.emoji}</div>
          <div className="proj-tech-row">
            {p.tech.slice(0, 3).map((t: string) => (
              <span key={t} className="proj-tech-pill"
                style={{ background: `${p.accent}22`, color: p.accent, border: `1px solid ${p.accent}44` }}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="proj-card-badge" style={{ background: p.accent }}>{p.badge}</div>
      </div>
      <div className="proj-card-body">
        <h3 className="proj-card-name">{p.title}</h3>
        <button className="proj-accordion" onClick={() => setOpen(!open)}>
          PROJECT DETAILS
          <motion.span animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronRight size={13} />
          </motion.span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}
              style={{ overflow: "hidden" }}>
              <p className="proj-desc">{p.description}</p>
              <div className="proj-all-tags">
                {p.tech.map((t: string) => <span key={t} className="proj-tag">{t}</span>)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="proj-actions">
          {p.live !== "#" && (
            <a href={p.live} target="_blank" rel="noopener noreferrer"
              className="proj-btn-live" style={{ background: p.accent }}>
              <Globe size={12} /> SEE LIVE
            </a>
          )}
          {p.github !== "#" && (
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-btn-code">
              <Github size={12} /> SOURCE CODE
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
