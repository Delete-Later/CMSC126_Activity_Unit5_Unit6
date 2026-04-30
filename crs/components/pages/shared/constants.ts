export const quickAccess = [
  {
    title: "Student",
    description:
      "Login to enlist, check schedule conflicts, and view assessment.",
    icon: "UserRound",
  },
  {
    title: "Faculty",
    description: "Access class lists, advising, and grade tools.",
    icon: "ShieldCheck",
  },
  {
    title: "Calendars",
    description: "Academic dates and registration timelines.",
    icon: "CalendarDays",
  },
  {
    title: "Help",
    description: "Contact the registrar and college offices for support.",
    icon: "ClipboardList",
  },
  {
    title: "Assessment",
    description: "Review current enrollment and balance at a glance.",
    icon: "Wallet",
  },
] as const;

export const selectedCourses = [
  ["CMSC 126", "Web Engineering", "Tue 10:00-11:30", "3 units", "Added"],
  ["CMSC 126L", "Web Engineering Lab", "Thu 13:00-16:00", "1 unit", "Open"],
  ["MATH 55", "Discrete Mathematics", "Tue 10:00-11:30", "3 units", "Conflict"],
  ["STAT 101", "Intro Statistics", "Mon 08:30-10:00", "3 units", "Open"],
  ["HIST 1", "Philippine History", "Wed 14:30-16:00", "3 units", "Open"],
  ["PE 2", "Team Sports", "Fri 15:00-17:00", "2 units", "Waitlist"],
] as const;

export const requestForms = [
  [
    "Change of Matriculation",
    "Add, cancel, or change enrolled subjects after registration.",
    "Academic",
  ],
  [
    "Dropping of Subject",
    "Request dropping approval and route to the correct office.",
    "Academic",
  ],
  [
    "Leave of Absence",
    "Submit LOA application with required endorsement.",
    "Academic",
  ],
  [
    "Cross-registration",
    "Request permission to take courses in another UP constituent university.",
    "Academic",
  ],
  [
    "Official Transcript",
    "Request transcript processing and release schedule.",
    "Documents",
  ],
  [
    "Certificate Request",
    "Good moral, enrollment, graduation, and related certifications.",
    "Documents",
  ],
  [
    "Health Examination",
    "Entrance or periodic health examination forms.",
    "Health",
  ],
  [
    "Dormitory Application",
    "Residential Services Unit application and supporting forms.",
    "Student Affairs",
  ],
] as const;
