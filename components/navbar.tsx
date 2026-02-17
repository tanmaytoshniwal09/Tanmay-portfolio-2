"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Download, Menu, X } from "lucide-react"
import Image from "next/image"
import TanmayLogo from "../src/assets/icons/logo3.png"

interface NavbarProps {
  scrollTo: (id: string, closeDrawer?: boolean) => void
}

export function Navbar({ scrollTo }: NavbarProps) {
  const [menu, setMenu] = useState(false)
  const NAV = ["Home", "About", "Skills", "Experience", "Projects", "Contact"]

  return (
    <header className="portfolio-nav">
      <div className="nav-inner">
        <a href="#home" className="logo-wrapper"
          onClick={e => { e.preventDefault(); scrollTo("home") }}>
          <Image src={TanmayLogo} alt="Tanmay Portfolio Logo" className="nav-logo-img" priority />
          <div className="logo-text">
            <div className="logo-name">Tanmay Toshniwal</div>
            <div className="logo-role">SOFTWARE DEVELOPER</div>
          </div>
        </a>

        <nav className="nav-links">
          {NAV.map(n => (
            <a key={n} href={`#${n.toLowerCase()}`} className="nav-link"
              onClick={e => { e.preventDefault(); scrollTo(n.toLowerCase()) }}>
              {n}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="/Tanmay_Resume_SDE.pdf" download className="btn-cyan resume-btn">
            <Download size={12} /> RESUME
          </a>
          <button className="menu-btn glass" onClick={() => setMenu(!menu)}>
            {menu ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div className="nav-drawer"
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <nav className="nav-drawer-inner">
              {NAV.map(n => (
                <a key={n} href={`#${n.toLowerCase()}`} className="nav-link" style={{ fontSize: 14 }}
                  onClick={e => { e.preventDefault(); scrollTo(n.toLowerCase(), true) }}>
                  {n}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
