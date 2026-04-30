export function ScheduleRow({ time }: { time: string }) {
  return (
    <>
      <div className="border-t border-border bg-muted px-3 py-4 text-muted-foreground">
        {time}
      </div>
      {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => {
        const conflict = day === "Tue" && time === "10:00";
        const course = day === "Thu" && time === "13:00";

        return (
          <div
            key={`${time}-${day}`}
            className="min-h-16 border-l border-t border-border p-2"
          >
            {conflict ? (
              <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700">
                CMSC 126 / MATH 55
              </div>
            ) : null}
            {course ? (
              <div className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-2 text-xs font-medium text-primary">
                CMSC 126L
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
}
