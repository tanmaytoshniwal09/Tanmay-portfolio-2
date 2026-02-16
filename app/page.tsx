"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import {
  Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown,
  MapPin, Award, Briefcase, GraduationCap, Send, Download,
  TrendingUp, Menu, X, ChevronRight, Code2, Layers, Server,
  Database, Cloud, Globe,
} from "lucide-react"
import Image, { StaticImageData } from "next/image"
import TanmayLogo from "../src/assets/icons/logo3.png"
import {
  html,
  css,
  javascript,
  typescript,
  react,
  nextjs,
  tailwindcss,
  nodejs,
  express,
  springboot,
  postgresql,
  mysql,
  firebase,
  supabase,
  java,
  cplusplus,
  git,
  vercel,
  gitIcon,
  materialUI,
  redux,
  styleComponent
} from "../src/assets/img/skills/index"

//import{html,css,javascript,typescript,nextjs,react,tailwindcss,nodejs,express,springboot,postgresql,mysql,firebase,supabase}from"../src/assets/img/skills/index"
/* ── Animated particle canvas ──────────────────────────────────── */
function NetworkBG() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current; if (!c) return
    const ctx = c.getContext("2d")!
    let W = c.width = window.innerWidth
    let H = c.height = window.innerHeight
    const onR = () => { W = c.width = window.innerWidth; H = c.height = window.innerHeight }
    window.addEventListener("resize", onR)
    const D = Array.from({ length: 75 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
      r: Math.random() * 2 + 1,
    }))
    let raf: number
    const tick = () => {
      ctx.clearRect(0, 0, W, H)
      D.forEach(d => {
        d.x += d.vx; d.y += d.vy
        if (d.x < 0 || d.x > W) d.vx *= -1
        if (d.y < 0 || d.y > H) d.vy *= -1
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255,255,255,0.5)"; ctx.fill()
      })
      for (let i = 0; i < D.length; i++) for (let j = i + 1; j < D.length; j++) {
        const dx = D[i].x - D[j].x, dy = D[i].y - D[j].y
        const dist = Math.hypot(dx, dy)
        if (dist < 130) {
          ctx.beginPath(); ctx.moveTo(D[i].x, D[i].y); ctx.lineTo(D[j].x, D[j].y)
          ctx.strokeStyle = `rgba(255,255,255,${.15 * (1 - dist / 130)})`
          ctx.lineWidth = .7; ctx.stroke()
        }
      }
      raf = requestAnimationFrame(tick)
    }
    tick()
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onR) }
  }, [])
  return <canvas ref={ref} className="network-canvas" />
}

/* ── Section title ─────────────────────────────────────────────── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="sec-title">{children}</h2>
      <div className="sec-bar" />
    </div>
  )
}

/* ── Skill category card — white card like reference screenshot ─── */


function SkillCard({
  title,
  skills
}: {
  title: string
  skills: { name: string; img: StaticImageData }[]
}) {
  return (
    <motion.div
      className="skill-cat-card"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <div className="skill-cat-header">{title}</div>

      {skills.map(s => (
        <div key={s.name} className="skill-row">
          <Image
            src={s.img}
            alt={s.name}
            width={32}
            height={32}
          />
          <span>{s.name}</span>
        </div>
      ))}
    </motion.div>
  )
}

