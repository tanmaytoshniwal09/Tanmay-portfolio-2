"use client"

import { motion } from "framer-motion"
import { Download, Mail, MapPin, Github, Linkedin, ChevronDown } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  scrollTo: (id: string) => void
}

export function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-overlay" />
      <div className="hero-inner">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <span className="avail-badge"><span className="avail-dot" /> AVAILABLE FOR OPPORTUNITIES</span>
          </motion.div>
          <motion.h1 className="hero-title"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
            Hi, I'm<br /><span className="text-shimmer">Tanmay</span>
          </motion.h1>
          <motion.p className="hero-sub"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            Software Developer · Full-Stack Engineer
          </motion.p>
          <motion.p className="hero-desc"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            Passionate about building scalable applications and developing innovative solutions.
            Currently crafting web interfaces and automation tools at{" "}
            <span style={{ color: "#00d4ff", fontWeight: 700 }}>Quanteon Solutions</span>{" "}
            with React, Node.js, and modern technologies.
          </motion.p>
          <motion.div className="hero-cta"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
            <button className="btn-cyan" style={{ padding: "12px 22px", fontSize: 13 }}
              onClick={() => { const a = document.createElement("a"); a.href = "/Tanmay_Resume_SDE.pdf"; a.download = "Tanmay_Toshniwal_Resume.pdf"; a.click() }}>
              <Download size={14} /> DOWNLOAD CV
            </button>
            <a href="#contact" className="btn-violet" style={{ padding: "12px 22px", fontSize: 13 }}
              onClick={e => { e.preventDefault(); scrollTo("contact") }}>
              <Mail size={14} /> HIRE ME
            </a>
          </motion.div>
          <motion.div className="hero-socials"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            {[
              { I: Github,   h: "https://github.com/tanmaytoshniwal09" },
              { I: Linkedin, h: "https://www.linkedin.com/in/tanmay-toshniwal-450951204" },
              { I: Mail,     h: "mailto:tanmaytoshniwal09@gmail.com" },
            ].map(({ I, h }) => (
              <motion.a key={h} href={h} target={h.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer" className="social-btn">
                <I size={15} color="rgba(255,255,255,0.7)" />
              </motion.a>
            ))}
            <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.35)", display: "flex", alignItems: "center", gap: 4 }}>
              <MapPin size={10} /> Hyderabad, India
            </span>
          </motion.div>
        </div>

        <motion.div className="profile-wrap"
          initial={{ opacity: 0, scale: 0.9, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <div className="animate-float" style={{ position: "relative" }}>
            <div className="profile-glow" />
            <div className="profile-img-box">
              <Image src="/tanmay-profile-pic.jpeg" alt="Tanmay Toshniwal" fill style={{ objectFit: "cover", objectPosition: "top" }} />
              <div className="profile-img-gradient" />
            </div>
            <motion.div className="stat-chip animate-float2"
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
              style={{ left: -82, top: 36, border: "1px solid rgba(0,212,255,0.3)" }}>
              <div className="stat-chip-val" style={{ color: "#00d4ff" }}>2+</div>
              <div className="stat-chip-lbl">Yrs Exp</div>
            </motion.div>
            <motion.div className="stat-chip animate-float"
              initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }}
              style={{ right: -50, bottom: -80, border: "1px solid rgba(124,58,237,0.35)" }}>
              <div className="stat-chip-val" style={{ color: "#a78bfa" }}>447</div>
              <div className="stat-chip-lbl">LeetCode ✓</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <div className="scroll-hint">
          SCROLL TO EXPLORE <ChevronDown size={18} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}
