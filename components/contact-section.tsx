"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react"
import { SectionTitle } from "./section-title"

interface ContactSectionProps {
  form: { firstName: string; lastName: string; email: string; message: string }
  setForm: React.Dispatch<React.SetStateAction<{ firstName: string; lastName: string; email: string; message: string }>>
  onSubmit: (e: React.FormEvent) => void
  sub: boolean
}

export function ContactSection({ form, setForm, onSubmit, sub }: ContactSectionProps) {
  return (
    <section id="contact" className="contact-section sec-mid scroll-mt-16">
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <SectionTitle>GET IN TOUCH</SectionTitle>
        <div className="contact-grid">
          <motion.div className="glass contact-card"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="contact-section-label" style={{ color: "#00d4ff" }}>CONTACT INFO</div>
            {[
              { I: Mail,     label: "Email",    val: "tanmaytoshniwal09@gmail.com", href: "mailto:tanmaytoshniwal09@gmail.com",                     c: "#00d4ff" },
              { I: Phone,    label: "Phone",    val: "+91 8827203876",               href: "tel:+918827203876",                                      c: "#34d399" },
              { I: Linkedin, label: "LinkedIn", val: "tanmaytoshniwal",              href: "https://www.linkedin.com/in/tanmay-toshniwal-450951204", c: "#60a5fa" },
              { I: Github,   label: "GitHub",   val: "tanmaytoshniwal09",            href: "https://github.com/tanmaytoshniwal09",                   c: "#a78bfa" },
            ].map(({ I, label, val, href, c }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer" className="contact-item">
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
  )
}
