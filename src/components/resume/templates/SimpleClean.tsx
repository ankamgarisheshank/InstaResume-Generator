
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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

const SimpleCleanTemplate = ({ data }: ResumeTemplateProps) => {
  const { personalInfo, objective, education, experience, projects, skills, achievements } = data;

  return (
    <Card className="w-full bg-white text-black p-8 shadow-md max-w-4xl mx-auto print:shadow-none">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">{personalInfo.fullName || "Your Name"}</h1>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && (
            <>
              <span className="hidden print:inline-block">•</span>
              <span>{personalInfo.phone}</span>
            </>
          )}
          {personalInfo.address && (
            <>
              <span className="hidden print:inline-block">•</span>
              <span>{personalInfo.address}</span>
            </>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-sm mt-1">
          {personalInfo.github && <span>GitHub: {personalInfo.github}</span>}
          {personalInfo.linkedin && (
            <>
              <span className="hidden print:inline-block">•</span>
              <span>LinkedIn: {personalInfo.linkedin}</span>
            </>
          )}
        </div>
      </div>

      {/* Objective */}
      {objective.summary && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Objective</h2>
          <Separator className="mb-2 bg-gray-300" />
          <p>{objective.summary}</p>
        </div>
      )}

      {/* Education */}
      {education.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Education</h2>
          <Separator className="mb-2 bg-gray-300" />
          {education.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between">
                <h3 className="font-medium">{edu.institution}</h3>
                <span className="text-sm">{edu.year}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>{edu.degree}</span>
                {edu.gpa && <span>GPA: {edu.gpa}</span>}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Skills</h2>
        <Separator className="mb-2 bg-gray-300" />
        {skills.technical && skills.technical.length > 0 && (
          <div className="mb-2">
            <h3 className="font-medium">Technical Skills</h3>
            <p>{skills.technical.join(", ")}</p>
          </div>
        )}
        {skills.nonTechnical && skills.nonTechnical.length > 0 && (
          <div>
            <h3 className="font-medium">Non-Technical Skills</h3>
            <p>{skills.nonTechnical.join(", ")}</p>
          </div>
        )}
      </div>

      {/* Experience */}
      {experience.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Experience</h2>
          <Separator className="mb-2 bg-gray-300" />
          {experience.experience.map((exp, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between">
                <h3 className="font-medium">{exp.company}</h3>
                <span className="text-sm">{exp.duration}</span>
              </div>
              <p className="text-sm font-medium mb-1">{exp.role}</p>
              <p className="text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Projects</h2>
          <Separator className="mb-2 bg-gray-300" />
          {projects.projects.map((project, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-medium">{project.title}</h3>
              <p className="text-sm mb-1">Tech Stack: {project.techStack}</p>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Achievements and Other Sections */}
      {achievements.achievements.filter(Boolean).length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Achievements</h2>
          <Separator className="mb-2 bg-gray-300" />
          <ul className="list-disc list-inside">
            {achievements.achievements.filter(Boolean).map((achievement, index) => (
              <li key={index} className="text-sm mb-1">{achievement}</li>
            ))}
          </ul>
        </div>
      )}

      {achievements.certifications.filter(Boolean).length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Certifications</h2>
          <Separator className="mb-2 bg-gray-300" />
          <ul className="list-disc list-inside">
            {achievements.certifications.filter(Boolean).map((certification, index) => (
              <li key={index} className="text-sm mb-1">{certification}</li>
            ))}
          </ul>
        </div>
      )}

      {achievements.papers.filter(Boolean).length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Research Papers</h2>
          <Separator className="mb-2 bg-gray-300" />
          <ul className="list-disc list-inside">
            {achievements.papers.filter(Boolean).map((paper, index) => (
              <li key={index} className="text-sm mb-1">{paper}</li>
            ))}
          </ul>
        </div>
      )}

      {achievements.activities.filter(Boolean).length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Activities</h2>
          <Separator className="mb-2 bg-gray-300" />
          <ul className="list-disc list-inside">
            {achievements.activities.filter(Boolean).map((activity, index) => (
              <li key={index} className="text-sm mb-1">{activity}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};

export default SimpleCleanTemplate;
