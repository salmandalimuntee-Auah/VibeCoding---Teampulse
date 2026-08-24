'use client';

import React, { useEffect, useState } from 'react';
import { DashboardSidebar } from '@/features/dashboard/components/DashboardSidebar';
import { MeetingsView } from '@/features/meetings';

export default function JamMeetingPage() {
  const [userName, setUserName] = useState('fanalpotocopy01');

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('teampulse_user');
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        if (parsed?.name) {
          setUserName(parsed.name);
        } else if (parsed?.email) {
          setUserName(parsed.email.split('@')[0]);
        }
      }
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <div className="min-h-screen flex bg-[var(--color-page-bg)] transition-colors duration-300">
      <DashboardSidebar userName={userName} />
      <MeetingsView />
    </div>
  );
}
