"use client";

import { LogIn } from "lucide-react";

import { InfoCard, PublicHeader, type NavigateToScreen } from "../shared";

export function StudentLogin({ onNavigate }: { onNavigate: NavigateToScreen }) {
  return (
    <section className="min-h-[1024px] bg-[#fafbfc]">
      <PublicHeader onNavigate={onNavigate} />
      <div className="grid grid-cols-[1fr_430px] gap-20 px-24 py-16">
        <div>
          <h1 className="text-5xl font-bold tracking-normal text-[#551011]">Student Portal</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Use your student number and CRS password to access registration, schedules, grades, assessment,
            and academic service requests.
          </p>
          <div className="mt-12 grid max-w-2xl gap-7">
            <InfoCard
              accent="bg-[#567E3A]"
              label="Reminder"
              title="Before logging in"
              text="Get your login account from your college, note the posted registration schedule, and keep your personal data updated before finalizing enrollment."
            />
            <InfoCard
              accent="bg-[#7B1113]"
              label="OUR Support"
              title="Need help?"
              text="For account problems, contact the Office of the University Registrar at crs.upvisayas@up.edu.ph or (033) 315-8556 local 190."
            />
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-9 shadow-sm">
          <h2 className="text-2xl font-bold text-[#551011]">Student&apos;s Login</h2>
          <p className="mt-2 text-sm text-slate-500">Enter your Student ID and password.</p>

          <label className="mt-8 block text-sm font-semibold">Student ID</label>
          <div className="mt-3 grid grid-cols-[120px_1fr] gap-3">
            <div className="rounded-lg border border-slate-300 px-4 py-3 text-sm">2022</div>
            <div className="rounded-lg border border-slate-300 px-4 py-3 text-sm">12345</div>
          </div>

          <label className="mt-6 block text-sm font-semibold">Password</label>
          <div className="mt-3 rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-500">********</div>

          <button
            className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#7B1113] text-sm font-semibold text-white"
            type="button"
            onClick={() => onNavigate("dashboard")}
          >
            <LogIn className="size-4" />
            Log in to CRS
          </button>

          <p className="mt-8 text-sm leading-6 text-slate-600">
            First login? Specify your degree program and update personal data before registration.
          </p>
          <div className="mt-5 rounded-lg border border-[#B3CFBD] bg-[#EBEEF7] px-4 py-3 text-sm font-medium text-[#385E27]">
            This mockup uses sample student data only.
          </div>
        </div>
      </div>
    </section>
  );
}
