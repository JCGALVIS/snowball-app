import React from "react";
import { useIntl } from "react-intl";

export const Categories = () => {
  const { formatMessage } = useIntl();
  return <div>{formatMessage({ id: "app.categories-title" })}</div>;
};
