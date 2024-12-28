import { Card, CardContent } from "../../components/ui/card";
import Link from "next/link";

// Custom Portfolio page component
export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow space-y-12">
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
          <CardContent className="p-6 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-primary text-glow">
                Portfolio
            </h1>
            <p className="text-lg text-muted-foreground">
                On this page, you will find a link to a portfolio page which contains a list of the present/past projects I have been working on. 
                <br />
                In my spare time, I also publish tech articles on Medium. 
                To date, I have written 50+ articles so feel free to check them out.
            </p>
            <p className="text-lg text-muted-foreground">
                - Favourite Projects: <b><i><u><Link href="https://codingAbdullah.github.io/Portfolio-Page/" target="_blank" rel="noreferrer" className="text-green-500">Portfolio of Projects</Link></u></i></b>
                <br />
                - Medium Articles: <b><i><u><Link href="https://medium.com/@abdullah_95" target="_blank" rel="noreferrer" className="text-green-500">Medium Articles Published</Link></u></i></b>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}