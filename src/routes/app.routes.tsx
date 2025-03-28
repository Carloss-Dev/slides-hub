import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { baseRoutesSchema } from "./base.schema.routes";
import { slideRoutesSchema } from "./slides.schema.routes";

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

        {slideRoutesSchema.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <main style={{ width: "100vw", height: "100vh" }}>
                {React.createElement(route.element)}
              </main>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
