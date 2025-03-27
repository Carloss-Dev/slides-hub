import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesSchema } from "./routes.schema";
import React from "react";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routesSchema.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.slide.isSlide ? (
                <main style={{ width: "100vw", height: "100vh" }}>
                  {React.createElement(route.element)}
                </main>
              ) : (
                React.createElement(route.element)
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
