import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Calendar */}
      <DayPicker
        showOutsideDays={showOutsideDays}
        captionLayout="dropdown"
        fromYear={1950}
        toYear={new Date().getFullYear()}
        className={cn("p-1 text-xs", className)} // Reduced padding and font size
        classNames={{
          months: "flex flex-col sm:flex-row space-y-1 sm:space-x-1 sm:space-y-0",
          month: "space-y-1",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-xs font-medium",
          caption_dropdowns: "flex justify-center gap-1",
          dropdown:
            "bg-background text-foreground dark:bg-muted dark:text-white rounded-md border border-input px-1 py-0.5 text-xs shadow-sm focus:outline-none focus:ring-1 focus:ring-ring",
          dropdown_icon: "text-foreground",
          nav: "space-x-1 flex items-center",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-5 w-5 bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-0.5",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-6 font-normal text-[0.6rem]",
          row: "flex w-full mt-0.5",
          cell: "h-6 w-6 text-center text-[0.6rem] p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-6 w-6 p-0 font-normal aria-selected:opacity-100"
          ),
          day_range_end: "day-range-end",
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
          day_outside:
            "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: ({ ..._props }) => <ChevronLeft className="h-3 w-3" />,
          IconRight: ({ ..._props }) => <ChevronRight className="h-3 w-3" />,
        }}
        {...props}
      />
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar };