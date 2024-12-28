import { Card, CardContent } from "../../components/ui/card";
import Link from "next/link";

// Custom Skills Page component
export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow space-y-12">
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
          <CardContent className="p-6 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-primary text-glow">
              Life as a Developer
            </h1>
            <p className="text-lg text-muted-foreground">
              As a developer, you have to be willing to immerse yourself in technology.
              The following sections summarize my key skills in the field of Software Engineering.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
          <CardContent className="p-6 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-primary text-glow">
                Web/Software Development
            </h1>
            <p className="text-lg text-muted-foreground">
                Over the years working as a web developer, I was able to explore both front-end and back-end paradigms. I believe developers should be versatile in all areas of development.
            </p>
            <p className="text-lg text-muted-foreground">
                As a Full-Stack developer, I can design and develop dynamic, secure, and user-friendly websites.
            </p>
            <p className="text-lg text-muted-foreground">
                I am <b><i><u><Link href="https://www.credly.com/badges/ea32a77f-e17f-4750-b1b7-b62d3388deb2" target="_blank" rel="noreferrer" className="text-green-500">AWS certified.</Link></u></i></b> I love working with the various services AWS has to offer. With the advent of AI, I plan on upskilling in the field of AI x Cloud. Recently, I completed the Azure Administrator exam <b><i><u><Link href="https://www.credly.com/badges/6b4fb749-f168-448f-a3f3-16104c630493" target="_blank" rel="noreferrer" className="text-green-500">Microsoft Azure certified.</Link></u></i></b>
            </p>
            <p className="text-lg text-muted-foreground">
                I have dabbled my feet into Web3 development and learned a lot about bridging the gap between traditional Web2 paradigms and how, by harnessing the power of blockchain, we can build decentralized solutions.
            </p>
            <h3 className="text-2xl font-semibold text-primary">Languages</h3>
            <ul className="list-disc pl-5">
              <li>JavaScript (ES7+)</li>
              <li>Java</li>
              <li>Typescript</li>
            </ul>
            <br />
            <h3 className="text-2xl font-semibold text-primary">Full Stack Technologies</h3>
            <ul className="list-disc pl-5">
              <li>AWS</li>
              <li>APIs (REST, Testing APIs using Postman)</li>
              <li>Azure</li>
              <li>Bootstrap</li>
              <li>Express.js</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>React.js (React Query, React-Router, Hooks, etc.)</li>
              <li>Redux/Redux Toolkit</li>
              <li>SQL/MongoDB (Relational/Non-Relational Databases)</li>
              <li>TailwindCSS</li>
              <li>Terraform</li>
            </ul>
            <br />
            <h3 className="text-2xl font-semibold text-primary">Version Control/Project Management Tools/IDEs</h3>
            <ul className="list-disc pl-5">
              <li>Git</li>
              <li>Github</li>
              <li>Bitbucket</li>
              <li>Jira</li>
              <li>Confluence</li>
              <li>MS Office</li>
              <li>Microsoft Visual Studio Code</li>
              <li>Notepad++</li>
              <li>AWS CLI</li>
              <li>VIM Editor</li>
              <li>Eclipse</li>
              <li>Atom.io</li>
              <li>Github.dev</li>
              <li>v0.dev</li>
              <li>Cursor AI Editor</li>
              <li>Replit Code Editor</li>
            </ul>
            <br />
            <h3 className="text-2xl font-semibold text-primary">Testing & Deployment</h3>
            <ul className="list-disc pl-5">
              <li>Selenium WebDriver</li>
              <li>Cucumber Framework</li>
              <li>Docker</li>
              <li>Jenkins</li>
            </ul>
            <br />
            <h3 className="text-2xl font-semibold text-primary">Web3 Development & Crypto</h3>
            <ul className="list-disc pl-5">
              <li>Cryptocurrencies</li>
              <li>NFTs</li>
              <li>Mocha.js</li>
              <li>Solidity</li>
              <li>Smart Contracts</li>
              <li>Remix IDE</li>
              <li>Ganache CLI</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
          <CardContent className="p-6 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-primary text-glow">
              Additional Programming Languages
            </h1>
            <p className="text-lg text-muted-foreground">
              Other than web development (which is a big part of my skillset), I am competent with other programming languages:
            </p>
            <ul className="list-disc pl-5">
              <li>Bash/CLI/Powershell Scripting</li>
              <li>Terraform</li>
            </ul>
            <p className="text-lg text-muted-foreground">
              Java was the first language I learned in high school. Intrigued by the idea of programming, I decided to pursue my studies in Software Engineering.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}