
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "What is Hectoc?",
      description: "Hectoc is a mathematical puzzle where you must use six given numbers and basic operations to reach a target sum of 100.",
      example: "Example: Use 5, 10, 15, 20, 25, 50 to make 100"
    },
    {
      number: "02",
      title: "The Duel Format",
      description: "Two players receive the same set of numbers and race to find a valid solution first.",
      example: "First to solve correctly wins the duel"
    },
    {
      number: "03",
      title: "Scoring System",
      description: "Points are awarded based on speed, accuracy, and the elegance of your solution.",
      example: "Simpler solutions earn bonus points"
    },
    {
      number: "04",
      title: "Rank Up",
      description: "Win duels to improve your rating and climb the global leaderboard.",
      example: "Match with higher-ranked players as you improve"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn the basics of HectoClash and get ready to compete
          </p>
        </div>
        
        <div className="space-y-8 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className={`glass-card ${index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'} max-w-xl relative overflow-hidden`}>
              <div className={`absolute top-0 left-0 w-1 h-full ${index % 2 === 0 ? 'bg-hectoclash-purple' : 'bg-hectoclash-magenta'}`}></div>
              <CardContent className="p-6">
                <div className="flex">
                  <div className={`text-4xl font-bold mr-4 ${index % 2 === 0 ? 'text-hectoclash-purple' : 'text-hectoclash-magenta'}`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-2">{step.description}</p>
                    <p className="text-sm italic">{step.example}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
