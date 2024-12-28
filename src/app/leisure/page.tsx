import { Card, CardContent } from "../../components/ui/card";
import Image from "next/image";
import Link from "next/link";

// Custom Leisure page component
export default function LeisurePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow space-y-12">
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
          <CardContent className="p-6 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-primary text-glow">
                Programming
            </h1>
            <p className="text-lg text-muted-foreground">
                A large part of my free time is applied to learning and honing my programming skills. As a software developer, it is important to continue to practice your skills by working on personal projects.
            </p>
            <p className="text-lg text-muted-foreground">
                Not only do you grasp the concepts of the languages you are using, but gain expertise in problem solving. This is an essential skill you need if you want to become a successful developer.
            </p>
            <p className="text-lg text-muted-foreground">
                Some of the personal projects I have worked on are:
            </p>
            <ul className="list-disc pl-5">
              <li>Building a Personal Website (this one!)</li>
              <li>Building Websites</li>
              <li>Web Scrapers, AI Image Generators, NPM Packages, etc.</li>
            </ul>
            <div className="flex justify-center">
              <Image
                src="https://genericbucket95.s3.us-east-2.amazonaws.com/programming.png"
                alt="Programming"
                className="rounded-lg shadow-lg"
                width={300}
                height={200}
              />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
          <CardContent className="p-6 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-primary text-glow">
                Hockey
            </h1>
            <p className="text-lg text-muted-foreground">
                You know what they say, you are a true Canadian if you love hockey! Well, I am a big fan of it and love cheering on the beloved home town, Toronto Maple Leafs! Never easy being a Leafs fan, but with a young promising core I believe the Leafs will win the Stanley Cup, God willing.
            </p>
            <p className="text-lg text-muted-foreground">
                The night when the Leafs' captain raises the cup and with chants of "No more '67!", that will be an iconic moment to remember! :)
            </p>
            <div className="flex justify-center">
              <Image
                src="https://genericbucket95.s3.us-east-2.amazonaws.com/celly.png"
                alt="Toronto Maple Leafs Celebration"
                className="rounded-lg shadow-lg"
                width={300}
                height={200}
              />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
          <CardContent className="p-6 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-primary text-glow">
              Chess
            </h1>
            <p className="text-lg text-muted-foreground">
              A beautiful, mind-challenging game. Chess has always been an instant classic. From risky gambits to total domination, it is one of my favourite games to play during my spare time.
            </p>
            <p className="text-lg text-muted-foreground">
              Below, you will find a few games I have compiled over the years. You can view my profile stats by visiting my <b><i><u><Link href="/lichess" className="text-green-500">Lichess Profile.</Link></u></i></b>
            </p>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-xl font-semibold text-primary">Knight's Signature: Smothered Mate</h5>
                <p className="text-lg text-muted-foreground">
                  A rare checkmating sequence. A sneaky double check and a queen sac "smothers" the king and a lone knight wins the game!
                </p>
                <br />
                <video className="rounded-lg shadow-lg" width="370" height="290" controls>
                  <source src="https://genericbucket95.s3.us-east-2.amazonaws.com/knight.mp4" type="video/mp4" />
                </video>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-primary">A Queen Sac for the Win</h5>
                <p className="text-lg text-muted-foreground">
                  Often times, it matters how well your pieces are positioned, not your lead in material. An "opera" mate is hidden, can you spot it?
                </p>
                <br />
                <video className="rounded-lg shadow-lg" width="370" height="290" controls>
                  <source src="https://genericbucket95.s3.us-east-2.amazonaws.com/BigComeback.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="col-span-1 md:col-span-2 flex justify-center">
                <div className="w-1/2 flex flex-col items-center">
                  <h5 className="text-xl font-semibold text-primary">Every Little Bit Helps</h5>
                  <p className="text-lg text-muted-foreground">
                    This game reminds me of race against time. Even the smallest of pieces (pawns) can be very helpful! Again, positioning is key :)
                  </p>
                  <br />
                  <video className="rounded-lg shadow-lg" width="370" height="290" controls>
                    <source src="https://genericbucket95.s3.us-east-2.amazonaws.com/KnightWin.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}