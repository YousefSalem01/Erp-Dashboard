export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  hireDate?: string;
  status: 'active' | 'inactive' | 'on-leave';
}

export interface EmployeeFormData {
  name: string;
  email: string;
  department: string;
  position: string;
  hireDate?: string;
}
