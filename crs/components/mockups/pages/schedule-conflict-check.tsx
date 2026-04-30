"use client";

import { AlertTriangle, XCircle } from "lucide-react";

import { PageTitle, Panel, PortalShell, StatusPill, TimeGridRow, type NavigateToScreen } from "../shared";

export function ScheduleConflictCheck({ onNavigate }: { onNavigate: NavigateToScreen }) {
  return (
    <PortalShell active="schedule" onNavigate={onNavigate}>
      <PageTitle
        title="Schedule / Conflict Check"
        subtitle="Review selected classes against the weekly grid before submitting to your adviser."
      />

      <div className="mt-8 rounded-lg border border-red-200 bg-red-50 px-6 py-4">
        <div className="flex items-center gap-3 text-red-700">
          <AlertTriangle className="size-5" />
          <p className="font-bold">1 schedule conflict found</p>
        </div>
        <p className="mt-2 text-sm text-red-700">
          CMSC 126 and MATH 55 overlap on Tuesday from 10:00 AM to 11:30 AM.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-[1fr_300px] gap-8">
        <Panel title="Weekly timetable">
          <div className="grid grid-cols-[72px_repeat(5,minmax(0,1fr))] overflow-hidden rounded-lg border border-slate-200 text-xs">
            <div className="bg-slate-50" />
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
              <div key={day} className="border-l border-slate-200 bg-[#EBEEF7] px-3 py-3 text-center font-bold text-[#551011]">
                {day}
              </div>
            ))}
            {["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"].map((time) => (
              <TimeGridRow key={time} time={time} />
            ))}
          </div>
        </Panel>

        <Panel title="Conflict summary">
          <StatusPill tone="red">Needs action</StatusPill>
          <p className="mt-7 text-xs font-semibold uppercase tracking-wide text-slate-500">Overlapping sections</p>
          <div className="mt-3 space-y-3">
            {[
              ["CMSC 126", "Tue 10:00-11:30"],
              ["MATH 55", "Tue 10:00-11:30"],
            ].map(([course, schedule]) => (
              <div key={course} className="rounded-lg border border-red-200 bg-red-50 p-3">
                <p className="text-sm font-bold text-red-700">{course}</p>
                <p className="mt-1 text-xs text-red-600">{schedule}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-slate-500">Recommended alternatives</p>
          <div className="mt-3 space-y-3">
            {["MATH 55 A2 - Wed 10:00", "CMSC 126 B - Mon 13:00", "MATH 55 C - Fri 08:30"].map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-3 text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
          <button
            className="mt-8 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#7B1113] text-sm font-semibold text-white"
            type="button"
            onClick={() => onNavigate("enlistment")}
          >
            <XCircle className="size-4" />
            Resolve conflict
          </button>
        </Panel>
      </div>
    </PortalShell>
  );
}
