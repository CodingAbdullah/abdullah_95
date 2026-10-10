import Section from "./section"
import { Certifications } from "@/utils/constants/SkillsList"

// Technical summary and headline numbers
export default function About() {
  const stats = [
    { value: `${Certifications.length}`, label: "Certifications" },
    { value: "50+", label: "Technical articles" }
  ]

  return (
    <Section id="about" title="About">
      <div className="space-y-4 text-lg leading-relaxed text-muted-foreground max-w-3xl">
        <p>
          I build and deploy full-stack applications and the infrastructure behind them: AWS and Azure, Docker,
          Jenkins pipelines, and Terraform, with a focus on automation, reliability, and performance.
        </p>
        <p>
          My core stack is TypeScript, Next.js, React, Node.js, and Express.js. I use AI-assisted tooling
          (Claude, Cursor) day to day, and I write test automation with Selenium WebDriver, Cucumber, and JUnit.
        </p>
        <p>
          On the Web3 side, I build Ethereum dashboards that integrate on-chain data across mainnet and L2s,
          and work with Solidity smart contracts.
        </p>
      </div>
      <dl className="mt-8 grid grid-cols-2 gap-4 max-w-md">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card rounded-lg p-3 sm:p-4 flex flex-col-reverse justify-end text-center sm:text-left">
            <dt className="text-xs sm:text-sm leading-snug text-muted-foreground">{stat.label}</dt>
            <dd className="font-mono text-2xl sm:text-3xl font-bold text-primary">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
