
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SkillsFormProps {
  formData: any;
  updateFormData: (section: string, data: any) => void;
}

export default function SkillsForm({ formData, updateFormData }: SkillsFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Convert comma-separated string to array when updating
    const value = e.target.value;
    const skillsArray = value ? value.split(',').map(skill => skill.trim()) : [];
    
    updateFormData("skills", {
      ...formData,
      [e.target.name]: skillsArray
    });
  };

  // Convert arrays back to strings for input display
  const technicalSkillsString = Array.isArray(formData.technical) 
    ? formData.technical.join(', ') 
    : formData.technicalSkills || '';
    
  const nonTechnicalSkillsString = Array.isArray(formData.nonTechnical) 
    ? formData.nonTechnical.join(', ') 
    : formData.nonTechnicalSkills || '';

  return (
    <div className="form-section section-animation">
      <h2 className="form-section-title flex items-center">
        <span className="w-5 h-5 rounded-full bg-resume-primary flex items-center justify-center text-white mr-2">
          <span className="text-xs font-bold">⚙️</span>
        </span>
        Skills
      </h2>

      <div className="grid grid-cols-1 gap-6">
        <TooltipProvider>
          <div className="input-group">
            <div className="flex justify-between">
              <Label htmlFor="technicalSkills">Technical Skills</Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    List your programming languages, frameworks, tools, databases, etc.
                    Separate skills with commas.
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input
              id="technicalSkills"
              name="technicalSkills"
              placeholder="JavaScript, React, Node.js, Python, SQL, Git, AWS"
              className="mt-1"
              value={technicalSkillsString}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <div className="flex justify-between">
              <Label htmlFor="nonTechnicalSkills">Non-Technical Skills / Soft Skills</Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    List your soft skills such as communication, leadership, teamwork, etc.
                    Separate skills with commas.
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input
              id="nonTechnicalSkills"
              name="nonTechnicalSkills"
              placeholder="Communication, Leadership, Team Collaboration, Problem-solving"
              className="mt-1"
              value={nonTechnicalSkillsString}
              onChange={handleChange}
            />
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
}
