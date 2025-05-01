
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface BasicInfoFieldsProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BasicInfoFields({ formData, handleChange }: BasicInfoFieldsProps) {
  return (
    <TooltipProvider>
      <div className="input-group">
        <div className="flex justify-between">
          <Label htmlFor="fullName">Full Name</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-gray-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="w-80">Enter your full name as you'd like it to appear on your resume</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Input
          id="fullName"
          name="fullName"
          placeholder="Enter your full name"
          className="mt-1"
          value={formData.fullName || ""}
          onChange={handleChange}
        />
      </div>
    </TooltipProvider>
  );
}
