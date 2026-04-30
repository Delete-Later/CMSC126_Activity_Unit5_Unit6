"use client";

import { BookOpen, CheckCircle2, ClipboardList, FileText, GraduationCap } from "lucide-react";

import { cn } from "@/lib/utils";

import { DataTable, PageTitle, Panel, PortalShell, StatCard, StatusPill, type NavigateToScreen } from "../shared";

export function GradesAssessment({ onNavigate }: { onNavigate: NavigateToScreen }) {
  return (
    <PortalShell active="grades" onNavigate={onNavigate}>
      <PageTitle title="Grades / Assessment" subtitle="Review academic records, current assessed units, and payment summary." />

      <div className="mt-8 grid grid-cols-4 gap-6">
        <StatCard icon={GraduationCap} label="GWA" note="Previous completed term" tone="maroon" value="1.75" />
        <StatCard icon={BookOpen} label="Units earned" note="Credited academic units" tone="green" value="84" />
        <StatCard icon={ClipboardList} label="Current units" note="Assessed this term" tone="blue" value="18" />
        <StatCard icon={CheckCircle2} label="Payment" note="No outstanding balance" tone="green" value="Cleared" />
      </div>

      <div className="mt-8 grid grid-cols-[1fr_354px] gap-8">
        <Panel title="Term grades">
          <div className="mb-5 flex justify-end">
            <StatusPill tone="maroon">1st Sem AY 2025-2026</StatusPill>
          </div>
          <DataTable
            columns={["Course", "Title", "Units", "Grade", "Remarks"]}
            rows={[
              ["CMSC 125", "Operating Systems", "3", "1.75", "Passed"],
              ["CMSC 127", "Database Systems", "3", "1.50", "Passed"],
              ["MATH 55", "Discrete Mathematics", "3", "IP", "Current"],
              ["STAT 101", "Intro Statistics", "3", "IP", "Current"],
              ["HIST 1", "Philippine History", "3", "IP", "Current"],
            ]}
          />
        </Panel>

        <Panel title="Assessment summary">
          <div className="space-y-4">
            {[
              ["Tuition", "PHP 0.00"],
              ["Miscellaneous", "PHP 0.00"],
              ["Lab fees", "PHP 0.00"],
              ["Scholarship / subsidy", "Applied"],
              ["Total balance", "PHP 0.00"],
            ].map(([label, value], index) => (
              <div key={label} className="flex items-center justify-between border-b border-slate-200 pb-4">
                <p className={cn("text-sm", index === 4 ? "font-bold" : "text-slate-500")}>{label}</p>
                <p className={cn("text-sm font-bold", index === 4 ? "text-[#385E27]" : "text-slate-950")}>{value}</p>
              </div>
            ))}
          </div>
          <button className="mt-8 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#7B1113] text-sm font-semibold text-white">
            <FileText className="size-4" />
            Download assessment
          </button>
        </Panel>
      </div>
    </PortalShell>
  );
}
