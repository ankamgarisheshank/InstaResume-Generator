
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { format } from "date-fns";
import { CalendarIcon, Info } from "lucide-react";

interface DateOfBirthFieldProps {
  date: Date | undefined;
  handleDateSelect: (date: Date | undefined) => void;
}

export default function DateOfBirthField({ date, handleDateSelect }: DateOfBirthFieldProps) {
  return (
    <TooltipProvider>
      <div className="input-group">
        <div className="flex justify-between">
          <label htmlFor="dob">Date of Birth</label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-gray-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Optional - You may choose to exclude this from your resume</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="dob"
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal mt-1",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              initialFocus
              disabled={(date) => date > new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>
    </TooltipProvider>
  );
}
