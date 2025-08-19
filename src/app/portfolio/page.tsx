import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { ExternalLink, Github, Globe } from "lucide-react";
import { projects } from "../../utils/constants/PortfolioProjectList";

// Custom Portfolio page component
export default async function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow space-y-12">
        <Card className="glass-card">
          <CardContent className="p-4 sm:p-6 space-y-4 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter text-primary text-glow">
                Portfolio
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                Here are some of my featured projects showcasing my expertise in full-stack development, cloud technologies, and modern web frameworks.
                I also publish technical articles on Medium covering various software engineering topics.
            </p>
          </CardContent>
        </Card>

        {/* Featured Projects */}
        <div className="space-y-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary text-center">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.filter(p => p.featured).map((project, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.toSorted((a, b) => a.localeCompare(b)).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild className="border-primary/20 hover:bg-primary/10">
                      {
                        project.github !== '#' ? (
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Link>
                        ) : (
                          <span className="flex items-center text-muted-foreground cursor-not-allowed">
                            <Github className="w-4 h-4 mr-2" />
                            Private Repo
                          </span> 
                        )
                      }
                    </Button>
                    {project.demo && (
                      <Button variant="outline" size="sm" asChild className="border-primary/20 hover:bg-primary/10">
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-2" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="space-y-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary text-center">Other Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.filter(p => !p.featured).map((project, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300">
                <CardContent className="p-4 space-y-3">
                  <h3 className="text-base font-semibold text-primary">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.toSorted((a, b) => a.localeCompare(b)).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild className="border-primary/20 hover:bg-primary/10">
                      {
                        project.github !== '#' ? (
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Link>
                        ) : (
                          <span className="flex items-center text-muted-foreground cursor-not-allowed">
                            <Github className="w-4 h-4 mr-2" />
                            Private Repo
                          </span> 
                        )
                      }
                    </Button>
                    {project.demo && (
                      <Button variant="outline" size="sm" asChild className="border-primary/20 hover:bg-primary/10">
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-2" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* External Links */}
        <Card className="glass-card">
          <CardContent className="p-6 space-y-4 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-primary">More Work & Articles</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="https://codingAbdullah.github.io/Portfolio-Page/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Complete Portfolio
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="https://medium.com/@abdullah_95" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Medium Articles (50+)
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}