import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageShell } from "./shared/page-layout";

export function LoginPage() {
  return (
    <PageShell>
      <div className="w-full min-h-120 flex items-center justify-center">
        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
            <CardDescription>
              Enter your credentials to access the portal.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="student-id">Student ID</Label>
              <div className="grid grid-cols-[120px_1fr] gap-3">
                <Input id="student-id" placeholder="Year" defaultValue="2022" />
                <Input placeholder="ID number" defaultValue="12345" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                defaultValue="password"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Select defaultValue="student">
                <SelectTrigger id="role" className="w-full">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="faculty">Faculty</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button asChild className="w-full">
              <Link href="/dashboard">Sign in</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
