
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface PersonalInterestsFieldsProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PersonalInterestsFields({ formData, handleChange }: PersonalInterestsFieldsProps) {
  return (
    <>
      <TooltipProvider>
        <div className="input-group">
          <div className="flex justify-between">
            <Label htmlFor="languages">Languages Known</Label>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-gray-400 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Separate multiple languages with commas</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Input
            id="languages"
            name="languages"
            placeholder="English, Telugu, Hindi"
            className="mt-1"
            value={formData.languages || ""}
            onChange={handleChange}
          />
        </div>
      </TooltipProvider>

      <TooltipProvider>
        <div className="input-group">
          <div className="flex justify-between">
            <Label htmlFor="interests">Interests / Hobbies</Label>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-gray-400 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Separate multiple interests with commas</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Input
            id="interests"
            name="interests"
            placeholder="Reading, Photography, Hiking"
            className="mt-1"
            value={formData.interests || ""}
            onChange={handleChange}
          />
        </div>
      </TooltipProvider>
    </>
  );
}
