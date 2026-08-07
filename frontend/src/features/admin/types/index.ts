export interface ThresholdSettings {
  weeklyMeetingHourLimit: number; // Default 15h/week
  departmentId?: string;
}

export interface AuditLogEntry {
  id: string;
  actorId: string;
  entityType: string;
  entityId: string;
  action: string;
  createdAt: string;
}
