
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Plus, Trash } from "lucide-react";

interface AchievementsFormProps {
  formData: any;
  updateFormData: (section: string, data: any) => void;
}

export default function AchievementsForm({ formData, updateFormData }: AchievementsFormProps) {
  const [achievements, setAchievements] = useState(formData.achievements || [""]);
  const [certifications, setCertifications] = useState(formData.certifications || [""]);
  const [papers, setPapers] = useState(formData.papers || [""]);
  const [activities, setActivities] = useState(formData.activities || [""]);

  const handleAddItem = (section: string) => {
    switch (section) {
      case "achievements":
        setAchievements([...achievements, ""]);
        updateFormData("achievements", { ...formData, achievements: [...achievements, ""] });
        break;
      case "certifications":
        setCertifications([...certifications, ""]);
        updateFormData("achievements", { ...formData, certifications: [...certifications, ""] });
        break;
      case "papers":
        setPapers([...papers, ""]);
        updateFormData("achievements", { ...formData, papers: [...papers, ""] });
        break;
      case "activities":
        setActivities([...activities, ""]);
        updateFormData("achievements", { ...formData, activities: [...activities, ""] });
        break;
    }
  };

  const handleRemoveItem = (section: string, index: number) => {
    switch (section) {
      case "achievements":
        const updatedAchievements = achievements.filter((_, i) => i !== index);
        setAchievements(updatedAchievements);
        updateFormData("achievements", { ...formData, achievements: updatedAchievements });
        break;
      case "certifications":
        const updatedCertifications = certifications.filter((_, i) => i !== index);
        setCertifications(updatedCertifications);
        updateFormData("achievements", { ...formData, certifications: updatedCertifications });
        break;
      case "papers":
        const updatedPapers = papers.filter((_, i) => i !== index);
        setPapers(updatedPapers);
        updateFormData("achievements", { ...formData, papers: updatedPapers });
        break;
      case "activities":
        const updatedActivities = activities.filter((_, i) => i !== index);
        setActivities(updatedActivities);
        updateFormData("achievements", { ...formData, activities: updatedActivities });
        break;
    }
  };

  const handleChangeItem = (section: string, index: number, value: string) => {
    switch (section) {
      case "achievements":
        const updatedAchievements = [...achievements];
        updatedAchievements[index] = value;
        setAchievements(updatedAchievements);
        updateFormData("achievements", { ...formData, achievements: updatedAchievements });
        break;
      case "certifications":
        const updatedCertifications = [...certifications];
        updatedCertifications[index] = value;
        setCertifications(updatedCertifications);
        updateFormData("achievements", { ...formData, certifications: updatedCertifications });
        break;
      case "papers":
        const updatedPapers = [...papers];
        updatedPapers[index] = value;
        setPapers(updatedPapers);
        updateFormData("achievements", { ...formData, papers: updatedPapers });
        break;
      case "activities":
        const updatedActivities = [...activities];
        updatedActivities[index] = value;
        setActivities(updatedActivities);
        updateFormData("achievements", { ...formData, activities: updatedActivities });
        break;
    }
  };

  return (
    <div className="form-section section-animation">
      <h2 className="form-section-title flex items-center">
        <span className="w-5 h-5 rounded-full bg-resume-primary flex items-center justify-center text-white mr-2">
          <span className="text-xs font-bold">🏆</span>
        </span>
        Additional Information
      </h2>

      <div className="mb-8">
        <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">Achievements</h3>
        {achievements.map((achievement, index) => (
          <div key={`achievement-${index}`} className="flex items-center mb-2">
            <Input
              placeholder="Won First Place in National Coding Competition..."
              value={achievement}
              onChange={(e) => handleChangeItem("achievements", index, e.target.value)}
              className="flex-1 mr-2"
            />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              onClick={() => handleRemoveItem("achievements", index)}
            >
              <Trash className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          className="w-full mt-2 border-dashed border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-resume-primary hover:text-resume-primary"
          onClick={() => handleAddItem("achievements")}
        >
          <Plus className="h-4 w-4 mr-2" /> Add Achievement
        </Button>
      </div>

      <div className="mb-8">
        <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">Certifications</h3>
        {certifications.map((certification, index) => (
          <div key={`certification-${index}`} className="flex items-center mb-2">
            <Input
              placeholder="AWS Certified Solutions Architect - Associate..."
              value={certification}
              onChange={(e) => handleChangeItem("certifications", index, e.target.value)}
              className="flex-1 mr-2"
            />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              onClick={() => handleRemoveItem("certifications", index)}
            >
              <Trash className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          className="w-full mt-2 border-dashed border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-resume-primary hover:text-resume-primary"
          onClick={() => handleAddItem("certifications")}
        >
          <Plus className="h-4 w-4 mr-2" /> Add Certification
        </Button>
      </div>

      <div className="mb-8">
        <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">Research Papers</h3>
        {papers.map((paper, index) => (
          <div key={`paper-${index}`} className="flex items-center mb-2">
            <Input
              placeholder="Machine Learning Approaches to Natural Language Processing..."
              value={paper}
              onChange={(e) => handleChangeItem("papers", index, e.target.value)}
              className="flex-1 mr-2"
            />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              onClick={() => handleRemoveItem("papers", index)}
            >
              <Trash className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          className="w-full mt-2 border-dashed border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-resume-primary hover:text-resume-primary"
          onClick={() => handleAddItem("papers")}
        >
          <Plus className="h-4 w-4 mr-2" /> Add Research Paper
        </Button>
      </div>

      <div>
        <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">Extracurricular Activities</h3>
        {activities.map((activity, index) => (
          <div key={`activity-${index}`} className="flex items-center mb-2">
            <Input
              placeholder="Volunteer at Local Tech Meetups..."
              value={activity}
              onChange={(e) => handleChangeItem("activities", index, e.target.value)}
              className="flex-1 mr-2"
            />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              onClick={() => handleRemoveItem("activities", index)}
            >
              <Trash className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          className="w-full mt-2 border-dashed border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-resume-primary hover:text-resume-primary"
          onClick={() => handleAddItem("activities")}
        >
          <Plus className="h-4 w-4 mr-2" /> Add Activity
        </Button>
      </div>
    </div>
  );
}