/* ── Project card ──────────────────────────────────────────────── */
function ProjectCard({ p }: { p: any }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="proj-card">
      {/* Visual header */}
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

      {/* Body */}
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
              style={{ overflow: "hidden" }}
            >
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

/* ═══════════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════════ */
export default function Portfolio() {
  const [menu, setMenu] = useState(false)
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" })
  const [sub, setSub] = useState(false)
  const [toast, setToast] = useState<{ t: "ok" | "err"; m: string } | null>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  const fire = (t: "ok" | "err", m: string) => {
    setToast({ t, m }); setTimeout(() => setToast(null), 3000)
  }
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setSub(true)
    try {
      const r = await fetch("/api/send-email", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      r.ok
        ? (fire("ok", "Message sent! 🎉"), setForm({ firstName: "", lastName: "", email: "", message: "" }))
        : fire("err", "Something went wrong.")
    } catch { fire("err", "Network error.") }
    setSub(false)
  }

  const NAV = ["Home", "About", "Skills", "Experience", "Projects", "Contact"]
  
  const scrollTo = (id: string, closeDrawer = false) => {
    if (closeDrawer) {
      setMenu(false)
      // Wait for drawer close animation (~300ms) BEFORE scrolling.
      // Without this delay, scrollIntoView fires while the drawer is
      // still open and the viewport offset calculation is wrong.
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 320)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  
  /* ─── Skill data — 3 columns: Frontend | Mobile | Languages | Backend | Hosting | Database ─── */
  const SKILLS = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5",        img: html },
        { name: "CSS3",         img: css },
        { name: "JavaScript",   img: javascript },
        { name: "TypeScript",   img: typescript },
        { name: "React.js",     img: react },
        { name: "Next.js",      img: nextjs },
        { name: "Tailwind CSS", img: tailwindcss },
        {name:"Material-UI",    img:materialUI},
        { name: "Redux", img: redux },
       // { name: "Styled-Component", img: styleComponent },
      ],
    },
   
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript",   img: javascript },
        { name: "C++",          img: cplusplus },
        { name: "Java",         img: java },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "PostgreSQL",   img: postgresql},
       // { name: "MongoDB",      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL",        img: mysql},
     //   { name: "MS-SQL",       img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
        { name: "Firebase",     img: firebase },
        { name: "Supabase",     img: supabase },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js",      img: nodejs },
        { name: "Express.js",   img: express },
        { name: "Spring Boot",  img: springboot },
      ],
    },
    {
      title: "Hosting Platforms",
      skills: [
        { name: "Vercel",       img: vercel },
        { name: "GitHub Pages", img:git },
      ],
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", img: gitIcon },
      ],
    },
    
  ]

  /* ─── Projects ─── */
  const PROJECTS = [
    {
      title: "Smart Bookmark App",
      emoji: "🔖",
      description: "Real-time private bookmark manager with Google OAuth, Supabase cross-tab Realtime sync, and Row-Level Security. Deployed live on Vercel.",
      tech: ["Next.js","Supabase","Tailwind","Google OAuth","Realtime","RLS"],
      github: "https://github.com/tanmaytoshniwal09/Smart-Bookmark-App",
      live: "https://tanmaytoshniwal09-smart-bookmark-app.vercel.app/",
      accent: "#00d4ff", badge: "Live ✓", date: "Feb 2025",
    },
    {
      title: "E-commerce Platform",
      emoji: "🛒",
      description: "Full-stack e-commerce with JWT authentication, REST APIs, shopping cart, wishlist, and Sequelize ORM on a PostgreSQL backend.",
      tech: ["React","Node.js","Express","PostgreSQL","Sequelize","JWT"],
      github: "https://github.com/tanmaytoshniwal09/ecom-app/tree/master",
      live: "#",
      accent: "#f59e0b", badge: "Featured", date: "2024",
    },
    {
      title: "Logistics SaaS",
      emoji: "🚚",
      description: "Scalable logistics platform with real-time tracking, role-based access, analytics dashboard, and Spring Boot microservices.",
      tech: ["React.js","Java","Spring Boot","PostgreSQL","JWT","REST APIs"],
      github: "#", live: "#",
      accent: "#a78bfa", badge: "SaaS", date: "2024",
    },
    {
      title: "RPA Automation Suite",
      emoji: "⚙️",
      description: "Automated business workflows using UiPath & Selenium, reducing manual effort by 30% and improving overall process efficiency.",
      tech: ["UiPath","Selenium","REST APIs","SQL","Automation"],
      github: "#", live: "#",
      accent: "#34d399", badge: "30% Efficiency", date: "2023",
    },
  ]

  /* ─── Experience ─── */
  const TIMELINE = [
    {
      date: "Jan 2023 – Present",
      title: "SDE I & RPA Developer",
      company: "Quanteon Solutions",
      color: "#00d4ff",
      type: "work",
      tech: ["React JS","Node.js","NestJS","PostgreSQL","MS-SQL","UiPath","Selenium"],
      pts: [
        "Engineered responsive React interfaces with modern UI/UX and cross-browser compatibility",
        "Integrated RESTful APIs and managed complex async state at production scale",
        "Built UiPath automation workflows reducing manual effort by 30%",
        "Developed scalable components with real-time updates and MVVM architecture",
        "Mentored junior developers through code reviews and smooth onboarding",
      ],
    },
    {
      date: "2020 – 2024",
      title: "BTech — Information Technology",
      company: "RGPV University",
      color: "#a78bfa",
      type: "edu",
      tech: ["DSA","OOP","DBMS","Algorithms"],
      pts: [
        "Strong CS fundamentals with focus on software engineering principles",
        "OOP, DSA & DBMS specialization with top academic performance",
        "Led college tech projects and participated in coding competitions",
      ],
    },
    {
      date: "2015",
      title: "UCMAS All India Merit Award",
      company: "National Level Recognition",
      color: "#f59e0b",
      type: "award",
      tech: [],
      pts: [
        "National level mental arithmetic excellence award",
        "Top performer across all India participants",
      ],
    },
  ]

  return (
    <>
      {/* Scroll progress */}
      <motion.div className="scroll-bar" style={{ scaleX }} />

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            className={`toast ${toast.t === "ok" ? "toast-ok" : "toast-err"}`}
          >
            {toast.t === "ok" ? "✓" : "✕"} {toast.m}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Particle background */}
      <NetworkBG />

   {/* ══ NAVBAR ══ */}
      <header className="portfolio-nav">
        <div className="nav-inner">
          
          {/* Logo */}
          <a href="#home" className="logo-wrapper">
            <Image
              src={TanmayLogo}
              alt="Tanmay Portfolio Logo"
              className="nav-logo-img"
              priority
            />
            <div className="logo-text">
              <div className="logo-name">Tanmay Toshniwal</div>
              <div  className="logo-role">SOFTWARE DEVELOPER</div>
            </div>
          </a>

          {/* Desktop links */}
          <nav className="nav-links">
          {NAV.map(n => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}   // keep href for right-click / accessibility
              className="nav-link"
              onClick={e => { e.preventDefault(); scrollTo(n.toLowerCase()) }}
            >
              {n}
            </a>
          ))}
          </nav>

          {/* Resume + Hamburger */}
          <div className="nav-actions">
            <a
              href="/Tanmay_Resume_SDE.pdf"
              download
              className="btn-cyan resume-btn"
            >
              <Download size={12} /> RESUME
            </a>

            <button
              className="menu-btn glass"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>

        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menu && (
            <motion.div
              className="nav-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="nav-drawer-inner">
              {NAV.map(n => (
                <a
                  key={n}
                  href={`#${n.toLowerCase()}`}
                  className="nav-link"
                  style={{ fontSize: 14 }}
                  onClick={e => { e.preventDefault(); scrollTo(n.toLowerCase(), true) }}
                >
                  {n}
                </a>
              ))}
                            </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>


      {/* ══ HERO ══ */}
      <section id="home" className="hero-section">
        <div className="hero-grid-overlay" />
        <div className="hero-inner">

          {/* Left column */}
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <span className="avail-badge">
                <span className="avail-dot" />
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </motion.div>

            <motion.h1 className="hero-title"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              Hi, I'm<br />
              <span className="text-shimmer">Tanmay</span>
            </motion.h1>

            <motion.p className="hero-sub"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
              Software Developer · Full-Stack Engineer
            </motion.p>

            <motion.p className="hero-desc"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
             Passionate about building scalable applications and developing innovative solutions. Currently crafting web interfaces and automation tools at {" "}
              <span style={{ color: "#00d4ff", fontWeight: 700 }}>Quanteon Solutions</span>{" "}
             with React, Node.js, and modern technologies.
            </motion.p>

            <motion.div className="hero-cta"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
              <button className="btn-cyan" style={{ padding: "12px 22px", fontSize: 13 }}
                onClick={() => { const a = document.createElement("a"); a.href = "/Tanmay_Resume_SDE.pdf"; a.download = "Tanmay_Toshniwal_Resume.pdf"; a.click() }}>
                <Download size={14} /> DOWNLOAD CV
              </button>
              <a href="#contact" className="btn-violet" style={{ padding: "12px 22px", fontSize: 13 }}>
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
                <motion.a key={h} href={h}
                  target={h.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="social-btn">
                  <I size={15} color="rgba(255,255,255,0.7)" />
                </motion.a>
              ))}
              <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.35)", display: "flex", alignItems: "center", gap: 4 }}>
                <MapPin size={10} /> Hyderabad, India
              </span>
            </motion.div>
          </div>

          {/* Right column — profile */}
          <motion.div className="profile-wrap"
            initial={{ opacity: 0, scale: 0.9, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div className="animate-float" style={{ position: "relative" }}>
              <div className="profile-glow" />
              <div className="profile-img-box">
                <Image src="/tanmay-profile-pic.jpeg" alt="Tanmay Toshniwal" fill style={{ objectFit: "cover", objectPosition: "top" }} />
                <div className="profile-img-gradient" />
              </div>
              {/* Stat chips */}
              <motion.div className="stat-chip animate-float2"
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
                style={{ left: -82, top: 36, border: "1px solid rgba(0,212,255,0.3)" }}>
                <div className="stat-chip-val" style={{ color: "#00d4ff" }}>2+</div>
                <div className="stat-chip-lbl">Yrs Exp</div>
              </motion.div>
              <motion.div className="stat-chip animate-float"
                initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }}
                style={{ right: -50, bottom: -80,border: "1px solid rgba(124,58,237,0.35)" }}>
                <div className="stat-chip-val" style={{ color: "#a78bfa" }}>447</div>
                <div className="stat-chip-lbl">LeetCode ✓</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
          <div className="scroll-hint">
            SCROLL TO EXPLORE
            <ChevronDown size={18} className="animate-bounce" />
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" className="sec-dark relative z-10 py-24 px-6 scroll-mt-16">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionTitle>ABOUT ME</SectionTitle>
          <div className="about-grid">
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>
              Passionate Junior Software Engineer with a strong foundation in software development, automation, and full-stack engineering. Skilled at translating business requirements into scalable, reliable technical solutions and continuously evolving to meet project demands in dynamic environments.
                <br/>
                <br/>
                Currently working as a Software Development Engineer I at {" "}
                <span style={{ color: "#00d4ff", fontWeight: 700 }}>Quanteon Solutions</span>, where I develop responsive web interfaces using React.js and build scalable applications. I also have experience in RPA automation as an additional capability, helping streamline business processes.
              </p>
              {/* <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.45)" }}>
                Outside of code — travel enthusiast, painter, adventure sports fan. Diverse experiences make better engineers and better problem solvers.
              </p> */}
              <div className="about-facts">
                {[
                  { I: MapPin,   t: "Hyderabad, India",       c: "#00d4ff" },
                  { I: Briefcase,t: "Open to opportunities",  c: "#34d399" },
                  { I: Award,    t: "UCMAS Merit Winner",     c: "#f59e0b" },
                  { I: Globe,    t: "Travel & Art Enthusiast",c: "#a78bfa" },
                ].map(({ I, t, c }) => (
                  <div key={t} className="about-fact-item">
                    <I size={13} color={c} /> {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass stat-card">
              <div className="stat-card-label">{"{ STATS }"}</div>
              {[
                { k: "Experience",        v: "2+",    c: "#00d4ff" },
                { k: "Projects Shipped",  v: "4+",    c: "#a78bfa" },
                { k: "Efficiency Gain",   v: "30%",   c: "#34d399" },
                { k: "LeetCode Solved",   v: "447",   c: "#f59e0b" },
                { k: "Global LC Rank",    v: "183K+", c: "#f472b6" },
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

      {/* ══ SKILLS ══ */}
      <section id="skills" className="skills-section scroll-mt-16">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle>TECH SKILLS</SectionTitle>
          {/* 3-column white-card grid matching reference screenshot */}
          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.55 }}>
                <SkillCard title={s.title} skills={s.skills} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EXPERIENCE ══ */}
      <section id="experience" className="exp-section sec-gradr scroll-mt-16">
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <SectionTitle>EXPERIENCE</SectionTitle>
          <div className="exp-timeline">
            {TIMELINE.map((item, i) => (
              <motion.div key={i} className="exp-row"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}>

                {/* Icon */}
                <div className="exp-icon"
                  style={{ background: `${item.color}1a`, border: `1px solid ${item.color}44` }}>
                  {item.type === "work"  && <Briefcase    size={14} color={item.color} />}
                  {item.type === "edu"   && <GraduationCap size={14} color={item.color} />}
                  {item.type === "award" && <Award         size={14} color={item.color} />}
                </div>

                {/* Connector line */}
                {i < TIMELINE.length - 1 && (
                  <div className="exp-line" style={{ background: `linear-gradient(to bottom,${item.color}44,transparent)` }} />
                )}

                <div className="exp-card"
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${item.color}44`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.13)")}>
                  <div className="exp-header">
                    <div>
                      <div className="exp-company" style={{ color: item.color }}>{item.company}</div>
                      <h3 className="exp-role">{item.title}</h3>
                    </div>
                    <span className="exp-date"
                      style={{ background: `${item.color}14`, border: `1px solid ${item.color}35`, color: item.color }}>
                      {item.date}
                    </span>
                  </div>
                  {item.tech.length > 0 && (
                    <div className="exp-tags">
                      {item.tech.map(t => <span key={t} className="exp-tag">{t}</span>)}
                    </div>
                  )}
                  <ul className="exp-pts">
                    {item.pts.map((p, j) => (
                      <li key={j} className="exp-pt">
                        <TrendingUp size={11} color={item.color} style={{ marginTop: 3, flexShrink: 0 }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROJECTS — Alternating left/right timeline ══ */}
      <section id="projects" className="projects-section scroll-mt-16">
        <div className="projects-section-inner">
          <SectionTitle>PROJECTS</SectionTitle>

          <div className="proj-timeline">
            {PROJECTS.map((p, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div key={i} className="proj-row"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}>

                  {/* Column A: card on even rows, empty on odd */}
                  {isLeft
                    ? <div className="proj-col-left"><ProjectCard p={p} /></div>
                    : <div className="proj-col-empty" />
                  }

                  {/* Center: dot + date */}
                  <div className="proj-col-center">
                    <div className="proj-dot" style={{ borderColor: p.accent, boxShadow: `0 0 16px ${p.accent}88` }}>
                      <div className="proj-dot-inner" style={{ background: p.accent }} />
                    </div>
                    <span className="proj-date">{p.date}</span>
                  </div>

                  {/* Column B: empty on even rows, card on odd */}
                  {!isLeft
                    ? <div className="proj-col-right"><ProjectCard p={p} /></div>
                    : <div className="proj-col-empty" />
                  }
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ LEETCODE ══ */}
      <section id="leetcode" className="lc-section sec-grad scroll-mt-16">
        <div className="lc-card">
          <div className="lc-icon">🧠</div>
          <div className="lc-info">
            <div className="lc-label">CODING PRACTICE</div>
            <h3 className="lc-title font-display">LeetCode Profile</h3>
            <p className="lc-subtitle">Daily practice sharpening algorithmic thinking and problem-solving</p>
            <div className="lc-stats">
              {[
                { l: "Total",       v: "447",   c: "#f59e0b" },
                { l: "Easy",        v: "258",   c: "#4ade80" },
                { l: "Medium",      v: "182",   c: "#fbbf24" },
                { l: "Hard",        v: "9",     c: "#f87171" },
                { l: "Global Rank", v: "183K+", c: "#a78bfa" },
              ].map(({ l, v, c }) => (
                <div key={l}>
                  <div className="lc-stat-val font-display" style={{ color: c }}>{v}</div>
                  <div className="lc-stat-lbl">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <a href="https://leetcode.com/u/tanmaytoshniwal8/" target="_blank" rel="noopener noreferrer" className="lc-btn">
            <ExternalLink size={13} /> VIEW PROFILE
          </a>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="contact-section sec-mid scroll-mt-16">
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SectionTitle>GET IN TOUCH</SectionTitle>
          <div className="contact-grid">

            {/* Info card */}
            <motion.div className="glass contact-card"
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="contact-section-label" style={{ color: "#00d4ff" }}>CONTACT INFO</div>
              {[
                { I: Mail,     label: "Email",    val: "tanmaytoshniwal09@gmail.com",             href: "mailto:tanmaytoshniwal09@gmail.com",                           c: "#00d4ff" },
                { I: Phone,    label: "Phone",    val: "+91 8827203876",                          href: "tel:+918827203876",                                            c: "#34d399" },
                { I: Linkedin, label: "LinkedIn", val: "tanmaytoshniwal",                         href: "https://www.linkedin.com/in/tanmay-toshniwal-450951204",       c: "#60a5fa" },
                { I: Github,   label: "GitHub",   val: "tanmaytoshniwal09",                       href: "https://github.com/tanmaytoshniwal09",                         c: "#a78bfa" },
              ].map(({ I, label, val, href, c }) => (
                <a key={label} href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="contact-item">
                  <div className="contact-icon" style={{ background: `${c}14`, border: `1px solid ${c}33` }}>
                    <I size={14} color={c} />
                  </div>
                  <div>
                    <div className="contact-item-lbl">{label}</div>
                    <div className="contact-item-val">{val}</div>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div className="glass contact-card"
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="contact-section-label" style={{ color: "#a78bfa" }}>SEND A MESSAGE</div>
              <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div className="form-row">
                  <div>
                    <label className="form-label">FIRST NAME</label>
                    <input className="form-input" placeholder="John" value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} required />
                  </div>
                  <div>
                    <label className="form-label">LAST NAME</label>
                    <input className="form-input" placeholder="Doe" value={form.lastName} onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} required />
                  </div>
                </div>
                <div>
                  <label className="form-label">EMAIL</label>
                  <input className="form-input" type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
                </div>
                <div>
                  <label className="form-label">MESSAGE</label>
                  <textarea className="form-input" style={{ resize: "none" }} placeholder="Tell me about your project..." rows={4} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required />
                </div>
                <button type="submit" className="form-submit" disabled={sub}>
                  <Send size={13} /> {sub ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="portfolio-footer">
        <div className="footer-inner">
          <div className="footer-logo">
          <Image
              src={TanmayLogo}
              alt="Tanmay Portfolio Logo"
              className="nav-logo-img"
              priority
            />
            <div>
              <div className="footer-logo-name">Tanmay Toshniwal</div>
              <div className="footer-logo-role">SOFTWARE DEVELOPER</div>
            </div>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} Tanmay Toshniwal · Built with Next.js &amp; Framer Motion
          </p>
          <div className="footer-links">
            {[
              { I: Github,   h: "https://github.com/tanmaytoshniwal09" },
              { I: Linkedin, h: "https://www.linkedin.com/in/tanmay-toshniwal-450951204" },
              { I: Mail,     h: "mailto:tanmaytoshniwal09@gmail.com" },
            ].map(({ I, h }, i) => (
              <motion.a key={i} href={h}
                target={h.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="footer-link"
                whileHover={{ y: -3, scale: 1.1 }}>
                <I size={13} color="rgba(255,255,255,0.5)" />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}