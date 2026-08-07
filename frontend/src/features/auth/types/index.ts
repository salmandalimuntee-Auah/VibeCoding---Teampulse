export type UserRole = 'ADMIN' | 'MANAGER' | 'EMPLOYEE';

export interface AuthSession {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    departmentId: string;
  };
}

export interface AuthState {
  isAuthenticated: boolean;
  user: AuthSession['user'] | null;
}
