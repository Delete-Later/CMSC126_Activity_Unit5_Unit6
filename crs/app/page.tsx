"use client";

import { useState } from "react";
import { type LucideIcon } from "lucide-react";

import { CourseSearchEnlistment } from "@/components/mockups/pages/course-search-enlistment";
import { GradesAssessment } from "@/components/mockups/pages/grades-assessment";
import { Homepage } from "@/components/mockups/pages/homepage";
import { RequestsForms } from "@/components/mockups/pages/requests-forms";
import { ScheduleConflictCheck } from "@/components/mockups/pages/schedule-conflict-check";
import { StudentDashboard } from "@/components/mockups/pages/student-dashboard";
import { StudentLogin } from "@/components/mockups/pages/student-login";
import { screens, type ScreenKey } from "@/components/mockups/shared";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const [screen, setScreen] = useState<ScreenKey>("home");

  return (
    <main className="min-h-screen bg-[#f3f5f7] text-slate-950">
      <div className="flex min-h-screen">
        <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r border-slate-200 bg-white px-5 py-6 lg:block">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-lg bg-[#7B1113] text-sm font-bold text-white">
              UPV
            </div>
            <div>
              <p className="text-base font-bold text-[#551011]">CRS 2.0 Mockups</p>
              <p className="text-xs text-slate-500">Desktop UI prototype</p>
            </div>
          </div>

          <nav className="mt-8 space-y-2">
            {screens.map((item) => (
              <ScreenNavButton
                key={item.key}
                current={screen}
                icon={item.icon}
                item={item.key}
                label={item.label}
                onSelect={setScreen}
              />
            ))}
          </nav>
        </aside>

        <div className="min-w-0 flex-1 px-4 py-4 md:px-8 md:py-8">
          <div className="mx-auto max-w-[1440px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            {screen === "home" && <Homepage onNavigate={setScreen} />}
            {screen === "login" && <StudentLogin onNavigate={setScreen} />}
            {screen === "dashboard" && <StudentDashboard onNavigate={setScreen} />}
            {screen === "enlistment" && <CourseSearchEnlistment onNavigate={setScreen} />}
            {screen === "schedule" && <ScheduleConflictCheck onNavigate={setScreen} />}
            {screen === "grades" && <GradesAssessment onNavigate={setScreen} />}
            {screen === "requests" && <RequestsForms onNavigate={setScreen} />}
          </div>
        </div>
      </div>
    </main>
  );
}

function ScreenNavButton({
  current,
  icon: Icon,
  item,
  label,
  onSelect,
}: {
  current: ScreenKey;
  icon: LucideIcon;
  item: ScreenKey;
  label: string;
  onSelect: (screen: ScreenKey) => void;
}) {
  const active = current === item;

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className={cn(
        "flex h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm font-medium transition",
        active
          ? "border border-[#B3CFBD] bg-[#EBEEF7] text-[#7B1113]"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
      )}
    >
      <Icon className="size-4" />
      <span>{label}</span>
    </button>
  );
}
