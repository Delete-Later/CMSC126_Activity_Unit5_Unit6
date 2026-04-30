"use client";

import { FileText } from "lucide-react";

import { cn } from "@/lib/utils";

import { PageTitle, Panel, PortalShell, StatusPill, requestForms, type NavigateToScreen } from "../shared";

export function RequestsForms({ onNavigate }: { onNavigate: NavigateToScreen }) {
  return (
    <PortalShell active="requests" onNavigate={onNavigate}>
      <PageTitle
        title="Requests / Forms"
        subtitle="Start registrar, college, health, and student affairs requests from one organized page."
      />

      <Panel className="mt-8" title="Request categories">
        <div className="flex gap-4">
          <StatusPill tone="maroon">Academic</StatusPill>
          <StatusPill tone="green">Documents</StatusPill>
          <StatusPill tone="blue">Health</StatusPill>
          <StatusPill tone="amber">Student Affairs</StatusPill>
        </div>
      </Panel>

      <Panel className="mt-8" title="Academic request forms">
        <div className="grid grid-cols-2 gap-5">
          {requestForms.map(([title, description, category]) => (
            <div key={title} className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4">
              <div
                className={cn(
                  "grid size-10 place-items-center rounded-lg text-white",
                  category === "Academic"
                    ? "bg-[#7B1113]"
                    : category === "Documents"
                      ? "bg-[#567E3A]"
                      : category === "Health"
                        ? "bg-blue-700"
                        : "bg-amber-700",
                )}
              >
                <FileText className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-bold">{title}</p>
                <p className="mt-1 text-sm text-slate-500">{description}</p>
              </div>
              <button className="h-9 rounded-lg border border-[#7B1113] px-4 text-sm font-semibold text-[#7B1113]">
                Start
              </button>
            </div>
          ))}
        </div>
      </Panel>
    </PortalShell>
  );
}
