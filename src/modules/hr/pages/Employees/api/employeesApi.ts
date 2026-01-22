import type { Employee, EmployeeFormData } from '../types';
import { mockEmployees } from '@/modules/hr/data/mock';

// TODO: Replace mock data with actual API calls using shared interceptor
// import { api } from '@/utils/api';

export const employeesApi = {
  getAll: async (): Promise<Employee[]> => {
    // TODO: api.get('/hr/employees')
    return mockEmployees;
  },

  getById: async (id: string): Promise<Employee | undefined> => {
    // TODO: api.get(`/hr/employees/${id}`)
    return mockEmployees.find((emp) => emp.id === id);
  },

  create: async (_data: EmployeeFormData): Promise<Employee> => {
    // TODO: api.post('/hr/employees', data)
    throw new Error('Not implemented');
  },

  update: async (_id: string, _data: Partial<EmployeeFormData>): Promise<Employee> => {
    // TODO: api.put(`/hr/employees/${id}`, data)
    throw new Error('Not implemented');
  },

  delete: async (_id: string): Promise<void> => {
    // TODO: api.delete(`/hr/employees/${id}`)
    throw new Error('Not implemented');
  },
};
