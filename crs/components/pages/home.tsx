import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageShell, SectionHeading, StatusBadge } from "./shared/page-layout";

type Announcement = {
  id: number;
  title: string;
  description: string;
  content: string;
};

const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 1,
    title: "Dorm Application",
    description: "OSA-RSU now accepting applications",
    content:
      "Open to all year levels for AY 2025–2026. Deadline of submission is May 9, 2025.",
  },
  {
    id: 2,
    title: "General Registration",
    description: "Second Semester AY 2024–2025",
    content:
      "Registration runs from January 13–17, 2025 based on college priority schedules.",
  },
  {
    id: 3,
    title: "Subject Confirmation",
    description: "Second Semester AY 2024–2025",
    content: "Students must confirm enlisted subjects from January 6–10, 2025.",
  },
  {
    id: 4,
    title: "Alumni ID Application",
    description: "For UPV graduates",
    content:
      "Apply online for the official UPV Alumni ID. Fee is ₱300 with optional alumni membership.",
  },
  {
    id: 5,
    title: "Online Payment of Fees",
    description: "New payment option available",
    content:
      "Students may pay via Maya QRPH or supported banks. Email proof of payment after transaction.",
  },
  {
    id: 6,
    title: "Zero-Contact Policy",
    description: "Registrar transactions",
    content:
      "All requests must be processed via the online academic document request portal.",
  },
];

export function HomePage() {
  return (
    <PageShell>
      <section className="grid gap-6 xl:grid-cols-[1.45fr_0.95fr]">
        <Card className="overflow-hidden border-primary/15 bg-linear-to-br from-primary/10 via-background to-background">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-primary">
              Student Portal
            </CardTitle>
            <CardDescription className="text-base">
              Manage your registration, view your schedule, and check grades.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/login">
                Go to Portal
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div>
                <CardTitle className="font-bold text-xl">
                  Enrollment Window
                </CardTitle>
                <CardDescription>Second Semester AY 2025-2026</CardDescription>
              </div>
              <StatusBadge tone="success">Open</StatusBadge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-2 rounded-full bg-muted">
              <div className="h-2 w-2/3 rounded-full bg-primary" />
            </div>
            <div className="grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="font-medium text-emerald-600">Pre-registration</p>
                <p className="mt-1 text-muted-foreground">In progress</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="font-medium text-foreground">
                  General registration
                </p>
                <p className="mt-1 text-muted-foreground">Next window</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              Students should confirm enlisted courses and check conflicts
              before adviser review.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <SectionHeading
          title="Registrar announcements"
          subtitle="Important dates and student reminders."
        />

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {ANNOUNCEMENTS.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
