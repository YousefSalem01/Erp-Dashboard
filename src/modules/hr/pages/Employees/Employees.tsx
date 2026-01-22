import React from 'react';
import { useEmployees } from './hooks/useEmployees';
import { EmployeeTable } from './components';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export const Employees: React.FC = () => {
  const { data: employees, isLoading } = useEmployees();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-foreground">Employees</h1>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Employee
        </Button>
      </div>
      <EmployeeTable employees={employees || []} />
    </div>
  );
};

export default Employees;
