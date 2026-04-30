import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageShell, StatusBadge } from "./shared/page-layout";
import { ScheduleRow } from "./shared/schedule-row";

export function SchedulePage() {
  return (
    <PageShell eyebrow="Conflict review" title="Schedule">
      <section className="rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
        <div className="flex items-center gap-3">
          <AlertTriangle className="size-5" />
          <p className="font-semibold">1 schedule conflict found</p>
        </div>
        <p className="mt-2 text-sm">
          CMSC 126 and MATH 55 overlap on Tuesday from 10:00 AM to 11:30 AM.
        </p>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_320px]">
        <Card>
          <CardHeader>
            <CardTitle>Timetable</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-[72px_repeat(5,minmax(0,1fr))] overflow-hidden rounded-xl border border-border text-xs">
              <div className="bg-muted" />
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                <div
                  key={day}
                  className="border-l border-border bg-primary/10 px-3 py-3 text-center font-semibold text-primary"
                >
                  {day}
                </div>
              ))}
              {[
                "08:00",
                "09:00",
                "10:00",
                "11:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
              ].map((time) => (
                <ScheduleRow key={time} time={time} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conflict summary</CardTitle>
            <CardDescription>
              Suggested alternatives for the overlapping class blocks.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <StatusBadge tone="danger">Needs action</StatusBadge>
            <div className="space-y-3">
              {[
                ["CMSC 126", "Tue 10:00-11:30"],
                ["MATH 55", "Tue 10:00-11:30"],
              ].map(([course, schedule]) => (
                <div
                  key={course}
                  className="rounded-xl border border-red-200 bg-red-50 p-3"
                >
                  <p className="text-sm font-medium text-red-700">{course}</p>
                  <p className="mt-1 text-xs text-red-600">{schedule}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {[
                "MATH 55 A2 - Wed 10:00",
                "CMSC 126 B - Mon 13:00",
                "MATH 55 C - Fri 08:30",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-border bg-background p-3 text-sm font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
            <Button asChild className="w-full">
              <Link href="/enlistment">Resolve conflict</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </PageShell>
  );
}
