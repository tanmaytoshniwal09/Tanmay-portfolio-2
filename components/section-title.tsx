export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="sec-title">{children}</h2>
      <div className="sec-bar" />
    </div>
  )
}
