import Image from "next/image"
import { ArrowUpRight, GitHub } from "@/components/icons"
import { SectionHeading } from "@/components/section-heading"
import { corpus } from "@/lib/data"

export function CorpusCaseStudy() {
  return (
    <section id="corpus" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="01"
          label="Featured build"
          title={
            <>
              Corpus<span className="text-accent">.</span>{" "}
              <span className="text-muted-foreground italic">Ask your documents. Get cited answers.</span>
            </>
          }
        >
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{corpus.summary}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={corpus.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Open live app <ArrowUpRight className="size-4" />
            </a>
            <a
              href={corpus.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-foreground/40"
            >
              <GitHub className="size-4" /> Source
            </a>
            <a
              href={corpus.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-foreground/40"
            >
              Architecture notes <ArrowUpRight className="size-4" />
            </a>
          </div>
        </SectionHeading>

        {/* Product shot */}
        <figure className="reveal overflow-hidden rounded-xl border border-border bg-card shadow-[0_40px_120px_-50px_rgb(0_0_0/0.55)]">
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <div className="flex gap-1.5" aria-hidden>
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-border" />
            </div>
            <div className="mx-auto max-w-xs flex-1 truncate rounded-md bg-muted px-3 py-1 text-center font-mono text-[11px] text-muted-foreground">
              corpusragagent.vercel.app
            </div>
            <span className="w-10" aria-hidden />
          </div>
          <div className="relative aspect-[1440/900] overflow-hidden">
            <Image
              src="/corpus/chat-light.webp"
              alt="Corpus answering a question with numbered citations, an inline chart, quality scores and follow-up questions"
              width={1440}
              height={1400}
              priority={false}
              className="block w-full dark:hidden"
            />
            <Image
              src="/corpus/chat-dark.webp"
              alt="Corpus answering a question with numbered citations, an inline chart, quality scores and follow-up questions"
              width={1440}
              height={1400}
              className="hidden w-full dark:block"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
          </div>
        </figure>

        {/* Stats */}
        <dl className="reveal mt-6 grid grid-cols-2 overflow-hidden rounded-xl border border-border lg:grid-cols-4">
          {corpus.stats.map((s, i) => (
            <div
              key={s.label}
              className={[
                "space-y-1 p-6",
                i % 2 === 1 ? "border-l border-border" : "",
                i >= 2 ? "border-t border-border lg:border-t-0" : "",
                i === 2 ? "lg:border-l" : "",
              ].join(" ")}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-5xl leading-none tracking-tight">{s.value}</dd>
              <dd className="text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>

        {/* Pipeline */}
        <div className="reveal mt-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-serif text-3xl tracking-tight sm:text-4xl">How an answer gets made</h3>
            <p className="max-w-md text-sm text-muted-foreground">
              Every step streams to the browser as it runs, so people see the research, not a spinner.
            </p>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-7">
            {corpus.pipeline.map((p, i) => (
              <li key={p.step} className={`flex flex-col gap-3 p-5 ${p.output ? "bg-accent-soft" : "bg-card"}`}>
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-base font-medium">{p.step}</span>
                <span className="text-sm leading-relaxed text-muted-foreground">{p.detail}</span>
                {p.output && (
                  <code className="mt-auto rounded-md border border-border bg-background px-2 py-1.5 font-mono text-[11px] leading-snug">
                    “{p.output}”
                  </code>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Highlights */}
        <div className="mt-24 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {corpus.highlights.map((h, i) => (
            <div key={h.title} className="reveal space-y-3 border-t border-border pt-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="text-lg font-medium">{h.title}</h4>
              </div>
              <p className="leading-relaxed text-muted-foreground">{h.body}</p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2">
          {corpus.gallery.map((g) => (
            <a
              key={g.src}
              href={g.src}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group block overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <Image
                  src={g.src}
                  alt={g.caption}
                  width={g.w}
                  height={g.h}
                  loading="lazy"
                  className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <p className="flex items-center justify-between gap-4 border-t border-border px-5 py-4 text-sm text-muted-foreground">
                {g.caption}
                <ArrowUpRight className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
              </p>
            </a>
          ))}
        </div>

        <ul className="reveal mt-12 flex flex-wrap gap-2" aria-label="Corpus tech stack">
          {corpus.tech.map((t) => (
            <li key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
