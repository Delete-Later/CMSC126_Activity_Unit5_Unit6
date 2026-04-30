"use client";

import {
  CalendarDays,
  FileText,
  GraduationCap,
  Home,
  LayoutDashboard,
  LogIn,
  Search,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const screens = [
  { key: "home", label: "Homepage", icon: Home },
  { key: "login", label: "Student Login", icon: LogIn },
  { key: "dashboard", label: "Student Page", icon: LayoutDashboard },
  { key: "enlistment", label: "Course Search", icon: Search },
  { key: "schedule", label: "Conflict Check", icon: CalendarDays },
  { key: "grades", label: "Grades", icon: GraduationCap },
  { key: "requests", label: "Requests", icon: FileText },
] as const;

export type ScreenKey = (typeof screens)[number]["key"];
export type NavigateToScreen = (screen: ScreenKey) => void;
export type PillTone = "green" | "red" | "amber" | "blue" | "maroon";

export const selectedCourses = [
  ["CMSC 126", "Web Engineering", "Tue 10:00-11:30", "3u", "Added"],
  ["CMSC 126L", "Web Engineering Lab", "Thu 13:00-16:00", "1u", "Open"],
  ["MATH 55", "Discrete Mathematics", "Tue 10:00-11:30", "3u", "Conflict"],
  ["STAT 101", "Intro Statistics", "Mon 08:30-10:00", "3u", "Open"],
  ["HIST 1", "Philippine History", "Wed 14:30-16:00", "3u", "Open"],
  ["PE 2", "Team Sports", "Fri 15:00-17:00", "2u", "Waitlist"],
];

export const requestForms = [
  ["Change of Matriculation", "Add, cancel, or change enrolled subjects after registration.", "Academic"],
  ["Dropping of Subject", "Request dropping approval and route to the correct office.", "Academic"],
  ["Leave of Absence", "Submit LOA application with required endorsement.", "Academic"],
  ["Cross-registration", "Request permission to take courses in another UP constituent university.", "Academic"],
  ["Official Transcript", "Request transcript processing and release schedule.", "Documents"],
  ["Certificate Request", "Good moral, enrollment, graduation, and related certifications.", "Documents"],
  ["Health Examination", "Entrance or periodic health examination forms.", "Health"],
  ["Dormitory Application", "Residential Services Unit application and supporting forms.", "Student Affairs"],
];

export function PublicHeader({ onNavigate }: { onNavigate: NavigateToScreen }) {
  return (
    <header className="flex h-24 items-center justify-between bg-[#7B1113] px-10 text-white">
      <div className="flex items-center gap-4">
        <div className="grid size-12 place-items-center rounded-full border border-white/40 bg-white/15 text-xs font-bold">
          UPV
        </div>
        <div>
          <p className="text-2xl font-bold tracking-normal">UPV CRS 2.0</p>
          <p className="text-sm text-red-100">Computerized Registration and Student Information System</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="h-10 rounded-lg px-4 text-sm font-medium hover:bg-white/10" type="button">
          Admin
        </button>
        <button className="h-10 rounded-lg px-4 text-sm font-medium hover:bg-white/10" type="button">
          Student
        </button>
        <button className="h-10 rounded-lg px-4 text-sm font-medium hover:bg-white/10" type="button">
          Faculty
        </button>
        <button
          className="ml-2 inline-flex h-10 items-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-[#7B1113]"
          type="button"
          onClick={() => onNavigate("login")}
        >
          <LogIn className="size-4" />
          Student Login
        </button>
      </div>
    </header>
  );
}

export function PortalShell({
  active,
  children,
  onNavigate,
}: {
  active: ScreenKey;
  children: ReactNode;
  onNavigate: NavigateToScreen;
}) {
  const portalItems = screens.filter((item) => item.key !== "home" && item.key !== "login");

  return (
    <section className="min-h-[1024px] bg-[#f6f7f9]">
      <header className="flex h-[78px] items-center justify-between bg-[#7B1113] px-8 text-white">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-full border border-white/40 bg-white/15 text-[10px] font-bold">
            UPV
          </div>
          <div>
            <p className="text-xl font-bold">CRS 2.0</p>
            <p className="text-xs text-red-100">Student Portal</p>
          </div>
        </div>
        <div className="flex items-center gap-7">
          <div className="rounded-lg bg-[#551011] px-4 py-2 text-xs font-semibold">
            Current Term: 2nd Sem AY 2025-2026
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold">Maria Santos</p>
            <p className="text-xs text-red-100">2022-12345 | BS Computer Science</p>
          </div>
          <div className="grid size-10 place-items-center rounded-full bg-white/20 text-xs font-bold">MS</div>
        </div>
      </header>

      <div className="grid grid-cols-[248px_1fr]">
        <aside className="min-h-[946px] border-r border-slate-200 bg-white px-5 py-10">
          <nav className="space-y-2">
            {portalItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.key}
                  className={cn(
                    "flex h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm font-medium",
                    active === item.key
                      ? "border border-[#B3CFBD] bg-[#EBEEF7] text-[#7B1113]"
                      : "text-slate-600 hover:bg-slate-100",
                  )}
                  type="button"
                  onClick={() => onNavigate(item.key)}
                >
                  <Icon className="size-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="mt-12 border-t border-slate-200 pt-7">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Registration status</p>
            <StatusPill className="mt-4" tone="amber">
              For adviser review
            </StatusPill>
            <p className="mt-5 text-sm leading-6 text-slate-500">Run Schedule Check before final submission.</p>
          </div>
        </aside>

        <div className="px-8 py-9">{children}</div>
      </div>
    </section>
  );
}

export function SectionHeading({
  className,
  subtitle,
  title,
}: {
  className?: string;
  subtitle: string;
  title: string;
}) {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold tracking-normal">{title}</h2>
      <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
    </div>
  );
}

