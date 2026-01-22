import React from 'react';
import { useEmployees } from './hooks/useEmployees';
import { EmployeeTable } from './components';

export const Employees: React.FC = () => {
  const { data: employees, isLoading } = useEmployees();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Employees</h1>
      <EmployeeTable employees={employees || []} />
    </div>
  );
};

export default Employees;
