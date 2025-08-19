import LichessProfile from '@/components/lichess-profile';
import { Metadata } from "next";

// Lichess page metadata
export const metadata: Metadata = {
  title: "Lichess Profile - Abdullah Muhammad",
  description: "View Abdullah's chess profile and gameplay data from Lichess, featuring live chess ratings, and game history.",
  keywords: ["Abdullah Muhammad", "Lichess", "Chess", "Chess Profile", "Chess Statistics", "Chess Ratings"],
  openGraph: {
    title: "Lichess Profile - Abdullah Muhammad",
    description: "View Abdullah's chess profile statistics and gameplay data from Lichess, featuring live chess ratings, and game history.",
    type: "website"
  }
};

// Server component for Lichess page
export default async function LichessPage() {
  return <LichessProfile />;
}