import React from 'react';
import { Header } from '@/components/Header/Header';
import { ModuleCard } from '@/uikit/ModuleCard/ModuleCard';
import { modules } from '../modules.config';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome to ERP Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Select a module to get started
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module) => (
            <ModuleCard
              key={module.route}
              icon={module.icon}
              title={module.title}
              description={module.description}
              route={module.route}
              colorClass={module.colorClass}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
