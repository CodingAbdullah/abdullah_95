import { GraduationCap } from "lucide-react"
import Section from "./section"
import { EDUCATION } from "@/utils/constants/Profile"

// Degree and relevant coursework
export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="glass-card rounded-lg p-6 max-w-3xl">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div className="flex items-start gap-3">
            <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-semibold text-foreground">{EDUCATION.school}</h3>
              <p className="text-primary">{EDUCATION.degree}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground sm:text-right">
            {EDUCATION.years}
            <br />
            {EDUCATION.location}
          </p>
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {EDUCATION.coursework.map((course) => (
            <li key={course} className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md border border-border">
              {course}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
