import { Card, CardContent } from "../../components/ui/card";
import { SkillsList } from "@/utils/constants/SkillsList";
import Link from "next/link";

// Custom Skills Page component
export default async function SkillsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-4 sm:py-8 flex-grow space-y-6 sm:space-y-12">
        <Card className="glass-card">
          <CardContent className="p-4 sm:p-6 space-y-4 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter text-primary text-glow">
              Life as a Developer
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              As a developer, you have to be willing to immerse yourself in technology.
              The following sections summarize my key skills in the field of Software Engineering.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-4 sm:p-6 space-y-4 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter text-primary text-glow">
                Web/Software Development
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                Over the years working as a web developer, I was able to explore both front-end and back-end paradigms. I believe developers should be versatile in all areas of development.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                As a Full-Stack developer, I can design and develop dynamic, secure, and user-friendly websites.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                I am <b><i><u><Link href="https://www.credly.com/badges/ea32a77f-e17f-4750-b1b7-b62d3388deb2" target="_blank" rel="noreferrer" className="text-green-500 break-all">AWS certified.</Link></u></i></b> I love working with the various services AWS has to offer. With the advent of AI, I plan on upskilling in the field of AI x Cloud. Recently, I completed the Azure Administrator exam <b><i><u><Link href="https://www.credly.com/badges/6b4fb749-f168-448f-a3f3-16104c630493" target="_blank" rel="noreferrer" className="text-green-500 break-all">Microsoft Azure certified.</Link></u></i></b>
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                I have dabbled my feet into Web3 development and learned a lot about bridging the gap between traditional Web2 paradigms and how, by harnessing the power of the blockchain, we can build decentralized solutions.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {SkillsList.languages.toSorted((a, b) => a.localeCompare(b)).map((language) => (
                    <span key={language} className="px-3 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 text-sm font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-200 cursor-default">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary mb-3">Full Stack Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {SkillsList.fullStackTechnologies.toSorted((a, b) => a.localeCompare(b)).map((tech) => (
                    <span key={tech} className="px-3 py-2 bg-secondary/20 text-foreground rounded-lg border border-secondary/30 text-sm font-medium hover:bg-secondary/30 hover:scale-105 transition-all duration-200 cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary mb-3">Development Tools & IDEs</h3>
                <div className="flex flex-wrap gap-2">
                  {SkillsList.devTools.toSorted((a, b) => a.localeCompare(b)).map((tools) => (
                    <span key={tools} className="px-3 py-2 bg-accent/20 text-foreground rounded-lg border border-accent/30 text-sm font-medium hover:bg-accent/30 hover:scale-105 transition-all duration-200 cursor-default">
                      {tools}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary mb-3">Testing & Deployment</h3>
                <div className="flex flex-wrap gap-2">
                  {SkillsList.testing.toSorted((a, b) => a.localeCompare(b)).map((testingTool) => (
                    <span key={testingTool} className="px-3 py-2 bg-muted/50 text-foreground rounded-lg border border-muted text-sm font-medium hover:bg-muted/70 hover:scale-105 transition-all duration-200 cursor-default">
                      {testingTool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary mb-3">Web3 Development</h3>
                <div className="flex flex-wrap gap-2">
                  {SkillsList.webThreeDev.toSorted((a, b) => a.localeCompare(b)).map((webThreeDevTool) => (
                    <span key={webThreeDevTool} className="px-3 py-2 bg-primary/15 text-primary rounded-lg border border-primary/25 text-sm font-medium hover:bg-primary/25 hover:scale-105 transition-all duration-200 cursor-default">
                      {webThreeDevTool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-4 sm:p-6 space-y-4 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter text-primary text-glow">
              Additional Programming Languages
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              Other than web development (which is a big part of my skillset), I am competent with other programming languages:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 text-sm sm:text-base space-y-1 text-left">
              <li>Bash/CLI/Powershell Scripting</li>
              <li>Terraform</li>
            </ul>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              Java was the first language I learned in high school. Intrigued by the idea of programming, I decided to pursue my studies in Software Engineering.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}