
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Trash, Plus } from "lucide-react";

interface ProjectsFormProps {
  formData: any;
  updateFormData: (section: string, data: any) => void;
}

export default function ProjectsForm({ formData, updateFormData }: ProjectsFormProps) {
  const [projects, setProjects] = useState(formData.projects || [
    { title: "", description: "", techStack: "" }
  ]);

  const handleChange = (index: number, field: string, value: string) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value
    };
    setProjects(updatedProjects);
    updateFormData("projects", { projects: updatedProjects });
  };

  const addProject = () => {
    const updatedProjects = [...projects, { title: "", description: "", techStack: "" }];
    setProjects(updatedProjects);
    updateFormData("projects", { projects: updatedProjects });
  };

  const removeProject = (index: number) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
    updateFormData("projects", { projects: updatedProjects });
  };

  return (
    <div className="form-section section-animation">
      <h2 className="form-section-title flex items-center">
        <span className="w-5 h-5 rounded-full bg-resume-primary flex items-center justify-center text-white mr-2">
          <span className="text-xs font-bold">🚀</span>
        </span>
        Projects
      </h2>

      {projects.map((project: any, index: number) => (
        <div key={index} className="mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-medium text-gray-700 dark:text-gray-300">
              Project #{index + 1}
            </h3>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              onClick={() => removeProject(index)}
            >
              <Trash className="h-4 w-4" />
              <span className="sr-only">Remove project</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="input-group">
              <Label htmlFor={`title-${index}`}>Project Title</Label>
              <Input
                id={`title-${index}`}
                placeholder="E-commerce Website"
                className="mt-1"
                value={project.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
              />
            </div>

            <div className="input-group">
              <Label htmlFor={`techStack-${index}`}>Tech Stack</Label>
              <Input
                id={`techStack-${index}`}
                placeholder="React, Node.js, MongoDB, Express"
                className="mt-1"
                value={project.techStack}
                onChange={(e) => handleChange(index, "techStack", e.target.value)}
              />
            </div>

            <div className="input-group">
              <Label htmlFor={`description-${index}`}>Description</Label>
              <Textarea
                id={`description-${index}`}
                placeholder="Describe your project, its features, your role, and any achievements..."
                className="mt-1 resize-none h-28"
                value={project.description}
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
        onClick={addProject}
      >
        <Plus className="h-4 w-4 mr-2" /> Add More Projects
      </Button>
    </div>
  );
}
