export function SectionHeading({
  index,
  label,
  title,
  children,
}: {
  index: string
  label: string
  title: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <div className="reveal mb-12 grid gap-6 sm:mb-16 lg:grid-cols-12">
      <div className="kicker lg:col-span-3 lg:pt-4">
        <span className="text-accent">{index}</span> / {label}
      </div>
      <div className="space-y-5 lg:col-span-9">
        <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">{title}</h2>
        {children}
      </div>
    </div>
  )
}
