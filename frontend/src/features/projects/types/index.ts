export type ProjectStatusName =
  | 'Semua'
  | 'Sedang Berjalan'
  | 'Selesai'
  | 'Hampir Selesai'
  | 'Dalam Draft';

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  status: Exclude<ProjectStatusName, 'Semua'>;
  progressPercent: number;
  startDate: string;
  deadline: string;
  leadName: string;
  leadAvatarColor: string;
  department: string;
  members: { name: string; initials: string; color: string }[];
}
