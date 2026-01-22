import { useQuery } from '@tanstack/react-query';
import { employeesApi } from '../api/employeesApi';

export const useEmployees = () => {
  return useQuery({
    queryKey: ['employees'],
    queryFn: employeesApi.getAll,
  });
};

export const useEmployee = (id: string) => {
  return useQuery({
    queryKey: ['employees', id],
    queryFn: () => employeesApi.getById(id),
    enabled: !!id,
  });
};