export function PageTitle({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-normal">{title}</h1>
      <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
    </div>
  );
}

export function InfoCard({
  accent,
  label,
  text,
  title,
}: {
  accent: string;
  label: string;
  text: string;
  title: string;
}) {
  return (
    <article className="relative min-h-40 overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className={cn("absolute inset-y-0 left-0 w-1.5", accent)} />
      <h3 className="text-base font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
      <StatusPill className="mt-4" tone={accent.includes("7B1113") ? "maroon" : accent.includes("567E3A") ? "green" : "blue"}>
        {label}
      </StatusPill>
    </article>
  );
}

export function Panel({ children, className, title }: { children: ReactNode; className?: string; title: string }) {
  return (
    <section className={cn("rounded-lg border border-slate-200 bg-white p-6 shadow-sm", className)}>
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function StatusPill({
  children,
  className,
  tone,
}: {
  children: ReactNode;
  className?: string;
  tone: PillTone;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center rounded-full border px-3 text-xs font-bold",
        tone === "green" && "border-emerald-200 bg-emerald-50 text-[#385E27]",
        tone === "red" && "border-red-200 bg-red-50 text-red-700",
        tone === "amber" && "border-amber-200 bg-amber-50 text-amber-700",
        tone === "blue" && "border-blue-200 bg-blue-50 text-blue-700",
        tone === "maroon" && "border-[#B3CFBD] bg-[#EBEEF7] text-[#551011]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function StatCard({
  icon: Icon,
  label,
  note,
  tone,
  value,
}: {
  icon: LucideIcon;
  label: string;
  note: string;
  tone: PillTone;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div
        className={cn(
          "grid size-10 place-items-center rounded-lg text-white",
          tone === "green" && "bg-[#567E3A]",
          tone === "red" && "bg-red-700",
          tone === "amber" && "bg-amber-700",
          tone === "blue" && "bg-blue-700",
          tone === "maroon" && "bg-[#7B1113]",
        )}
      >
        <Icon className="size-4" />
      </div>
      <p className="mt-4 text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{note}</p>
    </div>
  );
}

export function ActionButton({
  icon: Icon,
  label,
  onClick,
  tone = "maroon",
}: {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  tone?: "maroon" | "green" | "deep" | "outline";
}) {
  return (
    <button
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold",
        tone === "maroon" && "bg-[#7B1113] text-white",
        tone === "green" && "bg-[#567E3A] text-white",
        tone === "deep" && "bg-[#551011] text-white",
        tone === "outline" && "border border-[#7B1113] bg-white text-[#7B1113]",
      )}
      type="button"
      onClick={onClick}
    >
      <Icon className="size-4" />
      {label}
    </button>
  );
}

export function DataTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-[#EBEEF7] text-xs uppercase tracking-wide text-[#551011]">
          <tr>
            {columns.map((column) => (
              <th key={column} className="border-b border-slate-200 px-4 py-3 font-bold">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")} className="odd:bg-white even:bg-slate-50">
              {row.map((cell, index) => (
                <td key={`${cell}-${index}`} className="border-b border-slate-200 px-4 py-3">
                  {index === row.length - 1 ? <StatusForText value={cell} /> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatusForText({ value }: { value: string }) {
  const tone: PillTone =
    value === "Conflict" ? "red" : value === "Waitlist" ? "amber" : value === "Closed" ? "blue" : "green";
  return <StatusPill tone={tone}>{value}</StatusPill>;
}

export function SchedulePreviewRow({ time }: { time: string }) {
  return (
    <>
      <div className="border-t border-slate-200 py-4 text-xs text-slate-500">{time}</div>
      {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => {
        const conflict = day === "Tue" && time === "10:00";
        const cmsc = day === "Thu" && time === "13:00";
        return (
          <div key={`${time}-${day}`} className="min-h-14 border-t border-slate-200 px-2 py-2">
            {conflict && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-bold text-red-700">
                CMSC 126 / MATH 55
              </div>
            )}
            {cmsc && (
              <div className="rounded-lg border border-[#B3CFBD] bg-[#EBEEF7] px-3 py-2 text-xs font-bold text-[#385E27]">
                CMSC 126L
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export function TimeGridRow({ time }: { time: string }) {
  const cells = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  return (
    <>
      <div className="border-t border-slate-200 bg-slate-50 px-3 py-4 text-slate-500">{time}</div>
      {cells.map((day) => {
        const conflict = day === "Tue" && (time === "10:00" || time === "11:00");
        const normal =
          (day === "Mon" && time === "09:00") ||
          (day === "Wed" && time === "15:00") ||
          (day === "Thu" && (time === "13:00" || time === "14:00" || time === "15:00"));
        const pe = day === "Fri" && time === "15:00";

        return (
          <div key={`${day}-${time}`} className="min-h-[68px] border-l border-t border-slate-200 p-2">
            {conflict && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-red-700">
                <p className="font-bold">{time === "10:00" ? "CMSC 126" : "MATH 55"}</p>
                <p className="mt-1 text-[11px]">Tue 10:00-11:30</p>
              </div>
            )}
            {normal && (
              <div className="rounded-lg border border-[#B3CFBD] bg-[#EBEEF7] px-3 py-2 text-[#385E27]">
                <p className="font-bold">{day === "Thu" ? "CMSC 126L" : day === "Mon" ? "STAT 101" : "HIST 1"}</p>
                <p className="mt-1 text-[11px]">Room assigned</p>
              </div>
            )}
            {pe && (
              <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-amber-700">
                <p className="font-bold">PE 2</p>
                <p className="mt-1 text-[11px]">Gym</p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
