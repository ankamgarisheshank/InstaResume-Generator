import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ObjectiveForm from "./ObjectiveForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import ProjectsForm from "./ProjectsForm";
import SkillsForm from "./SkillsForm";
import AchievementsForm from "./AchievementsForm";
import TemplateSelector from "./TemplateSelector";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { 
  SimpleCleanTemplate, 
  ModernCorporateTemplate, 
  CreativeTechTemplate,
  AcademicFocusTemplate,
  ExperienceHighlightTemplate
} from "./templates";
import { ResumeTemplateProps } from "./templates";
import PersonalInfoForm from "./personal-info/PersonalInfoForm";

export default function ResumeForm() {
  const { toast } = useToast();
  const [selectedTemplate, setSelectedTemplate] = useState<string>("simple-clean");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [recipientEmail, setRecipientEmail] = useState<string>(""); // For email input
  const [formData, setFormData] = useState<ResumeTemplateProps["data"]>({
    personalInfo: {},
    objective: {},
    education: { education: [] },
    experience: { experience: [] },
    projects: { projects: [] },
    skills: {
      technical: [],
      nonTechnical: []
    },
    achievements: {
      achievements: [""],
      certifications: [""],
      papers: [""],
      activities: [""]
    }
  });

  const updateFormData = (section: string, data: any) => {
    setFormData({
      ...formData,
      [section]: data
    });
  };

  const handleTemplateSelection = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const handleGenerateResume = async () => {
    const resumeElement = document.getElementById("resume-template");
    if (!resumeElement) return;

    const canvas = await html2canvas(resumeElement, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");

    toast({
      title: "Resume Generated!",
      description: "Your professional resume has been downloaded as a PDF.",
    });
  };

  const handleEmailResume = () => {
    toast({
      title: "Feature Under Development",
      description: "We are working on this feature. It will be available soon!",
      variant: "default",
    });
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === "templates") {
      setShowPreview(false);
    }
  };

  const getTemplateComponent = () => {
    const templateData = {
      ...formData,
      skills: {
        technical: formData.skills.technical || [],
        nonTechnical: formData.skills.nonTechnical || []
      }
    };
    switch (selectedTemplate) {
      case "simple-clean":
        return <SimpleCleanTemplate data={templateData} />;
      case "modern-corporate":
        return <ModernCorporateTemplate data={templateData} />;
      case "creative-tech":
        return <CreativeTechTemplate data={templateData} />;
      case "academic-focus":
        return <AcademicFocusTemplate data={templateData} />;
      case "experience-highlight":
        return <ExperienceHighlightTemplate data={templateData} />;
      default:
        return <SimpleCleanTemplate data={templateData} />;
    }
  };

  return (
    <div className="form-container" id="resume-form">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Create Your Professional Resume
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-10">
        Fill in the form below with your details and we'll generate a professional,
        modern resume you can use for job applications.
      </p>
      <div className="mb-8 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform hover:scale-105">
        <input
          type="email"
          placeholder="Enter recipient email"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full sm:w-auto bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-resume-primary focus:outline-none transition-all"
        />
      </div>
      <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange} className="mb-8">
        <TabsList className="grid grid-cols-4 md:grid-cols-8 gap-2 mb-8">
          <TabsTrigger value="all" className="transition-transform hover:scale-105">
            All
          </TabsTrigger>
          <TabsTrigger value="personal" className="transition-transform hover:scale-105">
            Personal
          </TabsTrigger>
          <TabsTrigger value="education" className="transition-transform hover:scale-105">
            Education
          </TabsTrigger>
          <TabsTrigger value="experience" className="transition-transform hover:scale-105">
            Experience
          </TabsTrigger>
          <TabsTrigger value="projects" className="transition-transform hover:scale-105">
            Projects
          </TabsTrigger>
          <TabsTrigger value="skills" className="transition-transform hover:scale-105">
            Skills
          </TabsTrigger>
          <TabsTrigger value="additional" className="transition-transform hover:scale-105">
            Additional
          </TabsTrigger>
          <TabsTrigger value="templates" className="transition-transform hover:scale-105">
            Templates
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <PersonalInfoForm formData={formData.personalInfo} updateFormData={updateFormData} />
          <ObjectiveForm formData={formData.objective} updateFormData={updateFormData} />
          <EducationForm formData={formData.education} updateFormData={updateFormData} />
          <ExperienceForm formData={formData.experience} updateFormData={updateFormData} />
          <ProjectsForm formData={formData.projects} updateFormData={updateFormData} />
          <SkillsForm formData={formData.skills} updateFormData={updateFormData} />
          <AchievementsForm formData={formData.achievements} updateFormData={updateFormData} />
        </TabsContent>
        <TabsContent value="personal">
          <PersonalInfoForm formData={formData.personalInfo} updateFormData={updateFormData} />
        </TabsContent>
        <TabsContent value="education">
          <EducationForm formData={formData.education} updateFormData={updateFormData} />
        </TabsContent>
        <TabsContent value="experience">
          <ExperienceForm formData={formData.experience} updateFormData={updateFormData} />
        </TabsContent>
        <TabsContent value="projects">
          <ProjectsForm formData={formData.projects} updateFormData={updateFormData} />
        </TabsContent>
        <TabsContent value="skills">
          <SkillsForm formData={formData.skills} updateFormData={updateFormData} />
        </TabsContent>
        <TabsContent value="additional">
          <AchievementsForm formData={formData.achievements} updateFormData={updateFormData} />
        </TabsContent>
        <TabsContent value="templates">
          <div id="templates-section" className="transition-transform hover:scale-105">
            <TemplateSelector formData={formData} onSelectTemplate={handleTemplateSelection} />
          </div>
        </TabsContent>
      </Tabs>
      <div id="resume-template" className="mb-12">
        {getTemplateComponent()}
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <Button
          className="text-lg px-8 py-6 rounded-xl bg-resume-primary hover:bg-resume-accent flex items-center transition-transform hover:scale-105"
          onClick={handleGenerateResume}
        >
          <Download className="mr-2 h-5 w-5" />
          Generate & Download PDF
        </Button>
        <Button
          variant="outline"
          className="text-lg px-8 py-6 rounded-xl border-resume-primary text-resume-primary hover:bg-resume-primary/10 flex items-center dark:text-white dark:hover:bg-resume-primary/20 transition-transform hover:scale-105"
          onClick={handleEmailResume}
        >
          <Mail className="mr-2 h-5 w-5" />
          Send to Email
        </Button>
      </div>
    </div>
  );
}