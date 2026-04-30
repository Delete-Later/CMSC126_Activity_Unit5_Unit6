import Link from "next/link";
import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { PageShell, StatusBadge } from "./shared/page-layout";
import { selectedCourses } from "./shared/constants";

export function EnlistmentPage() {
  return (
    <PageShell eyebrow="Enrollment" title="Enlistment">
      <section className="grid gap-6 xl:grid-cols-[1fr_300px]">
        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row items-center justify-between gap-3">
              <Input className="w-full" defaultValue="CMSC" />
              <Select defaultValue="cas">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cas">CAS</SelectItem>
                  <SelectItem value="cics">CICS</SelectItem>
                  <SelectItem value="cof">COF</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="any">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any time</SelectItem>
                  <SelectItem value="morn">AM</SelectItem>
                  <SelectItem value="aft">PM</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="open">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="waitlist">Waitlist</SelectItem>
                  <SelectItem value="all">All</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Search className="size-4" />
              </Button>
            </div>
            <div className="text-center my-4">No results found.</div>
          </CardContent>
        </Card>

        {/* Selected */}
        <Card>
          <CardHeader>
            <CardTitle>Selected</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Total</span>
              <span className="font-semibold">18 units</span>
            </div>

            {selectedCourses.map(([course, , schedule, units, status]) => (
              <div
                key={course}
                className={cn(
                  "flex items-center justify-between rounded-lg border px-3 py-2 text-xs",
                  status === "Conflict" && "border-red-200 bg-red-50",
                )}
              >
                <div>
                  <p className="font-medium">{course}</p>
                  <p className="text-muted-foreground">
                    {units} • {schedule}
                  </p>
                </div>
                <StatusBadge
                  tone={
                    status === "Conflict"
                      ? "danger"
                      : status === "Waitlist"
                        ? "warning"
                        : "success"
                  }
                >
                  {status}
                </StatusBadge>
              </div>
            ))}

            <Button asChild size="sm" className="w-full">
              <Link href="/schedule">Check conflicts</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Results */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Sections</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Schedule</TableHead>
                  <TableHead>Slots</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["CMSC 126", "Tue 10:00–11:30", "18/30", "Added"],
                  ["CMSC 126L", "Thu 13:00–16:00", "12/24", "Open"],
                  ["MATH 55", "Tue 10:00–11:30", "5/35", "Conflict"],
                  ["STAT 101", "Mon 08:30–10:00", "9/40", "Open"],
                  ["PE 2", "Fri 15:00–17:00", "3/30", "Waitlist"],
                  ["HIST 1", "Wed 14:30–16:00", "0/40", "Closed"],
                ].map(([course, sched, slots, status]) => (
                  <TableRow key={course}>
                    <TableCell className="font-medium">{course}</TableCell>
                    <TableCell>{sched}</TableCell>
                    <TableCell>{slots}</TableCell>
                    <TableCell className="flex items-center gap-2">
                      <StatusBadge
                        tone={
                          status === "Conflict"
                            ? "danger"
                            : status === "Waitlist"
                              ? "warning"
                              : status === "Closed"
                                ? "info"
                                : "success"
                        }
                      >
                        {status}
                      </StatusBadge>
                      {status === "Open" && (
                        <Button size="icon" variant="ghost">
                          <Plus className="size-4" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </PageShell>
  );
}
