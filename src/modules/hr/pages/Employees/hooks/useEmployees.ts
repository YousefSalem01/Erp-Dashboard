import { mockEmployees } from '@/modules/hr/data/mock';

// TODO: Replace with react-query when API is ready
// import { useQuery } from '@tanstack/react-query';
// import { employeesApi } from '../api/employeesApi';

export const useEmployees = () => {
  // TODO: Replace with actual query
  // return useQuery({
  //   queryKey: ['employees'],
  //   queryFn: employeesApi.getAll,
  // });

  return {
    data: mockEmployees,
    isLoading: false,
    error: null,
  };
};

export const useEmployee = (id: string) => {
  // TODO: Replace with actual query
  const employee = mockEmployees.find((emp) => emp.id === id);

  return {
    data: employee,
    isLoading: false,
    error: null,
  };
};
