import type { Employee } from '../types';

export const getFullName = (employee: Employee): string => {
  return employee.name;
};

export const filterEmployeesByDepartment = (
  employees: Employee[],
  department: string
): Employee[] => {
  return employees.filter((emp) => emp.department === department);
};

export const filterEmployeesByStatus = (
  employees: Employee[],
  status: string
): Employee[] => {
  return employees.filter((emp) => emp.status === status);
};

export const searchEmployees = (
  employees: Employee[],
  searchTerm: string
): Employee[] => {
  const term = searchTerm.toLowerCase();
  return employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(term) ||
      emp.email.toLowerCase().includes(term) ||
      emp.department.toLowerCase().includes(term) ||
      emp.position.toLowerCase().includes(term)
  );
};
