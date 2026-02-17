"use client"

import { motion } from "framer-motion"
import { MapPin, Briefcase, Award, Globe } from "lucide-react"
import { SectionTitle } from "./section-title"

export function AboutSection() {
  return (
    <section id="about" className="sec-dark relative z-10 py-24 px-6 scroll-mt-16">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionTitle>ABOUT ME</SectionTitle>
        <div className="about-grid">
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>
              Passionate Junior Software Engineer with a strong foundation in software development,
              automation, and full-stack engineering. Skilled at translating business requirements into
              scalable, reliable technical solutions.<br /><br />
              Currently working as an SDE I at{" "}
              <span style={{ color: "#00d4ff", fontWeight: 700 }}>Quanteon Solutions</span>, developing
              responsive React interfaces, scalable backend services, and automation workflows.
            </p>
            <div className="about-facts">
              {[
                { I: MapPin,    t: "Hyderabad, India",        c: "#00d4ff" },
                { I: Briefcase, t: "Open to opportunities",   c: "#34d399" },
                { I: Award,     t: "UCMAS Merit Winner",      c: "#f59e0b" },
                { I: Globe,     t: "Travel & Art Enthusiast", c: "#a78bfa" },
              ].map(({ I, t, c }) => (
                <div key={t} className="about-fact-item"><I size={13} color={c} /> {t}</div>
              ))}
            </div>
          </div>
          <div className="glass stat-card">
            <div className="stat-card-label">{"{ STATS }"}</div>
            {[
              { k: "Experience",       v: "2+",    c: "#00d4ff" },
              { k: "Projects Shipped", v: "4+",    c: "#a78bfa" },
              { k: "Efficiency Gain",  v: "30%",   c: "#34d399" },
              { k: "LeetCode Solved",  v: "447",   c: "#f59e0b" },
              { k: "Global LC Rank",   v: "183K+", c: "#f472b6" },
            ].map(({ k, v, c }) => (
              <div key={k} className="stat-row">
                <span className="stat-row-key">{k}</span>
                <span className="stat-row-val" style={{ color: c }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
