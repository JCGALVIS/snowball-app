import { useState } from "react";

import { useForm } from "../../hooks/useForm";

export const useCategories = () => {
  const { categorie, onChange } = useForm({
    categorie: "",
  });

  const [error, setError] = useState({
    hasError: false,
    message: "",
  });

  const onSubmitSave = (e: any) => {
    e.preventDefault();
    if (categorie.length <= 0)
      return setError({
        hasError: true,
        message: "app.categories-error-empty",
      });

    setError({
      hasError: false,
      message: "",
    });
    onChange("", "categorie");
  };

  return {
    categorie,
    error,
    onChange,
    onSubmitSave,
  };
};
