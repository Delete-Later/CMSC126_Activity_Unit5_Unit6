import {
  BookOpen,
  CheckCircle2,
  ClipboardList,
  FileText,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { PageShell } from "./shared/page-layout";
import { StatCard } from "./shared/stat-card";
import { StatusBadge } from "./shared/page-layout";

export function GradesPage() {
  return (
    <PageShell eyebrow="Records" title="Grades">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={GraduationCap}
          label="GWA"
          note="Previous completed term"
          value="1.75"
          tone="primary"
        />
        <StatCard
          icon={GraduationCap}
          label="Cumulative GWA"
          note="All terms"
          value="2.1"
          tone="warning"
        />
        <StatCard
          icon={BookOpen}
          label="Units earned"
          note="Credited academic units"
          value="84"
          tone="success"
        />
        <StatCard
          icon={ClipboardList}
          label="Current units"
          note="Assessed this term"
          value="18"
          tone="info"
        />
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Grades</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Units</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Remarks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["CMSC 125", "Operating Systems", "3", "1.75", "Passed"],
                ["CMSC 127", "Database Systems", "3", "1.50", "Passed"],
                ["MATH 55", "Discrete Mathematics", "3", "IP", "Current"],
                ["STAT 101", "Intro Statistics", "3", "IP", "Current"],
                ["HIST 1", "Philippine History", "3", "IP", "Current"],
              ].map((row) => (
                <TableRow key={row[0]}>
                  <TableCell className="font-medium">{row[0]}</TableCell>
                  <TableCell>{row[1]}</TableCell>
                  <TableCell>{row[2]}</TableCell>
                  <TableCell>{row[3]}</TableCell>
                  <TableCell>
                    <StatusBadge
                      tone={row[4] === "Passed" ? "success" : "info"}
                    >
                      {row[4]}
                    </StatusBadge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </PageShell>
  );
}
