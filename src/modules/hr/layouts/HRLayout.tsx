import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header/Header';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { hrMenuItems } from '../config/menu.config';

export const HRLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar items={hrMenuItems} moduleColorClass="bg-hr/10 text-hr" />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HRLayout;
