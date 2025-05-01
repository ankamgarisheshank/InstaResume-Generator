
import { useState } from "react";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  SimpleCleanTemplate,
  ModernCorporateTemplate,
  CreativeTechTemplate,
  AcademicFocusTemplate,
  ExperienceHighlightTemplate,
  ResumeTemplateProps
} from "./templates";

interface TemplateSelectorProps {
  formData: ResumeTemplateProps["data"];
  onSelectTemplate: (templateName: string) => void;
}

const templates = [
  {
    id: "simple-clean",
    name: "Simple & Clean",
    description: "One-column layout with clear sections and plenty of white space",
    component: SimpleCleanTemplate,
  },
  {
    id: "modern-corporate",
    name: "Modern Corporate",
    description: "Two-column layout with sidebar and professional styling",
    component: ModernCorporateTemplate,
  },
  {
    id: "creative-tech",
    name: "Creative Tech",
    description: "Side panel with colored background, modern and eye-catching",
    component: CreativeTechTemplate,
  },
  {
    id: "academic-focus",
    name: "Academic Focus",
    description: "Timeline-based layout ideal for researchers and academics",
    component: AcademicFocusTemplate,
  },
  {
    id: "experience-highlight",
    name: "Experience Highlight",
    description: "Two-column layout with focus on work experience and achievements",
    component: ExperienceHighlightTemplate,
  }
];

const TemplateSelector = ({ formData, onSelectTemplate }: TemplateSelectorProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("simple-clean");
  const [previewMode, setPreviewMode] = useState<boolean>(false);

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplate(templateId);
    onSelectTemplate(templateId);
  };

  const togglePreviewMode = () => {
    setPreviewMode(!previewMode);
  };

  const SelectedTemplateComponent = templates.find(t => t.id === selectedTemplate)?.component || SimpleCleanTemplate;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Choose a Template</h2>
        <Button 
          onClick={togglePreviewMode}
          variant="outline"
        >
          {previewMode ? "Show Templates" : "Preview Selected Template"}
        </Button>
      </div>

      {previewMode ? (
        <div className="mb-8 scale-75 origin-top transform transition-all duration-300">
          <SelectedTemplateComponent data={formData} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {templates.map((template) => {
            const TemplateComponent = template.component;
            
            return (
              <Card 
                key={template.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg overflow-hidden ${
                  selectedTemplate === template.id ? 'ring-2 ring-resume-primary' : ''
                }`}
                onClick={() => handleSelectTemplate(template.id)}
              >
                <div className="h-40 overflow-hidden bg-white">
                  <div className="transform scale-[0.38] origin-top mt-[-65px]">
                    <TemplateComponent data={formData} />
                  </div>
                </div>
                <CardHeader className="py-3">
                  <CardTitle className="text-base">{template.name}</CardTitle>
                  <CardDescription className="text-xs">{template.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-3 pt-0 flex justify-end">
                  <Button 
                    variant={selectedTemplate === template.id ? "default" : "outline"} 
                    size="sm"
                    onClick={() => handleSelectTemplate(template.id)}
                    className="text-xs"
                  >
                    {selectedTemplate === template.id ? "Selected" : "Select"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
