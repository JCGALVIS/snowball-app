import { useState } from "react";

import { useForm } from "../../hooks/useForm";
import {
  create,
  getCategoriesByCategory,
} from "../../apis/firebase/categories";

export const useCategories = () => {
  const { category, onChange } = useForm({
    category: "",
  });

  const [error, setError] = useState({
    hasError: false,
    message: "",
  });

  const onSubmitSave = async (e: any) => {
    e.preventDefault();
    if (category.length <= 0)
      return setError({
        hasError: true,
        message: "app.categories-error-empty",
      });

    const getCategory = await getCategoriesByCategory({ category });
    if (getCategory.length > 0)
      return setError({
        hasError: true,
        message: "app.categories-error-exist",
      });

    const saveCategory = await create({ category });
    if (!saveCategory)
      return setError({
        hasError: true,
        message: "app.categories-error-save",
      });

    setError({
      hasError: false,
      message: "",
    });
    onChange("", "category");
  };

  return {
    category,
    error,
    onChange,
    onSubmitSave,
  };
};
