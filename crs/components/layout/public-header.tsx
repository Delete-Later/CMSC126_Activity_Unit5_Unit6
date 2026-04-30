"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function PublicHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
            UPV
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              CRS
            </p>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          {pathname === "/" && (
            <>
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
            </>
          )}
          {pathname === "/login" && (
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
