import React from 'react';
import { HRMetricsCard } from '@/modules/hr/components/HRMetricsCard';
import { Users, UserPlus, Clock, Calendar } from 'lucide-react';

export const HRDashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground mb-6">HR Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <HRMetricsCard
          title="Total Employees"
          value={245}
          icon={<Users className="h-8 w-8" />}
          trend={5.2}
        />
        <HRMetricsCard
          title="New Hires (This Month)"
          value={12}
          icon={<UserPlus className="h-8 w-8" />}
          trend={15}
        />
        <HRMetricsCard
          title="Attendance Rate"
          value="94.5%"
          icon={<Clock className="h-8 w-8" />}
          trend={2.1}
        />
        <HRMetricsCard
          title="Pending Leaves"
          value={8}
          icon={<Calendar className="h-8 w-8" />}
          trend={-3}
        />
      </div>

      <div className="bg-white rounded-lg border p-6 shadow-[var(--shadow-card)]">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <p className="text-muted-foreground">
          Welcome to the HR module. Use the sidebar to navigate to different sections.
        </p>
      </div>
    </div>
  );
};

export default HRDashboard;
