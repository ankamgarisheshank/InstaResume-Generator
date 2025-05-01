
import { Card } from "@/components/ui/card";

interface ResumeTemplateProps {
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

const AcademicFocusTemplate = ({ data }: ResumeTemplateProps) => {
  const { personalInfo, objective, education, experience, projects, skills, achievements } = data;

  return (
    <Card className="w-full bg-white text-black p-8 shadow-md max-w-4xl mx-auto print:shadow-none font-serif">
      {/* Header */}
      <div className="text-center mb-8 pb-4 border-b-2 border-gray-300">
        <h1 className="text-3xl font-bold mb-2">{personalInfo.fullName || "Your Name"}</h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.address && <span>{personalInfo.address}</span>}
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm mt-1">
          {personalInfo.github && <span>GitHub: {personalInfo.github}</span>}
          {personalInfo.linkedin && <span>LinkedIn: {personalInfo.linkedin}</span>}
        </div>
      </div>

      {/* Objective */}
      {objective.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1">Research Interests</h2>
          <p className="leading-relaxed">{objective.summary}</p>
        </div>
      )}

      {/* Education Timeline */}
      {education.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-1">Education</h2>
          
          <div className="relative border-l-2 border-gray-300 pl-6 ml-3">
            {education.education.map((edu, index) => (
              <div key={index} className="mb-6 relative">
                <div className="absolute -left-9 top-1 w-4 h-4 rounded-full bg-gray-800"></div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-lg">{edu.institution}</h3>
                  <span className="text-sm italic">{edu.year}</span>
                </div>
                <p className="font-medium">{edu.degree}</p>
                {edu.gpa && <p className="text-sm mt-1">GPA: {edu.gpa}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Publications/Papers */}
      {achievements.papers.filter(Boolean).length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1">Publications</h2>
          <ul className="list-disc list-inside space-y-3">
            {achievements.papers.filter(Boolean).map((paper, index) => (
              <li key={index} className="ml-1">{paper}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Research Experience */}
      {experience.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-1">Research Experience</h2>
          
          <div className="relative border-l-2 border-gray-300 pl-6 ml-3">
            {experience.experience.map((exp, index) => (
              <div key={index} className="mb-6 relative">
                <div className="absolute -left-9 top-1 w-4 h-4 rounded-full bg-gray-800"></div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold">{exp.company}</h3>
                  <span className="text-sm italic">{exp.duration}</span>
                </div>
                <p className="font-medium mb-1">{exp.role}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {achievements.certifications.filter(Boolean).length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1">Certifications & Training</h2>
          <ul className="list-disc list-inside space-y-2">
            {achievements.certifications.filter(Boolean).map((certification, index) => (
              <li key={index}>{certification}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Academic Projects */}
      {projects.projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-1">Academic Projects</h2>
          
          {projects.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold">{project.title}</h3>
              <p className="text-sm italic mb-1">Technologies: {project.techStack}</p>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.technical && skills.technical.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-2 border-b border-gray-300 pb-1">Technical Skills</h2>
            <p className="mt-2">{skills.technical.join(", ")}</p>
          </div>
        )}
        
        {skills.nonTechnical && skills.nonTechnical.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-2 border-b border-gray-300 pb-1">Soft Skills</h2>
            <p className="mt-2">{skills.nonTechnical.join(", ")}</p>
          </div>
        )}
      </div>

      {/* Achievements */}
      {achievements.achievements.filter(Boolean).length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1">Academic Achievements</h2>
          <ul className="list-disc list-inside space-y-2">
            {achievements.achievements.filter(Boolean).map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Activities */}
      {achievements.activities.filter(Boolean).length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1">Academic Activities</h2>
          <ul className="list-disc list-inside space-y-2">
            {achievements.activities.filter(Boolean).map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};

export default AcademicFocusTemplate;
