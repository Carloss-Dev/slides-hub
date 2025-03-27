import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { baseRoutesSchema } from "./base.schema.routes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {baseRoutesSchema.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={React.createElement(route.element)}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
