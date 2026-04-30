"use client";

import { ListChecks, Search } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  DataTable,
  PageTitle,
  Panel,
  PortalShell,
  StatusPill,
  selectedCourses,
  type NavigateToScreen,
} from "../shared";

export function CourseSearchEnlistment({ onNavigate }: { onNavigate: NavigateToScreen }) {
  return (
    <PortalShell active="enlistment" onNavigate={onNavigate}>
      <PageTitle
        title="Course Search / Enlistment"
        subtitle="Search available sections, check slots, and add candidate courses before final conflict review."
      />

      <Panel className="mt-8" title="Search filters">
        <div className="grid grid-cols-[repeat(4,1fr)_128px] gap-5">
          {[
            ["Subject", "CMSC"],
            ["College", "CAS"],
            ["Schedule", "Any day"],
            ["Availability", "Open slots"],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-xs font-semibold text-slate-500">{label}</p>
              <div className="mt-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm">{value}</div>
            </div>
          ))}
          <button className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#7B1113] text-sm font-semibold text-white">
            <Search className="size-4" />
            Search
          </button>
        </div>
      </Panel>

      <div className="mt-8 grid grid-cols-[1fr_284px] gap-8">
        <Panel title="Available sections">
          <DataTable
            columns={["Course", "Title", "Schedule", "Slots", "Status"]}
            rows={[
              ["CMSC 126", "Web Engineering", "Tue 10:00-11:30", "18 / 30", "Added"],
              ["CMSC 126L", "Web Engineering Lab", "Thu 13:00-16:00", "12 / 24", "Open"],
              ["MATH 55", "Discrete Mathematics", "Tue 10:00-11:30", "5 / 35", "Conflict"],
              ["STAT 101", "Intro Statistics", "Mon 08:30-10:00", "9 / 40", "Open"],
              ["PE 2", "Team Sports", "Fri 15:00-17:00", "3 / 30", "Waitlist"],
              ["HIST 1", "Philippine History", "Wed 14:30-16:00", "0 / 40", "Closed"],
            ]}
          />
        </Panel>

        <Panel title="Selected courses">
          <StatusPill tone="green">18 units</StatusPill>
          <div className="mt-6 space-y-3">
            {selectedCourses.map(([course, , schedule, units, status]) => (
              <div
                key={course}
                className={cn(
                  "rounded-lg border p-3",
                  status === "Conflict" ? "border-red-200 bg-red-50" : "border-slate-200 bg-white",
                )}
              >
                <p className={cn("text-sm font-bold", status === "Conflict" ? "text-red-700" : "text-slate-950")}>{course}</p>
                <p className={cn("mt-1 text-xs", status === "Conflict" ? "text-red-600" : "text-slate-500")}>
                  {units} | {schedule}
                </p>
              </div>
            ))}
          </div>
          <button
            className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#567E3A] text-sm font-semibold text-white"
            type="button"
            onClick={() => onNavigate("schedule")}
          >
            <ListChecks className="size-4" />
            Run Conflict Check
          </button>
        </Panel>
      </div>
    </PortalShell>
  );
}
