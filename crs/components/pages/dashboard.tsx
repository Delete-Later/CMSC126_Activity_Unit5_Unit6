import Link from "next/link";
import { AlertTriangle, BookOpen, ClipboardList, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageShell, StatusBadge } from "./shared/page-layout";
import { StatCard } from "./shared/stat-card";

export function DashboardPage() {
  return (
    <PageShell eyebrow="Student portal" title="Dashboard">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={ClipboardList}
          label="Enlistment Status"
          note="Adviser action pending"
          value="For review"
          tone="warning"
        />
        <StatCard
          icon={BookOpen}
          label="Units"
          note="Maximum regular load"
          value="18"
          tone="success"
        />
        <StatCard
          icon={AlertTriangle}
          label="Conflicts"
          note="Check Tuesday schedule"
          value="1"
          tone="primary"
        />
        <StatCard
          icon={ClipboardList}
          label="Accountabilities"
          note="Clearance requirements"
          value="2 pending"
          tone="warning"
        />
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Checklist</CardTitle>
          <CardDescription>
            Complete the required steps before adviser review.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            ["Update student profile", "Done", "success"],
            ["Select target subjects", "Done", "success"],
            ["Run schedule conflict check", "Needs action", "danger"],
            ["Submit for adviser review", "Locked", "warning"],
          ].map(([label, status, tone]) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl border border-border bg-background px-4 py-3"
            >
              <div className="grid size-8 place-items-center rounded-full border border-border text-xs font-semibold text-foreground">
                •
              </div>
              <p className="flex-1 text-sm font-medium">{label}</p>
              <StatusBadge tone={tone as "success" | "warning" | "danger"}>
                {status}
              </StatusBadge>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageShell>
  );
}
