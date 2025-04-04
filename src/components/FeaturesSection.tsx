
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "Real-time Duels",
    description: "Challenge opponents to head-to-head mathematical battles with live progress tracking.",
    icon: "⚔️"
  },
  {
    title: "Timed Challenges",
    description: "Test your speed and accuracy under pressure with our time-based puzzle format.",
    icon: "⏱️"
  },
  {
    title: "Skill Matchmaking",
    description: "Our system matches you with players of similar skill level for fair competition.",
    icon: "🏆"
  },
  {
    title: "Custom Puzzles",
    description: "Variety of Hectoc puzzle difficulties to challenge players of all skill levels.",
    icon: "🧩"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Game Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            HectoClash combines mathematical challenge with competitive gameplay
            to create an engaging and educational experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card overflow-hidden border-t-4 hover:shadow-xl transition-shadow duration-300">
              <div className={`border-t-4 -mt-[4px] ${index % 2 === 0 ? 'border-hectoclash-purple' : 'border-hectoclash-magenta'}`}></div>
              <CardHeader>
                <div className="text-3xl mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
