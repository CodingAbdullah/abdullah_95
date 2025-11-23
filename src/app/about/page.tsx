import { Card, CardContent } from "../../components/ui/card";
import Image from "next/image";
import { Metadata } from "next";

// About page metadata
export const metadata: Metadata = {
  title: "About - Abdullah Muhammad",
  description: "Learn about Abdullah's educational background, journey through Software Engineering at McMaster University.",
  keywords: ["Abdullah Muhammad", "About", "McMaster University", "Software Engineering", "Education", "Biography"],
  openGraph: {
    title: "About - Abdullah Muhammad",
    description: "Learn about Abdullah's educational background, journey through Software Engineering at McMaster University, and his passion for technology.",
    type: "website"
  }
};

// Custom About page component
export default async function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-4 sm:py-8 flex-grow space-y-6 sm:space-y-12">
        <Card className="glass-card">
          <CardContent className="p-4 sm:p-6 space-y-4 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter text-primary text-glow">
              A Bit About Me
            </h1>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary">Education</h3>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              Hey there! Thanks for taking the time to read about me! I hope you are doing well. I am a Software Engineering graduate from McMaster University.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              A demanding program that covers a large scope of all things related to software design, development, and testing. My passion for tech started back in high school and then extended into my uni years. I decided to pursue an engineering degree specialized in Software.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              I chose McMaster because of its unique program structure. The landscape, students, professors and the overall environment foster the learning and growth of students.
            </p>
            <div className="flex justify-center">
              <Image
                src="https://genericbucket95.s3.us-east-2.amazonaws.com/mcmaster.jpg"
                alt="McMaster University"
                className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-300 border-2 border-primary/20"
                width={300}
                height={200}
              />
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-4 sm:p-6 space-y-4 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter text-primary text-glow">
              Professional Background
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              I am a Full-Stack Engineer specializing in DevOps, cloud-native development, and modern web applications. I build and deploy scalable systems using AWS, Docker, Jenkins, and CI/CD pipelines, with a strong focus on automation, reliability, and performance.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              My core stack includes Next.js, TypeScript, React, Node.js, and Express.js, and I use AI-powered tools like Cursor and Claude to accelerate development.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              I also work within the Ethereum, Web3, and blockchain ecosystem, building dashboards, integrating on-chain data, and exploring Bitcoin and decentralized application workflows.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              I thrive in agile environments, with a strong emphasis on testing and quality using Selenium WebDriver, JUnit, and Cucumber, ensuring reliable development and continuous delivery.
            </p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-4 sm:p-6 space-y-4 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter text-primary text-glow">
                Today. The Future.
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                Originally from Brampton, I graduated McMaster in June 2018. The journey was a surreal experience and one I will never forget. The daily grind for six years to pursue my degree was a major accomplishment.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                I am working right here in Toronto. I greatly appreciate you taking the time to read about me. Much love!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}