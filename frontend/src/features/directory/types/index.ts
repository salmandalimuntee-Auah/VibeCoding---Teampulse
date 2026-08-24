export type DepartmentName =
  | 'Semua'
  | 'Teknologi'
  | 'Desain'
  | 'Produk'
  | 'Pemasaran'
  | 'Penjualan'
  | 'Operasional';

export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  department: Exclude<DepartmentName, 'Semua'>;
  position: string;
  status: 'Aktif' | 'Cuti' | 'Nonaktif';
  avatarColor: string;
  activeProjectsCount: number;
  meetingHours: number;
  joinedDate: string;
  location: string;
}
