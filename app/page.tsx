import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/sections/hero"
import { CorpusCaseStudy } from "@/components/sections/corpus"
import { Contact, Education, Footer, Projects, Stack } from "@/components/sections/more"

export default function Home() {
  return (
    <>
      <a
        href="#corpus"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <SiteNav />
      <main className="overflow-x-clip">
        <Hero />
        <CorpusCaseStudy />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
