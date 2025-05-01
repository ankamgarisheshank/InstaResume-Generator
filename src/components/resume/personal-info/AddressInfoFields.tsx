
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MapPin, Globe } from "lucide-react";

interface AddressInfoFieldsProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AddressInfoFields({ formData, handleChange }: AddressInfoFieldsProps) {
  return (
    <>
      <TooltipProvider>
        <div className="input-group col-span-1 md:col-span-2">
          <Label htmlFor="address">Address</Label>
          <div className="flex items-center mt-1">
            <MapPin className="h-4 w-4 text-gray-500 mr-2 self-start mt-3" />
            <Input
              id="address"
              name="address"
              placeholder="City, State"
              value={formData.address || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </TooltipProvider>

      <TooltipProvider>
        <div className="input-group">
          <Label htmlFor="country">Country</Label>
          <div className="flex items-center mt-1">
            <Globe className="h-4 w-4 text-gray-500 mr-2" />
            <Input
              id="country"
              name="country"
              placeholder="India"
              value={formData.country || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </TooltipProvider>
    </>
  );
}
