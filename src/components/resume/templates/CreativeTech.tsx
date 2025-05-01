
import { Card } from "@/components/ui/card";
import { User, Mail, Phone, Link as LinkIcon, Code } from "lucide-react";

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

const CreativeTechTemplate = ({ data }: ResumeTemplateProps) => {
  const { personalInfo, objective, education, experience, projects, skills, achievements } = data;

  return (
    <Card className="w-full bg-white text-black shadow-md max-w-4xl mx-auto print:shadow-none overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Column (Sidebar) */}
        <div className="bg-gray-800 text-white p-6 md:w-1/3">
          <div className="mb-8 text-center">
            <div className="w-32 h-32 rounded-full bg-gray-700 mx-auto mb-4 overflow-hidden border-4 border-gray-600">
              {/* Placeholder for profile image */}
              <div className="w-full h-full flex items-center justify-center">
                <User className="w-16 h-16 text-gray-400" />
              </div>
            </div>
            <h1 className="text-xl font-bold">{personalInfo.fullName || "Your Name"}</h1>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3 border-b border-gray-600 pb-1">CONTACT</h2>
            <div className="space-y-3">
              {personalInfo.email && (
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <p className="text-sm">{personalInfo.email}</p>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <p className="text-sm">{personalInfo.phone}</p>
                </div>
              )}
              {personalInfo.address && (
                <div className="flex items-center">
                  <LinkIcon className="h-4 w-4 mr-2" />
                  <p className="text-sm">{personalInfo.address}</p>
                </div>
              )}
            </div>
          </div>

          {/* Links */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3 border-b border-gray-600 pb-1">SOCIAL</h2>
            <div className="space-y-2">
              {personalInfo.github && (
                <div className="flex items-center">
                  <Code className="h-4 w-4 mr-2" />
                  <p className="text-sm">GitHub: {personalInfo.github}</p>
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="flex items-center">
                  <LinkIcon className="h-4 w-4 mr-2" />
                  <p className="text-sm">LinkedIn: {personalInfo.linkedin}</p>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3 border-b border-gray-600 pb-1">SKILLS</h2>
            {skills.technical && skills.technical.length > 0 && (
              <div className="mb-4">
                <h3 className="font-medium text-sm mb-2 text-gray-300">Technical Skills</h3>
                <div className="space-y-2">
                  {skills.technical.map((skill, index) => (
                    <div key={index} className="relative">
                      <p className="text-sm mb-1">{skill}</p>
                      <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-resume-primary rounded-full" 
                          style={{ width: `${Math.random() * 40 + 60}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {skills.nonTechnical && skills.nonTechnical.length > 0 && (
              <div>
                <h3 className="font-medium text-sm mb-2 text-gray-300">Non-Technical Skills</h3>
                <div className="space-y-2">
                  {skills.nonTechnical.map((skill, index) => (
                    <div key={index} className="relative">
                      <p className="text-sm mb-1">{skill}</p>
                      <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-resume-accent rounded-full" 
                          style={{ width: `${Math.random() * 40 + 60}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Certifications */}
          {achievements.certifications.filter(Boolean).length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-3 border-b border-gray-600 pb-1">CERTIFICATIONS</h2>
              <ul className="space-y-2">
                {achievements.certifications.filter(Boolean).map((cert, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <span className="text-resume-accent mr-2">•</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Activities */}
          {achievements.activities.filter(Boolean).length > 0 && (
            <div>
              <h2 className="text-lg font-bold mb-3 border-b border-gray-600 pb-1">ACTIVITIES</h2>
              <ul className="space-y-2">
                {achievements.activities.filter(Boolean).map((activity, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <span className="text-resume-accent mr-2">•</span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column (Main Content) */}
        <div className="p-8 md:w-2/3">
          {/* Objective */}
          {objective.summary && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-3 text-resume-primary border-b-2 border-gray-200 pb-1">ABOUT ME</h2>
              <p className="leading-relaxed">{objective.summary}</p>
            </div>
          )}

          {/* Experience */}
          {experience.experience.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-resume-primary border-b-2 border-gray-200 pb-1">EXPERIENCE</h2>
              
              {experience.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg">{exp.role}</h3>
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded">{exp.duration}</span>
                  </div>
                  <p className="text-resume-primary mb-2">{exp.company}</p>
                  <p className="text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {education.education.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-resume-primary border-b-2 border-gray-200 pb-1">EDUCATION</h2>
              
              {education.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="font-bold">{edu.institution}</h3>
                    <span className="text-sm">{edu.year}</span>
                  </div>
                  <p className="text-resume-primary">{edu.degree}</p>
                  {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {projects.projects.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-resume-primary border-b-2 border-gray-200 pb-1">PROJECTS</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.projects.map((project, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-1">{project.title}</h3>
                    <p className="text-xs font-medium mb-2 text-resume-primary">{project.techStack}</p>
                    <p className="text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {achievements.achievements.filter(Boolean).length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-3 text-resume-primary border-b-2 border-gray-200 pb-1">ACHIEVEMENTS</h2>
              <ul className="space-y-2">
                {achievements.achievements.filter(Boolean).map((achievement, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <span className="text-resume-primary font-bold mr-2">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Research Papers */}
          {achievements.papers.filter(Boolean).length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-3 text-resume-primary border-b-2 border-gray-200 pb-1">RESEARCH PAPERS</h2>
              <ul className="space-y-2">
                {achievements.papers.filter(Boolean).map((paper, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <span className="text-resume-primary font-bold mr-2">•</span>
                    <span>{paper}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CreativeTechTemplate;
