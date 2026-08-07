export interface Meeting {
  id: string;
  externalCalendarId?: string;
  title: string;
  organizerId: string;
  startTime: string;
  endTime: string;
  durationMinutes: number;
  source: 'google_calendar' | 'manual';
  excluded: boolean;
}

export interface OverloadAlert {
  userId: string;
  weeklyHours: number;
  thresholdHours: number;
  isOverloaded: boolean;
}
