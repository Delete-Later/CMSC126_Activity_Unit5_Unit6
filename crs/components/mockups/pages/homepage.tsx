"use client";

import {
  Building2,
  CalendarDays,
  ClipboardList,
  FileText,
  ShieldCheck,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { InfoCard, PublicHeader, SectionHeading, StatusPill, type NavigateToScreen } from "../shared";

const quickAccess: Array<{
  description: string;
  icon: LucideIcon;
  title: string;
}> = [
  { title: "Student", description: "Login to enlist, check schedule conflicts, and view assessment.", icon: UserRound },
  { title: "Faculty", description: "Access class lists, advising, and grade tools.", icon: Building2 },
  { title: "Admin", description: "Registrar and college office functions.", icon: ShieldCheck },
  { title: "Calendars", description: "Academic calendar and registration flowcharts.", icon: CalendarDays },
  { title: "Forms", description: "LOA, dropping, change of matriculation, shifting, and requests.", icon: FileText },
  { title: "Help", description: "Contact crs.upvisayas@up.edu.ph or OUR local 190.", icon: ClipboardList },
];

export function Homepage({ onNavigate }: { onNavigate: NavigateToScreen }) {
  return (
    <section className="min-h-[1024px] bg-[#f7f8fa]">
      <PublicHeader onNavigate={onNavigate} />

      <div className="grid grid-cols-[1fr_390px] gap-12 bg-[#fffdf8] px-16 py-14">
        <div>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-normal text-[#551011]">
            Computerized Registration and Student Information System
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A modern UPV CRS portal concept for registration, student records, schedule checking, assessment,
            and academic service requests.
          </p>
          <div className="mt-7 flex gap-3">
            <button
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#7B1113] px-5 text-sm font-semibold text-white"
              type="button"
              onClick={() => onNavigate("login")}
            >
              <UserRound className="size-4" />
              Open Student Portal
            </button>
            <button
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-[#7B1113] bg-white px-5 text-sm font-semibold text-[#7B1113]"
              type="button"
            >
              <CalendarDays className="size-4" />
              View Academic Calendar
            </button>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-lg font-bold">Enrollment Window</p>
              <p className="mt-1 text-sm text-slate-500">Second Semester AY 2025-2026</p>
            </div>
            <StatusPill tone="green">Open</StatusPill>
          </div>
          <div className="mt-7 h-2 rounded-full bg-slate-200">
            <div className="h-2 w-2/3 rounded-full bg-[#567E3A]" />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="font-semibold text-[#567E3A]">Pre-registration</p>
              <p className="text-slate-500">In progress</p>
            </div>
            <div>
              <p className="font-semibold text-slate-600">General registration</p>
              <p className="text-slate-500">Next window</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-600">
            Students should confirm enlisted courses and check conflicts before adviser review.
          </p>
        </div>
      </div>

      <div className="px-16 py-12">
        <SectionHeading title="Registrar announcements" subtitle="Current public information and student reminders" />
        <div className="mt-7 grid grid-cols-3 gap-7">
          <InfoCard
            accent="bg-[#7B1113]"
            label="Enrollment"
            title="General Registration"
            text="Registration for Second Semester AY 2025-2026 opens by college priority schedule. Complete pre-enlistment before adviser review."
          />
          <InfoCard
            accent="bg-[#567E3A]"
            label="Pre-enlistment"
            title="Pre-registration of Subjects"
            text="Continuing students should check assigned schedules and confirm selected subjects before the deadline."
          />
          <InfoCard
            accent="bg-blue-700"
            label="Forms"
            title="Academic Document Requests"
            text="Transcript, certification, honorable dismissal, and registrar requests are grouped under online service forms."
          />
        </div>

        <SectionHeading className="mt-14" title="Quick access" subtitle="Public CRS actions and reference materials" />
        <div className="mt-7 grid grid-cols-3 gap-5">
          {quickAccess.map((item, index) => (
            <div key={item.title} className="flex min-h-20 items-center gap-4 rounded-lg border border-slate-200 bg-white p-4">
              <div className={cn("grid size-10 place-items-center rounded-lg text-white", index === 0 ? "bg-[#7B1113]" : "bg-[#567E3A]")}>
                <item.icon className="size-4" />
              </div>
              <div>
                <p className="font-bold">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
