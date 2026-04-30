"use client";

import { AlertTriangle, BookOpen, CalendarDays, Clock, FileText, GraduationCap, Search, Wallet } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  ActionButton,
  PageTitle,
  Panel,
  PortalShell,
  SchedulePreviewRow,
  StatCard,
  StatusPill,
  type NavigateToScreen,
} from "../shared";

export function StudentDashboard({ onNavigate }: { onNavigate: NavigateToScreen }) {
  return (
    <PortalShell active="dashboard" onNavigate={onNavigate}>
      <PageTitle
        title="Student Dashboard"
        subtitle="Welcome back, Maria. Complete the checklist before submitting for adviser review."
      />

      <div className="mt-8 grid grid-cols-4 gap-6">
        <StatCard icon={Clock} label="Status" note="Adviser action pending" tone="amber" value="For Review" />
        <StatCard icon={BookOpen} label="Units" note="Maximum regular load" tone="green" value="18" />
        <StatCard icon={AlertTriangle} label="Conflicts" note="Check Tuesday schedule" tone="red" value="1" />
        <StatCard icon={Wallet} label="Balance" note="Assessment generated" tone="blue" value="PHP 0.00" />
      </div>

      <div className="mt-8 grid grid-cols-[500px_1fr] gap-8">
        <Panel title="Registration checklist">
          <div className="space-y-5">
            {[
              ["1", "Update student profile", "Done", "green"],
              ["2", "Select target subjects", "Done", "green"],
              ["3", "Run schedule conflict check", "Needs action", "red"],
              ["4", "Submit for adviser review", "Locked", "amber"],
            ].map(([step, label, status, tone]) => (
              <div key={step} className="flex items-center gap-4">
                <div
                  className={cn(
                    "grid size-8 place-items-center rounded-full text-xs font-bold",
                    tone === "green" ? "bg-[#567E3A] text-white" : "border border-slate-300 text-slate-500",
                  )}
                >
                  {step}
                </div>
                <p className="flex-1 text-sm font-medium">{label}</p>
                <StatusPill tone={tone as "green" | "red" | "amber"}>{status}</StatusPill>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Quick actions">
          <div className="grid grid-cols-2 gap-4">
            <ActionButton icon={Search} label="Course Search / Enlistment" onClick={() => onNavigate("enlistment")} />
            <ActionButton icon={CalendarDays} label="Schedule Conflict Check" onClick={() => onNavigate("schedule")} tone="green" />
            <ActionButton icon={GraduationCap} label="Grades and Assessment" onClick={() => onNavigate("grades")} tone="deep" />
            <ActionButton icon={FileText} label="Requests and Forms" onClick={() => onNavigate("requests")} tone="outline" />
          </div>
          <div className="mt-8 rounded-lg border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
            Resolve 1 schedule conflict before final submission.
          </div>
        </Panel>
      </div>

      <Panel className="mt-8" title="Today and week preview">
        <div className="grid grid-cols-[72px_repeat(5,1fr)] gap-0 text-sm">
          <div />
          {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
            <div key={day} className="border-b border-slate-200 pb-3 text-center text-xs font-bold text-[#551011]">
              {day}
            </div>
          ))}
          {["08:00", "10:00", "13:00", "15:00"].map((time) => (
            <SchedulePreviewRow key={time} time={time} />
          ))}
        </div>
      </Panel>
    </PortalShell>
  );
}
