import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { SkillGroups, Certifications } from "@/utils/constants/SkillsList";
import { RESUME_URL } from "@/utils/constants/Profile";
import { Award, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

// Skills page metadata
export const metadata: Metadata = {
  title: "Skills - Abdullah Muhammad",
  description: "Abdullah Muhammad's technical skills and certifications: full-stack development, AWS, Azure, Terraform, DevOps, test automation, and Web3.",
  keywords: ["Abdullah Muhammad", "Skills", "Full Stack Developer", "Cloud", "DevOps", "Web3", "QA-Testing", "AWS", "Azure", "React", "Node.js", "Next.js", "Docker", "Jenkins", "Terraform", "Toronto"],
  openGraph: {
    title: "Skills - Abdullah Muhammad",
    description: "Abdullah Muhammad's technical skills and certifications: full-stack development, AWS, Azure, Terraform, DevOps, test automation, and Web3.",
    type: "website"
  }
};

// Custom Skills Page component
export default async function SkillsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-4 sm:py-8 flex-grow space-y-6 sm:space-y-12">
        <Card className="glass-card">
          <CardContent className="p-4 sm:p-6 space-y-4 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter text-primary text-glow">
              Skills
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              Full-stack engineer working across web applications, cloud infrastructure, CI/CD, and test automation, with hands-on Web3 experience.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glass-button" asChild>
                <Link href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  View Resume
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-4 sm:p-6 space-y-6">
            {SkillGroups.map((group) => (
              <section key={group.title}>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary mb-3">{group.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="px-3 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 text-sm font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-200 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-4 sm:p-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-primary text-glow text-center sm:text-left">
              Certifications
            </h2>
            <ul className="space-y-3">
              {Certifications.map((cert) => (
                <li key={cert.name} className="flex items-center gap-3 text-sm sm:text-base">
                  <Award className="h-5 w-5 shrink-0 text-primary" />
                  {cert.url ? (
                    <Link href={cert.url} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary underline underline-offset-4 inline-flex items-center gap-1">
                      {cert.name}
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  ) : (
                    <span className="text-foreground">{cert.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
