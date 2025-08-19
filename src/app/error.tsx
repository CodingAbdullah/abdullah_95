"use client";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { Home, RefreshCw } from "lucide-react";
import { useEffect } from "react";

// Custom Error page component
export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="glass-card">
          <CardContent className="p-8 sm:p-12 space-y-6 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-primary text-glow">
              Error
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-primary">
              Could not load page
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Something went wrong while loading this page. You can try refreshing or return to the home page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glass-button" asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </Button>
              <Button 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glass-button" 
                variant="outline"
                onClick={() => reset()}
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}