export type ExportFormat = 'pdf' | 'csv';

export interface ReportPayload {
  departmentId?: string;
  dateRange: string;
  format: ExportFormat;
}
