"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import TanmayLogo from "../src/assets/icons/logo3.png"

export function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <Image src={TanmayLogo} alt="Tanmay Portfolio Logo" className="nav-logo-img" priority />
          <div>
            <div className="footer-logo-name">Tanmay Toshniwal</div>
            <div className="footer-logo-role">SOFTWARE DEVELOPER</div>
          </div>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Tanmay Toshniwal · Built with Next.js &amp; Framer Motion</p>
        <div className="footer-links">
          {[
            { I: Github,   h: "https://github.com/tanmaytoshniwal09" },
            { I: Linkedin, h: "https://www.linkedin.com/in/tanmay-toshniwal-450951204" },
            { I: Mail,     h: "mailto:tanmaytoshniwal09@gmail.com" },
          ].map(({ I, h }, i) => (
            <motion.a key={i} href={h} target={h.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer" className="footer-link" whileHover={{ y: -3, scale: 1.1 }}>
              <I size={13} color="rgba(255,255,255,0.5)" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
