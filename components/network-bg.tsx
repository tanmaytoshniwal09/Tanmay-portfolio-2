"use client"

import { useEffect, useRef } from "react"

export function NetworkBG() {
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
