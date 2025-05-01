
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Trash, Plus } from "lucide-react";

interface ExperienceFormProps {
  formData: any;
  updateFormData: (section: string, data: any) => void;
}

export default function ExperienceForm({ formData, updateFormData }: ExperienceFormProps) {
  const [experience, setExperience] = useState(formData.experience || [
    { company: "", role: "", duration: "", description: "" }
  ]);

  const handleChange = (index: number, field: string, value: string) => {
    const updatedExperience = [...experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value
    };
    setExperience(updatedExperience);
    updateFormData("experience", { experience: updatedExperience });
  };

  const addExperience = () => {
    const updatedExperience = [...experience, { company: "", role: "", duration: "", description: "" }];
    setExperience(updatedExperience);
    updateFormData("experience", { experience: updatedExperience });
  };

  const removeExperience = (index: number) => {
    const updatedExperience = experience.filter((_, i) => i !== index);
    setExperience(updatedExperience);
    updateFormData("experience", { experience: updatedExperience });
  };

  return (
    <div className="form-section section-animation">
      <h2 className="form-section-title flex items-center">
        <span className="w-5 h-5 rounded-full bg-resume-primary flex items-center justify-center text-white mr-2">
          <span className="text-xs font-bold">💼</span>
        </span>
        Work Experience
      </h2>

      {experience.map((exp: any, index: number) => (
        <div key={index} className="mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-medium text-gray-700 dark:text-gray-300">
              Experience #{index + 1}
            </h3>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              onClick={() => removeExperience(index)}
            >
              <Trash className="h-4 w-4" />
              <span className="sr-only">Remove experience</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="input-group">
              <Label htmlFor={`company-${index}`}>Company Name</Label>
              <Input
                id={`company-${index}`}
                placeholder="Google Inc."
                className="mt-1"
                value={exp.company}
                onChange={(e) => handleChange(index, "company", e.target.value)}
              />
            </div>

            <div className="input-group">
              <Label htmlFor={`role-${index}`}>Role / Position</Label>
              <Input
                id={`role-${index}`}
                placeholder="Senior Software Engineer"
                className="mt-1"
                value={exp.role}
                onChange={(e) => handleChange(index, "role", e.target.value)}
              />
            </div>

            <div className="input-group">
              <Label htmlFor={`duration-${index}`}>Duration</Label>
              <Input
                id={`duration-${index}`}
                placeholder="Jan 2020 - Present"
                className="mt-1"
                value={exp.duration}
                onChange={(e) => handleChange(index, "duration", e.target.value)}
              />
            </div>

            <div className="input-group sm:col-span-2">
              <Label htmlFor={`description-${index}`}>Description</Label>
              <Textarea
                id={`description-${index}`}
                placeholder="Describe your responsibilities and achievements in this role..."
                className="mt-1 resize-none h-28"
                value={exp.description}
                onChange={(e) => handleChange(index, "description", e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <Button 
        type="button" 
        variant="outline" 
        className="w-full mt-2 border-dashed border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-resume-primary hover:text-resume-primary"
        onClick={addExperience}
      >
        <Plus className="h-4 w-4 mr-2" /> Add More Experience
      </Button>
    </div>
  );
}
