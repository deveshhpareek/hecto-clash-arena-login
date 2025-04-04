
import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { LoginForm } from '@/components/LoginForm';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero and Login Section */}
      <div className="flex-grow">
        <HeroSection />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">
              Join the Challenge
            </h2>
            <LoginForm />
          </div>
        </div>
        
        <FeaturesSection />
        <HowItWorksSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
