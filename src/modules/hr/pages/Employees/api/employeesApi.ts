import type { Employee, EmployeeFormData } from '../types';

// API calls for employees
export const employeesApi = {
  getAll: async (): Promise<Employee[]> => {
    // Implementation - replace with actual API call
    const response = await fetch('/api/hr/employees');
    return response.json();
  },
  getById: async (id: string): Promise<Employee> => {
    // Implementation
    const response = await fetch(`/api/hr/employees/${id}`);
    return response.json();
  },
  create: async (data: EmployeeFormData): Promise<Employee> => {
    // Implementation
    const response = await fetch('/api/hr/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  update: async (id: string, data: Partial<EmployeeFormData>): Promise<Employee> => {
    // Implementation
    const response = await fetch(`/api/hr/employees/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  delete: async (id: string): Promise<void> => {
    // Implementation
    await fetch(`/api/hr/employees/${id}`, {
      method: 'DELETE',
    });
  },
};
