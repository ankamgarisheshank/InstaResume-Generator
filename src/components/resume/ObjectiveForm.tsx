import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ObjectiveFormProps {
  formData: any;
  updateFormData: (section: string, data: any) => void;
}

export default function ObjectiveForm({ formData, updateFormData }: ObjectiveFormProps) {
  const [textareaHeight, setTextareaHeight] = useState<number>(128); // Default height in pixels (128px = h-32)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, scrollHeight } = e.target;

    // Dynamically adjust the height of the Textarea
    setTextareaHeight(scrollHeight);

    updateFormData("objective", {
      ...formData,
      objective: value,
    });
  };

  return (
    <div className="form-section section-animation">
      <h2 className="form-section-title flex items-center">
        <span className="w-5 h-5 rounded-full bg-resume-primary flex items-center justify-center text-white mr-2">
          <span className="text-xs font-bold">✓</span>
        </span>
        Objective / Career Summary
      </h2>

      <div className="input-group">
        <div className="flex justify-between">
          <Label htmlFor="objective">Career Objective</Label>
                    <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-gray-400 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">
                  Write a brief summary of your career goals, skills, and what you bring to the job.
                  Keep it concise (2-4 sentences) and tailor it to your target position.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Textarea
          id="objective"
          className="mt-2 resize-none overflow-hidden"
          style={{ height: `${textareaHeight}px` }} // Dynamically set height
          placeholder="Dedicated and detail-oriented software engineer with 3+ years of experience in full-stack development. Seeking to leverage my technical skills and problem-solving abilities in a challenging role that allows me to create innovative solutions and contribute to team success."
          value={formData.objective || ""}
          onChange={handleChange}
        />
        <div className="text-xs text-gray-500 mt-1 text-right">
          {formData.objective ? formData.objective.length : 0}/400 characters
        </div>
      </div>
    </div>
  );
}