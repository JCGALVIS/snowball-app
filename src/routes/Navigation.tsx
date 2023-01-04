import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />}></Route>
            ))}
            <Route
              path="/*"
              element={<Navigate to={routes[0].to} replace />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
