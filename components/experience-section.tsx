"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"
import Image from "next/image"
import { SectionTitle } from "./section-title"
import { TIMELINE } from "../data/timeline-data"

export function ExperienceSection() {

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.03, 1.03, 1.03)
    `
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `
  }

  return (
    <section id="experience" className="exp-section sec-gradr scroll-mt-16">
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <SectionTitle>EXPERIENCE</SectionTitle>

        <div className="exp-timeline">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              {item.type === "work" ? (
                <div
                  className="tilt-card"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className="tilt-card-accent"
                    style={{ background: item.color }}
                  />

                  <div className="tilt-card-logo-banner">
                    {item.logo ? (
                      <>
                        <Image
                          src={item.logo}
                          alt={item.company}
                          width={180}
                          height={46}
                          style={{ objectFit: "contain" }}
                          onError={(e) => {
                            e.currentTarget.style.display = "none"
                            const fb =
                              e.currentTarget.nextElementSibling as HTMLElement
                            if (fb) fb.style.display = "block"
                          }}
                        />
                        <span
                          className="tilt-card-logo-text"
                          style={{ display: "none" }}
                        >
                          {item.company}
                        </span>
                      </>
                    ) : (
                      <span className="tilt-card-logo-text">
                        {item.company}
                      </span>
                    )}
                  </div>

                  <div className="tilt-card-body">
                    <div className="tilt-card-role-block">
                      <h3 className="tilt-card-role">{item.title}</h3>
                      {item.subRole && (
                        <div className="tilt-card-sub-role">
                          {item.subRole}
                        </div>
                      )}

                      <div className="tilt-card-tech-line">
                        <strong>Technology:</strong>{" "}
                        {item.tech.join(", ")}
                      </div>

                      <div className="tilt-card-duration">
                        <strong>Duration:</strong> {item.date}
                      </div>
                    </div>

                    <hr className="tilt-card-divider" />
                    <div className="tilt-card-desc-label">Description</div>

                    <ul className="tilt-card-pts">
                      {item.pts.map((p, j) => (
                        <li key={j} className="tilt-card-pt">
                          <span className="tilt-card-bullet" />
                          <span>
                            <strong>{p.bold}</strong>
                            {p.rest}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {item.tech.length > 0 && (
                      <div className="tilt-card-tags">
                        {item.tech.map((t) => (
                          <span key={t} className="tilt-card-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="exp-card-alt"
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.borderColor = `${item.color}44`
                    el.style.boxShadow = `0 0 32px ${item.color}18`
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.borderColor = "rgba(255,255,255,0.13)"
                    el.style.boxShadow = "none"
                  }}
                >
                  <div className="exp-card-alt-header">
                    <div>
                      <div
                        className="exp-card-alt-company"
                        style={{ color: item.color }}
                      >
                        {item.company}
                      </div>
                      <h3 className="exp-card-alt-role">
                        {item.title}
                      </h3>
                    </div>

                    <span
                      className="exp-card-alt-date"
                      style={{
                        background: `${item.color}14`,
                        border: `1px solid ${item.color}35`,
                        color: item.color,
                      }}
                    >
                      {item.date}
                    </span>
                  </div>

                  {item.tech.length > 0 && (
                    <div className="exp-card-alt-tags">
                      {item.tech.map((t) => (
                        <span key={t} className="exp-card-alt-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="exp-card-alt-pts">
                    {item.pts.map((p, j) => (
                      <li key={j} className="exp-card-alt-pt">
                        <TrendingUp
                          size={11}
                          color={item.color}
                          style={{ marginTop: 3, flexShrink: 0 }}
                        />
                        <span>
                          <strong
                            style={{
                              color: "#fff",
                              fontWeight: 700,
                            }}
                          >
                            {p.bold}
                          </strong>
                          {p.rest}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
