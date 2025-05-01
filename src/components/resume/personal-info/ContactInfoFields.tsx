
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Mail, Phone, Info } from "lucide-react";

interface ContactInfoFieldsProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ContactInfoFields({ formData, handleChange }: ContactInfoFieldsProps) {
  return (
    <>
      <TooltipProvider>
        <div className="input-group">
          <div className="flex justify-between">
            <Label htmlFor="email">Email Address</Label>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-gray-400 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Use a professional email address</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex items-center mt-1">
            <Mail className="h-4 w-4 text-gray-500 mr-2" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="sheshank@example.com"
              value={formData.email || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </TooltipProvider>

      <TooltipProvider>
        <div className="input-group">
          <Label htmlFor="phone">Phone Number</Label>
          <div className="flex items-center mt-1">
            <Phone className="h-4 w-4 text-gray-500 mr-2" />
            <Input
              id="phone"
              name="phone"
              placeholder="+91 123 456 7890"
              value={formData.phone || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </TooltipProvider>
    </>
  );
}
