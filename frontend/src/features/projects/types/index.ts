export type ProjectStatus = 'Planning' | 'InProgress' | 'OnHold' | 'Completed' | 'Cancelled';
export type ProjectPriority = 'Low' | 'Medium' | 'High' | 'Critical';

export interface ProjectMember {
  userId: string;
  roleInProject: string;
  joinedAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  progressPercent: number;
  startDate: string;
  endDate: string;
  ownerId: string;
  members: ProjectMember[];
  isAtRisk?: boolean;
}
