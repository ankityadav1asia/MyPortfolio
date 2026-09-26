import { ArrowUpRight, GitHub } from "@/components/icons"
import { SectionHeading } from "@/components/section-heading"
import { education, profile, projects, skills, socials } from "@/lib/data"

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="02" label="More work" title="Earlier projects" />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/30 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-3xl tracking-tight">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.subtitle}</p>
                </div>
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={`${p.title} on GitHub`}
                >
                  <GitHub className="size-3.5" /> Code
                </a>
              </div>
              <ul className="mt-6 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" aria-hidden />
                    {pt}
                  </li>
                ))}
              </ul>
              <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-full bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Stack() {
  return (
    <section id="stack" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="03" label="Toolbox" title="What I build with" />
        <dl className="divide-y divide-border border-y border-border">
          {skills.map((s) => (
            <div key={s.group} className="reveal grid gap-4 py-6 sm:grid-cols-12">
              <dt className="kicker sm:col-span-3 sm:pt-1.5">{s.group}</dt>
              <dd className="flex flex-wrap gap-2 sm:col-span-9">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3.5 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section id="education" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="04" label="Education" title="University of Mumbai" />
        <ol className="space-y-6">
          {education.map((e) => (
            <li key={e.degree} className="reveal grid gap-4 rounded-xl border border-border p-6 sm:grid-cols-12 sm:p-8">
              <div className="sm:col-span-3">
                <div className="font-mono text-sm">{e.period}</div>
                <div className="mt-1 text-sm text-accent">{e.note}</div>
              </div>
              <div className="space-y-2 sm:col-span-9">
                <h3 className="text-xl font-medium">{e.degree}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="text-foreground/80">Coursework:</span> {e.coursework}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal kicker mb-8">
          <span className="text-accent">05</span> / Contact
        </div>
        <h2 className="reveal font-serif text-5xl leading-[1] tracking-tight text-balance sm:text-7xl lg:text-8xl">
          Let&apos;s build something <span className="italic text-accent">grounded.</span>
        </h2>
        <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Open to backend, ML and full-stack roles. I like hard retrieval problems, reliable background work and products people
          can trust.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="reveal group mt-10 inline-flex items-center gap-3 border-b border-foreground/30 pb-1 text-xl transition-colors hover:border-accent hover:text-accent sm:text-2xl"
        >
          {profile.email}
          <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <ul className="reveal mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-center justify-between gap-4 bg-card p-5 transition-colors hover:bg-muted"
              >
                <span>
                  <span className="block">{s.name}</span>
                  <span className="block text-sm text-muted-foreground">{s.handle}</span>
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-accent" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-10 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Next.js · TypeScript · Tailwind CSS · Vercel</span>
      </div>
    </footer>
  )
}
