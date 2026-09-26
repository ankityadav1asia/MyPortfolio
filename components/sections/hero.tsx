import { ArrowRight, ArrowUpRight, GitHub } from "@/components/icons"
import { corpus, profile } from "@/lib/data"

const trace = [
  { op: "plan", text: "3 rewrites · step-back · HyDE" },
  { op: "retrieve", text: "26 passages · vector + full-text" },
  { op: "rerank", text: "top 8 · listwise 0–10" },
  { op: "guard", text: "context relevant", ok: true },
  { op: "answer", text: "Starter rose from $19 to $24 [1]…" },
  { op: "judge", text: "faithfulness 97% · relevance 93%" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="dot-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <a
            href="#corpus"
            className="rise group inline-flex items-center gap-2 rounded-full border border-border bg-card/70 py-1 pr-3 pl-1 text-sm text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
          >
            <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent">New</span>
            Corpus is live: team RAG workspaces
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>

          <h1 className="rise mt-8 font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl [animation-delay:80ms]">
            Ankit Yadav<span className="text-accent">.</span>
          </h1>

          <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl [animation-delay:160ms]">
            {profile.role} building AI systems that are{" "}
            <em className="font-serif text-2xl text-foreground not-italic sm:text-[1.6rem]">grounded, measurable</em> and{" "}
            <em className="font-serif text-2xl text-foreground not-italic sm:text-[1.6rem]">production-ready</em>: retrieval
            pipelines, LLM evaluation, and the backends and job queues that keep them running.
          </p>

          <div className="rise mt-10 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
            <a
              href="#corpus"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              See the case study <ArrowRight className="size-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition-colors hover:border-foreground/40"
            >
              <GitHub className="size-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition-colors hover:border-foreground/40"
            >
              LinkedIn <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground [animation-delay:320ms]">
            <span className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Available for opportunities
            </span>
            <span>{profile.location} · Remote-friendly</span>
          </div>
        </div>

        <div className="rise lg:col-span-5 lg:pt-16 [animation-delay:200ms]">
          <figure className="rounded-xl border border-border bg-card shadow-[0_30px_80px_-40px_rgb(0_0_0/0.5)]">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex gap-1.5" aria-hidden>
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-border" />
              </div>
              <span className="font-mono text-[11px] text-muted-foreground">corpus · answer trace</span>
            </div>
            <div className="space-y-4 p-5 font-mono text-[13px] leading-relaxed">
              <p className="text-foreground">
                <span className="text-accent">?</span> How did the Q3 pricing change affect churn?
              </p>
              <ol className="space-y-2">
                {trace.map((row) => (
                  <li key={row.op} className="grid grid-cols-[5.5rem_1fr] gap-2">
                    <span className="text-muted-foreground">{row.op}</span>
                    <span className={row.ok ? "text-emerald-600 dark:text-emerald-400" : "text-foreground/90"}>
                      {row.ok && "✓ "}
                      {row.text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <figcaption className="border-t border-border px-5 py-3 text-xs text-muted-foreground">
              What one question looks like inside{" "}
              <a href={corpus.liveUrl} target="_blank" rel="noopener noreferrer" className="text-foreground underline decoration-accent underline-offset-4">
                Corpus
              </a>
              . Demo data.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
