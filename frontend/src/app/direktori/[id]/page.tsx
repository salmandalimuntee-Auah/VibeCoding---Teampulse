'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { DashboardSidebar } from '@/features/dashboard/components/DashboardSidebar';
import { EmployeeDetailView } from '@/features/directory';

export default function EmployeeDetailPage() {
  const params = useParams();
  const employeeId = (params?.id as string) || 'emp-1';
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
      <EmployeeDetailView employeeId={employeeId} />
    </div>
  );
}
