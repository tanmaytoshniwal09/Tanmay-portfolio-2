"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

// Components
import { NetworkBG } from "../components/network-bg"
import { Navbar } from "../components/navbar"
import { HeroSection } from "../components/hero-section"
import { AboutSection } from "../components/about-section"
import { SkillsSection } from "../components/skills-section"
import { ExperienceSection } from "../components/experience-section"
import { ProjectsSection } from "../components/projects-section"
import { LeetcodeSection } from "../components/leetcode-section"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/footer"

export default function Portfolio() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" })
  const [sub, setSub] = useState(false)
  const [toast, setToast] = useState<{ t: "ok" | "err"; m: string } | null>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  const fire = (t: "ok" | "err", m: string) => { 
    setToast({ t, m }); 
    setTimeout(() => setToast(null), 3000) 
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setSub(true)
    try {
      const r = await fetch("/api/send-email", {
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(form),
      })
      r.ok
        ? (fire("ok", "Message sent! 🎉"), setForm({ firstName: "", lastName: "", email: "", message: "" }))
        : fire("err", "Something went wrong.")
    } catch { 
      fire("err", "Network error.") 
    }
    setSub(false)
  }

  const scrollTo = (id: string, closeDrawer = false) => {
    if (closeDrawer) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 320)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
      {/* Scroll progress */}
      <motion.div className="scroll-bar" style={{ scaleX }} />

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -16 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -16 }}
            className={`toast ${toast.t === "ok" ? "toast-ok" : "toast-err"}`}>
            {toast.t === "ok" ? "✓" : "✕"} {toast.m}
          </motion.div>
        )}
      </AnimatePresence>

      <NetworkBG />

      {/* Navigation */}
      <Navbar scrollTo={scrollTo} />

      {/* Hero Section */}
      <HeroSection scrollTo={scrollTo} />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* LeetCode Section */}
      <LeetcodeSection />

      {/* Contact Section */}
      <ContactSection form={form} setForm={setForm} onSubmit={onSubmit} sub={sub} />

      {/* Footer */}
      <Footer />
    </>
  )
}
