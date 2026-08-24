'use client';

import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  Activity,
  LayoutDashboard,
  Folder,
  Clock,
  Users,
  LogOut,
} from 'lucide-react';

interface SidebarProps {
  userName?: string;
}

export const DashboardSidebar: React.FC<SidebarProps> = ({
  userName = 'fanalpotocopy01',
}) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    try {
      router.prefetch('/dashboard');
      router.prefetch('/proyek');
      router.prefetch('/jam-meeting');
      router.prefetch('/direktori');
      router.prefetch('/');
    } catch (e) {
      // ignore
    }
  }, [router]);

  const handleLogout = () => {
    try {
      localStorage.removeItem('teampulse_user');
    } catch (e) {
      // ignore
    }
    router.push('/');
  };

  const navItems = [
    { label: 'Ringkasan', icon: LayoutDashboard, href: '/dashboard' },
    { label: 'Proyek', icon: Folder, href: '/proyek' },
    { label: 'Jam Meeting', icon: Clock, href: '/jam-meeting' },
    { label: 'Direktori', icon: Users, href: '/direktori' },
  ];

  return (
    <aside className="w-64 shrink-0 flex flex-col justify-between border-r border-[var(--color-card-border)] bg-[var(--color-card-bg)] min-h-screen p-4 transition-colors">
      <div>
        {/* Brand Logo & Header */}
        <div
          onClick={() => router.push('/')}
          className="flex items-center gap-3 px-2 py-3 mb-6 cursor-pointer group"
          title="Kembali ke Halaman Utama"
        >
          <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0 group-hover:scale-105 transition-transform">
            <Activity className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-[var(--color-text-title)] leading-tight group-hover:text-blue-500 transition-colors">
              TeamPulse
            </h1>
            <p className="text-[11px] font-medium text-[var(--color-text-subtitle)]">
              Dashboard Kinerja
            </p>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="space-y-1">
          <p className="px-3 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-subtitle)] mb-2">
            Menu
          </p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href === '/dashboard' && pathname === '/');

            return (
              <button
                key={item.label}
                onClick={() => item.href !== '#' && router.push(item.href)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-[#2563EB]/15 text-[#2563EB] dark:bg-blue-600/20 dark:text-blue-400 font-bold'
                    : 'text-[var(--color-text-subtitle)] hover:text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)]'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* User Profile Footer */}
      <div className="pt-4 border-t border-[var(--color-card-border)] flex items-center justify-between px-2">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
            {userName.charAt(0).toUpperCase()}
          </div>
          <div className="truncate">
            <p className="text-xs font-semibold text-[var(--color-text-title)] truncate">
              {userName}
            </p>
            <p className="text-[10px] text-[var(--color-text-subtitle)] truncate">
              Anggota Tim
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="p-2 rounded-lg text-[var(--color-text-subtitle)] hover:text-red-500 hover:bg-red-500/10 transition-colors"
          title="Keluar / Logout"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
