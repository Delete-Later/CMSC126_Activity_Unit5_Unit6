import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-8">
      <div>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            {title}
          </h1>
        ) : null}
        {subtitle ? (
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
            {subtitle}
          </p>
        ) : null}
      </div>
      {children}
    </div>
  );
}

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}

export function StatusBadge({
  children,
  tone,
}: {
  children: ReactNode;
  tone: "primary" | "success" | "warning" | "info" | "danger";
}) {
  return (
    <Badge
      variant="outline"
      className={cn(
        tone === "primary" && "border-primary/20 bg-primary/10 text-primary",
        tone === "success" &&
          "border-emerald-200 bg-emerald-50 text-emerald-700",
        tone === "warning" && "border-amber-200 bg-amber-50 text-amber-700",
        tone === "info" && "border-sky-200 bg-sky-50 text-sky-700",
        tone === "danger" && "border-red-200 bg-red-50 text-red-700",
      )}
    >
      {children}
    </Badge>
  );
}
