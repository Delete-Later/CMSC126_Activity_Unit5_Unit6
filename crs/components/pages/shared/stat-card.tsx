import type { ComponentType } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function StatCard({
  icon: Icon,
  label,
  note,
  value,
  tone,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  note: string;
  value: string;
  tone: "primary" | "success" | "warning" | "info";
}) {
  return (
    <Card>
      <CardContent className="p-5">
        <div
          className={cn(
            "grid size-10 place-items-center rounded-xl",
            tone === "primary" && "bg-primary text-primary-foreground",
            tone === "success" && "bg-emerald-600 text-white",
            tone === "warning" && "bg-amber-500 text-white",
            tone === "info" && "bg-sky-600 text-white",
          )}
        >
          <Icon className="size-4" />
        </div>
        <p className="mt-4 text-sm font-medium text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 text-2xl font-semibold text-foreground">{value}</p>
        <p className="mt-1 text-xs text-muted-foreground">{note}</p>
      </CardContent>
    </Card>
  );
}
