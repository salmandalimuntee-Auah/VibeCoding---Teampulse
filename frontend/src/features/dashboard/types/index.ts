export interface KPISummary {
  activeProjectsCount: number;
  totalMeetingHoursThisWeek: number;
  overloadAlertsCount: number;
  atRiskProjectsCount: number;
}

export interface DashboardMetrics {
  kpi: KPISummary;
  departmentId?: string;
  dateRange: '7d' | '30d' | '90d';
}
