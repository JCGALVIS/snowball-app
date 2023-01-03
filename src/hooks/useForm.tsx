import { useState } from "react";
export const useForm = <T extends Object>(formFields: T) => {
  const [formData, setFormData] = useState(formFields);

  const onChange = (value: string, field: keyof T) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return {
    ...formData,
    onChange,
  };
};
