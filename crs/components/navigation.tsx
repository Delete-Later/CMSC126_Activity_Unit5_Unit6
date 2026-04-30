import {
  CalendarDays,
  GraduationCap,
  LayoutDashboard,
  Search,
  type LucideIcon,
} from "lucide-react";

export type AppRoute = "/dashboard" | "/enlistment" | "/schedule" | "/grades";

export type NavItem = {
  href: AppRoute;
  icon: LucideIcon;
  label: string;
};

export const navItems: NavItem[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/enlistment",
    label: "Enlistment",
    icon: Search,
  },
  {
    href: "/schedule",
    label: "Schedule",
    icon: CalendarDays,
  },
  {
    href: "/grades",
    label: "Grades",
    icon: GraduationCap,
  },
];
