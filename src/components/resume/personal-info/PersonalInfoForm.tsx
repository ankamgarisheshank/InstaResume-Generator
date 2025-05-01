
import { useState } from "react";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import BasicInfoFields from "./BasicInfoFields";
import ContactInfoFields from "./ContactInfoFields";
import AddressInfoFields from "./AddressInfoFields";
import SocialInfoFields from "./SocialInfoFields";
import DateOfBirthField from "./DateOfBirthField";
import PersonalInterestsFields from "./PersonalInterestsFields";

interface PersonalInfoFormProps {
  formData: any;
  updateFormData: (section: string, data: any) => void;
}

export default function PersonalInfoForm({ formData, updateFormData }: PersonalInfoFormProps) {
  const [date, setDate] = useState<Date | undefined>(
    formData.dob ? new Date(formData.dob) : undefined
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData("personalInfo", {
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      updateFormData("personalInfo", {
        ...formData,
        dob: selectedDate.toISOString(),
      });
    }
  };

  return (
    <div className="form-section section-animation">
      <h2 className="form-section-title flex items-center">
        <User className="mr-2 h-5 w-5 text-resume-primary" />
        Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BasicInfoFields formData={formData} handleChange={handleChange} />
        
        <DateOfBirthField 
          date={date} 
          handleDateSelect={handleDateSelect} 
        />
        
        <ContactInfoFields formData={formData} handleChange={handleChange} />
        
        <AddressInfoFields formData={formData} handleChange={handleChange} />
        
        <PersonalInterestsFields formData={formData} handleChange={handleChange} />
        
        <SocialInfoFields formData={formData} handleChange={handleChange} />
      </div>
    </div>
  );
}
