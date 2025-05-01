
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, File, GraduationCap, User } from "lucide-react";

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

const ModernCorporateTemplate = ({ data }: ResumeTemplateProps) => {
  const { personalInfo, objective, education, experience, projects, skills, achievements } = data;

  return (
    <Card className="w-full bg-white text-black shadow-md max-w-4xl mx-auto print:shadow-none overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Column (Sidebar) */}
        <div className="bg-gray-100 p-6 md:w-1/3">
          <div className="mb-8 text-center">
            <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
              {/* Placeholder for profile image */}
              <div className="w-full h-full flex items-center justify-center">
                <User className="w-16 h-16 text-gray-500" />
              </div>
            </div>
            <h1 className="text-xl font-bold">{personalInfo.fullName || "Your Name"}</h1>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-resume-primary mb-3 border-b border-gray-300 pb-1">Contact</h2>
            <div className="space-y-2">
              {personalInfo.email && <p className="text-sm">{personalInfo.email}</p>}
              {personalInfo.phone && <p className="text-sm">{personalInfo.phone}</p>}
              {personalInfo.address && <p className="text-sm">{personalInfo.address}</p>}
            </div>
          </div>

          {/* Links */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-resume-primary mb-3 border-b border-gray-300 pb-1">Links</h2>
            <div className="space-y-2">
              {personalInfo.github && <p className="text-sm">GitHub: {personalInfo.github}</p>}
              {personalInfo.linkedin && <p className="text-sm">LinkedIn: {personalInfo.linkedin}</p>}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-resume-primary mb-3 border-b border-gray-300 pb-1">Skills</h2>
            {skills.technical && skills.technical.length > 0 && (
              <div className="mb-3">
                <h3 className="font-medium text-sm mb-1">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <span key={index} className="bg-white px-2 py-1 rounded-md text-xs shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {skills.nonTechnical && skills.nonTechnical.length > 0 && (
              <div>
                <h3 className="font-medium text-sm mb-1">Non-Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.nonTechnical.map((skill, index) => (
                    <span key={index} className="bg-white px-2 py-1 rounded-md text-xs shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Certifications */}
          {achievements.certifications.filter(Boolean).length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-resume-primary mb-3 border-b border-gray-300 pb-1">Certifications</h2>
              <ul className="list-disc list-inside space-y-1">
                {achievements.certifications.filter(Boolean).map((cert, index) => (
                  <li key={index} className="text-sm">{cert}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column (Main Content) */}
        <div className="p-6 md:w-2/3">
          {/* Objective */}
          {objective.summary && (
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <File className="h-5 w-5 text-resume-primary mr-2" />
                <h2 className="text-xl font-bold text-resume-primary">Professional Summary</h2>
              </div>
              <p className="text-sm">{objective.summary}</p>
            </div>
          )}

          {/* Experience */}
          {experience.experience.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <Briefcase className="h-5 w-5 text-resume-primary mr-2" />
                <h2 className="text-xl font-bold text-resume-primary">Work Experience</h2>
              </div>
              
              {experience.experience.map((exp, index) => (
                <div key={index} className="mb-4 border-l-2 border-resume-primary pl-4">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{exp.company}</h3>
                    <span className="text-sm flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-sm font-medium mb-1 text-resume-primary">{exp.role}</p>
                  <p className="text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {education.education.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-5 w-5 text-resume-primary mr-2" />
                <h2 className="text-xl font-bold text-resume-primary">Education</h2>
              </div>
              
              {education.education.map((edu, index) => (
                <div key={index} className="mb-4 border-l-2 border-resume-primary pl-4">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{edu.institution}</h3>
                    <span className="text-sm">{edu.year}</span>
                  </div>
                  <p className="text-sm">{edu.degree}</p>
                  {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {projects.projects.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <File className="h-5 w-5 text-resume-primary mr-2" />
                <h2 className="text-xl font-bold text-resume-primary">Projects</h2>
              </div>
              
              {projects.projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-xs font-medium mb-1">Tech Stack: {project.techStack}</p>
                  <p className="text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Achievements */}
          {achievements.achievements.filter(Boolean).length > 0 && (
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <File className="h-5 w-5 text-resume-primary mr-2" />
                <h2 className="text-xl font-bold text-resume-primary">Achievements</h2>
              </div>
              <ul className="list-disc list-inside space-y-1">
                {achievements.achievements.filter(Boolean).map((achievement, index) => (
                  <li key={index} className="text-sm">{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Research Papers */}
          {achievements.papers.filter(Boolean).length > 0 && (
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <File className="h-5 w-5 text-resume-primary mr-2" />
                <h2 className="text-xl font-bold text-resume-primary">Research Papers</h2>
              </div>
              <ul className="list-disc list-inside space-y-1">
                {achievements.papers.filter(Boolean).map((paper, index) => (
                  <li key={index} className="text-sm">{paper}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Activities */}
          {achievements.activities.filter(Boolean).length > 0 && (
            <div>
              <div className="flex items-center mb-3">
                <File className="h-5 w-5 text-resume-primary mr-2" />
                <h2 className="text-xl font-bold text-resume-primary">Activities</h2>
              </div>
              <ul className="list-disc list-inside space-y-1">
                {achievements.activities.filter(Boolean).map((activity, index) => (
                  <li key={index} className="text-sm">{activity}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ModernCorporateTemplate;
