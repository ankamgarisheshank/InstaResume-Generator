
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TooltipProvider } from "@/components/ui/tooltip";

interface SocialInfoFieldsProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SocialInfoFields({ formData, handleChange }: SocialInfoFieldsProps) {
  return (
    <>
      <TooltipProvider>
        <div className="input-group">
          <Label htmlFor="github">GitHub Profile URL</Label>
          <Input
            id="github"
            name="github"
            placeholder="https://github.com/username"
            className="mt-1"
            value={formData.github || ""}
            onChange={handleChange}
          />
        </div>
      </TooltipProvider>

      <TooltipProvider>
        <div className="input-group">
          <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
          <Input
            id="linkedin"
            name="linkedin"
            placeholder="https://linkedin.com/in/username"
            className="mt-1"
            value={formData.linkedin || ""}
            onChange={handleChange}
          />
        </div>
      </TooltipProvider>
    </>
  );
}
