
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

const ExperienceHighlightTemplate = ({ data }: ResumeTemplateProps) => {
  const { personalInfo, objective, education, experience, projects, skills, achievements } = data;

  // Function to render skill level dots
  const renderSkillLevel = (index: number) => {
    const level = Math.floor(Math.random() * 3) + 3; // Random number between 3-5 (for demo)
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full mx-0.5 ${
              i < level ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <Card className="w-full bg-white text-black shadow-md max-w-4xl mx-auto print:shadow-none overflow-hidden">
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">{personalInfo.fullName || "Your Name"}</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-2 text-sm">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.address && <span>{personalInfo.address}</span>}
          </div>
          <div className="flex gap-4 text-sm mt-1">
            {personalInfo.github && <span>GitHub: {personalInfo.github}</span>}
            {personalInfo.linkedin && <span>LinkedIn: {personalInfo.linkedin}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="col-span-1">
            {/* Education */}
            {education.education.length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-300 pb-1">Education</h2>
                {education.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between">
                      <h3 className="font-bold">{edu.institution}</h3>
                    </div>
                    <p className="text-sm">{edu.degree}</p>
                    <div className="flex justify-between text-xs">
                      <span>{edu.year}</span>
                      {edu.gpa && <span>GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Skills with Visualization */}
            <div className="mb-6">
              <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-300 pb-1">Skills</h2>
              
              {skills.technical && skills.technical.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-bold text-sm uppercase mb-2">Technical</h3>
                  <div className="space-y-2">
                    {skills.technical.map((skill, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm">{skill}</span>
                        {renderSkillLevel(index)}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {skills.nonTechnical && skills.nonTechnical.length > 0 && (
                <div>
                  <h3 className="font-bold text-sm uppercase mb-2">Soft Skills</h3>
                  <div className="space-y-2">
                    {skills.nonTechnical.map((skill, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm">{skill}</span>
                        {renderSkillLevel(index)}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Certifications */}
            {achievements.certifications.filter(Boolean).length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-300 pb-1">Certifications</h2>
                <ul className="list-disc list-inside">
                  {achievements.certifications.filter(Boolean).map((cert, index) => (
                    <li key={index} className="text-sm mb-1">{cert}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column (Experience Focus) */}
          <div className="col-span-2">
            {/* Objective */}
            {objective.summary && (
              <div className="mb-6">
                <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-300 pb-1">Professional Summary</h2>
                <p className="leading-relaxed text-sm">{objective.summary}</p>
              </div>
            )}

            {/* Experience (Highlighted) */}
            {experience.experience.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-bold uppercase mb-4 border-b border-gray-300 pb-1">Professional Experience</h2>
                
                {experience.experience.map((exp, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-base">{exp.company}</h3>
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <p className="font-medium text-sm mb-1">{exp.role}</p>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {projects.projects.length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-300 pb-1">Projects</h2>
                
                {projects.projects.map((project, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-bold text-sm">{project.title}</h3>
                    <p className="text-xs mb-1">Tech Stack: {project.techStack}</p>
                    <p className="text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Achievements */}
            {achievements.achievements.filter(Boolean).length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-300 pb-1">Key Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {achievements.achievements.filter(Boolean).map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-gray-800 font-bold mr-2">•</span>
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Papers */}
            {achievements.papers.filter(Boolean).length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-300 pb-1">Publications</h2>
                <ul className="list-disc list-inside">
                  {achievements.papers.filter(Boolean).map((paper, index) => (
                    <li key={index} className="text-sm mb-1">{paper}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Activities */}
            {achievements.activities.filter(Boolean).length > 0 && (
              <div>
                <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-300 pb-1">Activities</h2>
                <ul className="list-disc list-inside">
                  {achievements.activities.filter(Boolean).map((activity, index) => (
                    <li key={index} className="text-sm mb-1">{activity}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ExperienceHighlightTemplate;
