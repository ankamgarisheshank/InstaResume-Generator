
import SimpleCleanTemplate from "./SimpleClean";
import ModernCorporateTemplate from "./ModernCorporate";
import CreativeTechTemplate from "./CreativeTech";
import AcademicFocusTemplate from "./AcademicFocus";
import ExperienceHighlightTemplate from "./ExperienceHighlight";

export {
  SimpleCleanTemplate,
  ModernCorporateTemplate,
  CreativeTechTemplate,
  AcademicFocusTemplate,
  ExperienceHighlightTemplate
};

// Template component interface
export interface ResumeTemplateProps {
  data: {
    personalInfo: {
      fullName?: string;
      email?: string;
      phone?: string;
      address?: string;
      github?: string;
      linkedin?: string;
    };
    objective: {
      summary?: string;
    };
    education: {
      education: Array<{
        institution?: string;
        degree?: string;
        year?: string;
        gpa?: string;
      }>;
    };
    experience: {
      experience: Array<{
        company?: string;
        role?: string;
        duration?: string;
        description?: string;
      }>;
    };
    projects: {
      projects: Array<{
        title?: string;
        description?: string;
        techStack?: string;
      }>;
    };
    skills: {
      technical?: string[];
      nonTechnical?: string[];
    };
    achievements: {
      achievements: string[];
      certifications: string[];
      papers: string[];
      activities: string[];
    };
  };
}
