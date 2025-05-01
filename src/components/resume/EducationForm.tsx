
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Trash, Plus } from "lucide-react";

interface EducationFormProps {
  formData: any;
  updateFormData: (section: string, data: any) => void;
}

export default function EducationForm({ formData, updateFormData }: EducationFormProps) {
  const [education, setEducation] = useState(formData.education || [
    { institution: "", degree: "", year: "", cgpa: "" }
  ]);

  const handleChange = (index: number, field: string, value: string) => {
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value
    };
    setEducation(updatedEducation);
    updateFormData("education", { education: updatedEducation });
  };

  const addEducation = () => {
    const updatedEducation = [...education, { institution: "", degree: "", year: "", cgpa: "" }];
    setEducation(updatedEducation);
    updateFormData("education", { education: updatedEducation });
  };

  const removeEducation = (index: number) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
    updateFormData("education", { education: updatedEducation });
  };

  return (
    <div className="form-section section-animation">
      <h2 className="form-section-title flex items-center">
        <span className="w-5 h-5 rounded-full bg-resume-primary flex items-center justify-center text-white mr-2">
          <span className="text-xs font-bold">🎓</span>
        </span>
        Education
      </h2>

      {education.map((edu: any, index: number) => (
        <div key={index} className="mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-medium text-gray-700 dark:text-gray-300">
              Education #{index + 1}
            </h3>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              onClick={() => removeEducation(index)}
            >
              <Trash className="h-4 w-4" />
              <span className="sr-only">Remove education</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="input-group">
              <Label htmlFor={`institution-${index}`}>Institution</Label>
              <Input
                id={`institution-${index}`}
                placeholder="Harvard University"
                className="mt-1"
                value={edu.institution}
                onChange={(e) => handleChange(index, "institution", e.target.value)}
              />
            </div>

            <div className="input-group">
              <Label htmlFor={`degree-${index}`}>Degree</Label>
              <Input
                id={`degree-${index}`}
                placeholder="Bachelor of Science in Computer Science"
                className="mt-1"
                value={edu.degree}
                onChange={(e) => handleChange(index, "degree", e.target.value)}
              />
            </div>

            <div className="input-group">
              <Label htmlFor={`year-${index}`}>Year</Label>
              <Input
                id={`year-${index}`}
                placeholder="2018 - 2022"
                className="mt-1"
                value={edu.year}
                onChange={(e) => handleChange(index, "year", e.target.value)}
              />
            </div>

            <div className="input-group">
              <Label htmlFor={`cgpa-${index}`}>CGPA / Grade</Label>
              <Input
                id={`cgpa-${index}`}
                placeholder="3.8/4.0"
                className="mt-1"
                value={edu.cgpa}
                onChange={(e) => handleChange(index, "cgpa", e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <Button 
        type="button" 
        variant="outline" 
        className="w-full mt-2 border-dashed border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-resume-primary hover:text-resume-primary"
        onClick={addEducation}
      >
        <Plus className="h-4 w-4 mr-2" /> Add More Education
      </Button>
    </div>
  );
}
