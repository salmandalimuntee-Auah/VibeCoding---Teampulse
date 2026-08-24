'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  Plus,
  RotateCw,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  Clock,
  MoreVertical,
  UserCheck,
  Building2,
  X,
  Filter,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { ThemeToggle } from '@/features/auth/components/ThemeToggle';
import { DepartmentName, Employee } from '../types';

export const DirectoryView: React.FC = () => {
  const router = useRouter();
  const [selectedDepartment, setSelectedDepartment] =
    useState<DepartmentName>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  // New Employee Form State
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newPosition, setNewPosition] = useState('');
  const [newDept, setNewDept] = useState<Exclude<DepartmentName, 'Semua'>>('Teknologi');

  const initialEmployees: Employee[] = [
    // 1. Teknologi (2)
    {
      id: 'emp-1',
      name: 'Sarah Connor',
      email: 'sarah.connor@teampulse.id',
      phone: '+62 812-3456-7890',
      role: 'Lead Frontend Engineer',
      department: 'Teknologi',
      position: 'Lead Frontend Engineer',
      status: 'Aktif',
      avatarColor: 'from-blue-600 to-indigo-600',
      activeProjectsCount: 3,
      meetingHours: 18.5,
      joinedDate: '15 Jan 2024',
      location: 'Jakarta (HQ)',
    },
    {
      id: 'emp-2',
      name: 'Clark Kent',
      email: 'clark.kent@teampulse.id',
      phone: '+62 813-4567-8901',
      role: 'Senior Backend Engineer',
      department: 'Teknologi',
      position: 'Senior Backend Engineer',
      status: 'Aktif',
      avatarColor: 'from-violet-600 to-purple-600',
      activeProjectsCount: 4,
      meetingHours: 14.0,
      joinedDate: '10 Feb 2024',
      location: 'Jakarta (HQ)',
    },
    // 2. Desain (1)
    {
      id: 'emp-3',
      name: 'Barry Allen',
      email: 'barry.allen@teampulse.id',
      phone: '+62 814-5678-9012',
      role: 'Senior UI/UX Designer',
      department: 'Desain',
      position: 'Senior UI/UX Designer',
      status: 'Aktif',
      avatarColor: 'from-pink-500 to-rose-600',
      activeProjectsCount: 2,
      meetingHours: 8.2,
      joinedDate: '01 Mar 2024',
      location: 'Bandung Hub',
    },
    // 3. Produk (1)
    {
      id: 'emp-4',
      name: 'Dick Grayson',
      email: 'dick.grayson@teampulse.id',
      phone: '+62 815-6789-0123',
      role: 'Lead Product Manager',
      department: 'Produk',
      position: 'Lead Product Manager',
      status: 'Aktif',
      avatarColor: 'from-emerald-500 to-teal-600',
      activeProjectsCount: 5,
      meetingHours: 16.2,
      joinedDate: '05 Jan 2024',
      location: 'Jakarta (HQ)',
    },
    // 4. Pemasaran (2)
    {
      id: 'emp-5',
      name: 'Wade Wilson',
      email: 'wade.wilson@teampulse.id',
      phone: '+62 816-7890-1234',
      role: 'Growth Marketing Lead',
      department: 'Pemasaran',
      position: 'Growth Marketing Lead',
      status: 'Aktif',
      avatarColor: 'from-amber-500 to-orange-600',
      activeProjectsCount: 2,
      meetingHours: 12.5,
      joinedDate: '12 Apr 2024',
      location: 'Surabaya Office',
    },
    {
      id: 'emp-6',
      name: 'Hal Jordan',
      email: 'hal.jordan@teampulse.id',
      phone: '+62 817-8901-2345',
      role: 'SEO & Content Specialist',
      department: 'Pemasaran',
      position: 'SEO & Content Specialist',
      status: 'Aktif',
      avatarColor: 'from-cyan-500 to-blue-600',
      activeProjectsCount: 1,
      meetingHours: 9.5,
      joinedDate: '20 Mei 2024',
      location: 'Jakarta (HQ)',
    },
    // 5. Penjualan (4)
    {
      id: 'emp-7',
      name: 'Bruce Wayne',
      email: 'bruce.wayne@teampulse.id',
      phone: '+62 818-9012-3456',
      role: 'VP of Enterprise Sales',
      department: 'Penjualan',
      position: 'VP of Enterprise Sales',
      status: 'Aktif',
      avatarColor: 'from-rose-600 to-red-700',
      activeProjectsCount: 4,
      meetingHours: 10.8,
      joinedDate: '01 Des 2023',
      location: 'Jakarta (HQ)',
    },
    {
      id: 'emp-8',
      name: 'Arthur Curry',
      email: 'arthur.curry@teampulse.id',
      phone: '+62 819-0123-4567',
      role: 'Account Executive',
      department: 'Penjualan',
      position: 'Account Executive',
      status: 'Aktif',
      avatarColor: 'from-teal-500 to-emerald-600',
      activeProjectsCount: 2,
      meetingHours: 6.5,
      joinedDate: '18 Jun 2024',
      location: 'Bali Branch',
    },
    {
      id: 'emp-9',
      name: 'Ray Palmer',
      email: 'ray.palmer@teampulse.id',
      phone: '+62 820-1234-5678',
      role: 'Sales Operations Analyst',
      department: 'Penjualan',
      position: 'Sales Operations Analyst',
      status: 'Aktif',
      avatarColor: 'from-indigo-500 to-violet-600',
      activeProjectsCount: 1,
      meetingHours: 5.0,
      joinedDate: '02 Jul 2024',
      location: 'Jakarta (HQ)',
    },
    {
      id: 'emp-10',
      name: 'Victor Stone',
      email: 'victor.stone@teampulse.id',
      phone: '+62 821-2345-6789',
      role: 'Technical Sales Engineer',
      department: 'Penjualan',
      position: 'Technical Sales Engineer',
      status: 'Aktif',
      avatarColor: 'from-blue-500 to-cyan-600',
      activeProjectsCount: 3,
      meetingHours: 4.2,
      joinedDate: '15 Jul 2024',
      location: 'Jakarta (HQ)',
    },
    // 6. Operasional (2)
    {
      id: 'emp-11',
      name: 'Oliver Queen',
      email: 'oliver.queen@teampulse.id',
      phone: '+62 822-3456-7890',
      role: 'Head of Operations',
      department: 'Operasional',
      position: 'Head of Operations',
      status: 'Aktif',
      avatarColor: 'from-emerald-600 to-teal-700',
      activeProjectsCount: 3,
      meetingHours: 7.8,
      joinedDate: '10 Jan 2024',
      location: 'Jakarta (HQ)',
    },
    {
      id: 'emp-12',
      name: 'Diana Prince',
      email: 'diana.prince@teampulse.id',
      phone: '+62 823-4567-8901',
      role: 'People & HR Manager',
      department: 'Operasional',
      position: 'People & HR Manager',
      status: 'Aktif',
      avatarColor: 'from-amber-600 to-red-600',
      activeProjectsCount: 2,
      meetingHours: 11.0,
      joinedDate: '01 Feb 2024',
      location: 'Jakarta (HQ)',
    },
  ];

  const [employeeList, setEmployeeList] = useState<Employee[]>(initialEmployees);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  };

  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newEmail) return;

    const created: Employee = {
      id: `emp-${Date.now()}`,
      name: newName,
      email: newEmail,
      phone: newPhone || '+62 812-0000-0000',
      role: newPosition || 'Anggota Tim',
      department: newDept,
      position: newPosition || 'Anggota Tim',
      status: 'Aktif',
      avatarColor: 'from-blue-600 to-cyan-600',
      activeProjectsCount: 1,
      meetingHours: 4.0,
      joinedDate: 'Hari Ini',
      location: 'Jakarta (HQ)',
    };

    setEmployeeList([created, ...employeeList]);
    setNewName('');
    setNewEmail('');
    setNewPhone('');
    setNewPosition('');
    setIsAddModalOpen(false);
  };

  // Department counts
  const departmentsList: DepartmentName[] = [
    'Semua',
    'Teknologi',
    'Desain',
    'Produk',
    'Pemasaran',
    'Penjualan',
    'Operasional',
  ];

  const getDeptCount = (dept: DepartmentName) => {
    if (dept === 'Semua') return employeeList.length;
    return employeeList.filter((e) => e.department === dept).length;
  };

  // Filtered list based on active tab and search query
  const filteredEmployees = employeeList.filter((emp) => {
    const matchesDept =
      selectedDepartment === 'Semua' || emp.department === selectedDepartment;
    const matchesSearch =
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="flex-1 p-6 md:p-8 space-y-6 overflow-y-auto max-w-[1600px] mx-auto transition-colors">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text-title)]">
            Direktori Karyawan
          </h1>
          <p className="text-xs font-medium text-[var(--color-text-subtitle)] mt-1">
            Kelola dan lihat direktori seluruh tim perusahaan.
          </p>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto flex-wrap">
          <ThemeToggle isFixed={false} />
          <button
            type="button"
            onClick={handleRefresh}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)] transition-all shadow-sm active:scale-95"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Segarkan</span>
          </button>
          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#2563EB] hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Tambah Karyawan</span>
          </button>
        </div>
      </div>

      {/* Search & Department Tabs Container */}
      <div className="p-4 sm:p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm space-y-4">
        {/* Search Input Bar */}
        <div className="relative flex items-center">
          <Search className="absolute left-3.5 w-4 h-4 text-[var(--color-input-icon)] pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama, email, atau posisi karyawan..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] placeholder-[var(--color-input-placeholder)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          />
        </div>

        {/* Department Filter Pills (7 Tabs from Figma) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {departmentsList.map((dept) => {
            const count = getDeptCount(dept);
            const isSelected = selectedDepartment === dept;

            return (
              <button
                key={dept}
                type="button"
                onClick={() => setSelectedDepartment(dept)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#2563EB] text-white shadow-sm shadow-blue-500/20 font-bold'
                    : 'bg-[var(--color-tab-container-bg)] text-[var(--color-text-subtitle)] hover:text-[var(--color-text-title)] border border-[var(--color-card-border)]'
                }`}
              >
                <span>{dept}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-[var(--color-card-bg)] text-[var(--color-text-title)] border border-[var(--color-card-border)]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Employee Cards Grid (Responsive 1 to 3 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredEmployees.map((emp) => (
          <div
            key={emp.id}
            onClick={() => setSelectedEmployee(emp)}
            className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all flex flex-col justify-between group cursor-pointer relative"
          >
            {/* Card Header & Avatar */}
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${emp.avatarColor} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm`}
                  >
                    {emp.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-text-title)] group-hover:text-blue-500 transition-colors leading-tight">
                      {emp.name}
                    </h3>
                    <p className="text-xs font-medium text-[var(--color-text-subtitle)] mt-0.5">
                      {emp.position}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                  {emp.department}
                </span>
              </div>

              {/* Employee Attributes Grid */}
              <div className="space-y-2 py-3 border-y border-[var(--color-card-border)] text-xs text-[var(--color-text-subtitle)]">
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span className="truncate">{emp.email}</span>
                </div>
                <div className="flex items-center gap-2 truncate">
                  <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span className="truncate">{emp.phone}</span>
                </div>
                <div className="flex items-center gap-2 truncate">
                  <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span className="truncate">{emp.location}</span>
                </div>
              </div>
            </div>

            {/* Card Footer Workload & Status Badges */}
            <div className="mt-4 flex items-center justify-between text-xs pt-1">
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[var(--color-text-subtitle)]" />
                <span className="font-semibold text-[var(--color-text-title)]">
                  {emp.activeProjectsCount} Proyek
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                <span className="font-bold text-[var(--color-text-title)]">
                  {emp.meetingHours}j meeting
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <div className="p-12 text-center rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)]">
          <p className="text-sm font-semibold text-[var(--color-text-title)]">
            Tidak ada karyawan ditemukan
          </p>
          <p className="text-xs text-[var(--color-text-subtitle)] mt-1">
            Coba ubah kata kunci pencarian atau pilih departemen lain.
          </p>
        </div>
      )}

      {/* Modal 1: + Tambah Karyawan Dialog */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-lg rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-[var(--color-card-border)] pb-3">
              <h3 className="text-base font-bold text-[var(--color-text-title)]">
                Tambah Karyawan Baru
              </h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg text-[var(--color-text-subtitle)] hover:text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddEmployee} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[var(--color-text-label)] mb-1">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Contoh: Oliver Queen"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--color-text-label)] mb-1">
                  Email Perusahaan *
                </label>
                <input
                  type="email"
                  required
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="oliver.queen@teampulse.id"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text-label)] mb-1">
                    Departemen
                  </label>
                  <select
                    value={newDept}
                    onChange={(e) =>
                      setNewDept(
                        e.target.value as Exclude<DepartmentName, 'Semua'>
                      )
                    }
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  >
                    <option value="Teknologi">Teknologi</option>
                    <option value="Desain">Desain</option>
                    <option value="Produk">Produk</option>
                    <option value="Pemasaran">Pemasaran</option>
                    <option value="Penjualan">Penjualan</option>
                    <option value="Operasional">Operasional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text-label)] mb-1">
                    Posisi / Jabatan
                  </label>
                  <input
                    type="text"
                    value={newPosition}
                    onChange={(e) => setNewPosition(e.target.value)}
                    placeholder="Senior Developer"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--color-text-label)] mb-1">
                  No. Telepon / WhatsApp
                </label>
                <input
                  type="text"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  placeholder="+62 812-3456-7890"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                />
              </div>

              <div className="pt-3 border-t border-[var(--color-card-border)] flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)]"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white shadow-sm"
                >
                  Simpan Karyawan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal 2: Employee Profile Detail */}
      {selectedEmployee && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-md rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--color-card-border)] pb-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${selectedEmployee.avatarColor} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm`}
                >
                  {selectedEmployee.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-text-title)]">
                    {selectedEmployee.name}
                  </h3>
                  <p className="text-xs text-[var(--color-text-subtitle)]">
                    {selectedEmployee.position}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEmployee(null)}
                className="p-1 rounded-lg text-[var(--color-text-subtitle)] hover:text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[var(--color-text-subtitle)]">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-tab-container-bg)] border border-[var(--color-card-border)]">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[var(--color-text-subtitle)]">
                    Departemen
                  </span>
                  <p className="text-xs font-bold text-[var(--color-text-title)]">
                    {selectedEmployee.department}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[var(--color-text-subtitle)]">
                    Status
                  </span>
                  <p className="text-xs font-bold text-emerald-500">
                    {selectedEmployee.status}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[var(--color-text-subtitle)]">
                    Beban Meeting
                  </span>
                  <p className="text-xs font-bold text-blue-500">
                    {selectedEmployee.meetingHours} Jam/mgg
                  </p>
                </div>
              </div>

              <div>
                <span className="font-semibold block text-[var(--color-text-title)] mb-1">
                  Kontak Karyawan:
                </span>
                <p>Email: <strong className="text-[var(--color-text-title)]">{selectedEmployee.email}</strong></p>
                <p>Telepon: <strong className="text-[var(--color-text-title)]">{selectedEmployee.phone}</strong></p>
                <p>Lokasi: <strong className="text-[var(--color-text-title)]">{selectedEmployee.location}</strong></p>
                <p>Bergabung: <strong className="text-[var(--color-text-title)]">{selectedEmployee.joinedDate}</strong></p>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--color-card-border)] flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedEmployee(null)}
                className="px-4 py-2 text-xs font-semibold rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)]"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={() => router.push(`/direktori/${selectedEmployee.id}`)}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#2563EB] text-white hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-1.5"
              >
                <span>Lihat Detail Lengkap</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
