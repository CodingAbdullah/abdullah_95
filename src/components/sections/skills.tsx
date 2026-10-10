import Link from "next/link"
import { Award, ExternalLink } from "lucide-react"
import Section from "./section"
import { Certifications, SkillGroups } from "@/utils/constants/SkillsList"

// Grouped technical skills and certifications
export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 lg:grid-cols-[1fr,280px]">
        <div className="space-y-6">
          {SkillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="px-3 py-1.5 bg-primary/10 text-primary rounded-md border border-primary/20 text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <aside className="glass-card rounded-lg p-5 h-fit">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Certifications</h3>
          <ul className="space-y-3">
            {Certifications.map((cert) => (
              <li key={cert.name} className="flex items-start gap-3 text-sm">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {cert.url ? (
                  <Link href={cert.url} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary underline underline-offset-4">
                    {cert.name}
                    <ExternalLink className="ml-1 inline h-3 w-3" aria-hidden="true" />
                  </Link>
                ) : (
                  <span className="text-foreground">{cert.name}</span>
                )}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}
