import type { Employee } from '../pages/Employees/types';

export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@company.com',
    department: 'Engineering',
    position: 'Senior Developer',
    hireDate: '2022-01-15',
    status: 'active',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@company.com',
    department: 'Marketing',
    position: 'Marketing Manager',
    hireDate: '2021-06-20',
    status: 'active',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob.johnson@company.com',
    department: 'Sales',
    position: 'Sales Representative',
    hireDate: '2023-03-10',
    status: 'active',
  },
  {
    id: '4',
    name: 'Alice Williams',
    email: 'alice.williams@company.com',
    department: 'Engineering',
    position: 'Frontend Developer',
    hireDate: '2023-08-01',
    status: 'active',
  },
  {
    id: '5',
    name: 'Charlie Brown',
    email: 'charlie.brown@company.com',
    department: 'HR',
    position: 'HR Specialist',
    hireDate: '2020-11-15',
    status: 'on-leave',
  },
];
