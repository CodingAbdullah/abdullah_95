import Link from "next/link"
import { ExternalLink, Github, Globe, Lock } from "lucide-react"
import Section from "./section"
import { projects } from "@/utils/constants/PortfolioProjectList"
import { LINKS } from "@/utils/constants/Profile"

// Project cards, newest first as listed in PortfolioProjectList
export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="glass-card rounded-lg p-6 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
            <p className="leading-relaxed text-muted-foreground flex-grow">{project.description}</p>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li key={tech} className="px-2 py-1 font-mono text-xs bg-primary/10 text-primary rounded-md border border-primary/20">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 pt-1 font-mono text-sm">
              {project.demo && (
                <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-foreground hover:text-primary">
                  <Globe className="h-4 w-4" aria-hidden="true" />
                  Live
                </Link>
              )}
              {project.github ? (
                <Link href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-foreground hover:text-primary">
                  <Github className="h-4 w-4" aria-hidden="true" />
                  Source
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <Lock className="h-4 w-4" aria-hidden="true" />
                  Private repo
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        I also write about cloud, DevOps, testing, AI, and Web3:{" "}
        <Link href={LINKS.medium} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
          50+ articles on Medium
          <ExternalLink className="ml-1 inline h-3 w-3" aria-hidden="true" />
        </Link>
      </p>
    </Section>
  )
}
