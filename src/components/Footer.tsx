
import React from 'react';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-hectoclash-purple">Hectoc</span>
              <span className="text-hectoclash-magenta">Clash</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Mathematical duels for competitive minds
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
            <a href="#" className="text-secondary-foreground hover:text-hectoclash-purple transition-colors">
              Home
            </a>
            <a href="#" className="text-secondary-foreground hover:text-hectoclash-purple transition-colors">
              About
            </a>
            <a href="#" className="text-secondary-foreground hover:text-hectoclash-purple transition-colors">
              Features
            </a>
            <a href="#" className="text-secondary-foreground hover:text-hectoclash-purple transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <Separator className="my-6 bg-muted/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {currentYear} HectoClash. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-secondary-foreground hover:text-hectoclash-purple transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-foreground hover:text-hectoclash-purple transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
