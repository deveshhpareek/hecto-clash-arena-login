
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-hectoclash-purple blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-hectoclash-magenta blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        {/* Hero Text */}
        <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-hectoclash-purple">Hectoc</span>
            <span className="text-hectoclash-magenta">Clash</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-4">
            Real-time mathematical duels
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Challenge opponents in time-based Hectoc puzzle competitions.
            Sharpen your math skills while competing head-to-head in this
            exciting real-time platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="hectoc-gradient text-white">
              Get Started
            </Button>
            <Button variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Hero Image/Visual */}
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-hectoclash-purple/20 to-hectoclash-magenta/20 rounded-lg"></div>
            <div className="glass-card rounded-lg p-6 relative">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div 
                    key={index} 
                    className={`
                      aspect-square rounded-md flex items-center justify-center text-2xl font-bold
                      ${index % 2 === 0 ? 'bg-hectoclash-purple/20' : 'bg-hectoclash-magenta/20'}
                      animate-pulse-light
                    `}
                    style={{ 
                      animationDelay: `${index * 0.2}s`,
                      animationDuration: '3s'
                    }}
                  >
                    {index * 25}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded bg-gray-100 dark:bg-gray-800">
                <div className="text-center font-mono">
                  <span className="text-hectoclash-purple">25</span> + 
                  <span className="text-hectoclash-magenta">50</span> - 
                  <span className="text-hectoclash-purple">75</span> = 
                  <span className="text-hectoclash-magenta">?</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div className="text-sm">
                  <div className="font-semibold">Player 1</div>
                  <div className="text-xs text-green-500">Solving...</div>
                </div>
                <div className="text-sm text-right">
                  <div className="font-semibold">Player 2</div>
                  <div className="text-xs text-amber-500">Waiting...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
