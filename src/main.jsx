import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Skills from "./pages/Skills/Skills.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Resume from "./pages/Resume/Resume.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />
      },
      {
        path: "/Portfolio",
        element: <Portfolio />
      },
      {
        path: "/Skills",
        element: <Skills />
      },
      {
        path: "Contact",
        element: <Contact />
      },
      {
        path: "Resume",
        element: <Resume />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
