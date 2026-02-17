"use client"

import { ExternalLink } from "lucide-react"

export function LeetcodeSection() {
  return (
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
  )
}
