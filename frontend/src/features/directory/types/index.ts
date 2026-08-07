export interface Department {
  id: string;
  name: string;
  parentDepartmentId?: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: 'ADMIN' | 'MANAGER' | 'EMPLOYEE';
  departmentId: string;
  position: string;
  status: 'active' | 'inactive';
  googleAccountConnected: boolean;
  activeProjectsCount: number;
}
