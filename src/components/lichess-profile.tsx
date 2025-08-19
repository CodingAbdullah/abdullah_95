"use client";

import React, { useEffect, useState } from 'react';
import { LichessData } from '../utils/types/LichessData';
import { Card, CardContent } from "./ui/card";

// Lichess Profile custom client component
export default function LichessProfile() {
  const [lichessData, setLichessData] = useState<LichessData | null>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchLichessData = async () => {
      try {
        const response = await fetch('/api/lichess');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setLichessData(data);
      } 
      catch (error) {
        if (error) {
            setIsError(true);
        }
      }
    };

    fetchLichessData();
  }, []);

  if (isError) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-destructive">Error Loading Lichess Data</h2>
          <p className="text-muted-foreground mt-2">Unable to fetch your profile information.</p>
        </div>
      </div>
    );
  }

  if (!lichessData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary">Loading...</h2>
          <p className="text-muted-foreground mt-2">Fetching your Lichess profile data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow space-y-8">
        <h1 className="text-4xl font-bold tracking-tighter text-primary text-glow text-center sm:text-left">
          Lichess Profile
        </h1>

        <Card className="glass-card">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">Account</h2>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-medium text-primary">Username:</span>
                <span className="text-muted-foreground">{lichessData.status.id}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-medium text-primary">Status:</span>
                <span className={lichessData.status.online ? 'text-green-500' : 'text-red-500'}>
                  {lichessData.status.online ? "Online" : "Offline"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">Statistics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="text-sm text-muted-foreground">Games Played</div>
                <div className="text-2xl font-bold text-primary">{lichessData.account.count.all}</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="text-sm text-muted-foreground">Wins</div>
                <div className="text-2xl font-bold text-green-500">{lichessData.account.count.win}</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="text-sm text-muted-foreground">Draws</div>
                <div className="text-2xl font-bold text-yellow-500">{lichessData.account.count.draw}</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="text-sm text-muted-foreground">Losses</div>
                <div className="text-2xl font-bold text-red-500">{lichessData.account.count.loss}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}