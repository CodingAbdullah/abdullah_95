import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { Home } from "lucide-react";

// Custom 404 Not Found page component
export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="glass-card">
          <CardContent className="p-8 sm:p-12 space-y-6 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-primary text-glow">
              404
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              The page you are looking for does not exist or has been moved. Let us get you back to the main site.
            </p>
            <div className="pt-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glass-button" asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}