export interface MeetingSummaryKPI {
  totalHours: number;
  totalHoursAvg: number;
  totalHoursChangePct: number;
  dailyAvgHours: number;
  dailyAvgChangePct: number;
  totalMeetings: number;
  overloadCount: number;
  overloadPct: number;
}

export interface WeeklyMeetingTrend {
  weekLabel: string;
  totalHours: number;
  idealThresholdHours: number;
}

export interface MeetingCategoryBreakdown {
  category: string;
  count: number;
  color: string;
}

export interface EmployeeMeetingHours {
  id: string;
  name: string;
  role: string;
  department: string;
  avatarColor: string;
  totalHours: number;
  meetingCount: number;
  isOverloaded: boolean;
}

export interface MeetingItem {
  id: string;
  title: string;
  category: 'Internal Sync' | 'Client Meeting' | '1-on-1';
  date: string;
  timeRange: string;
  durationHours: number;
  organizer: string;
  attendees: { name: string; initials: string; color: string }[];
  agenda?: string;
  location?: string;
}
