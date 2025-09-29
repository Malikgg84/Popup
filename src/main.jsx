import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./components/Header.jsx";
// import About from "./components/About.jsx";
// import Contact from "./components/Contact.jsx";
import Error from "./Error.jsx";

const Contact = lazy(() => import("./components/Contact.jsx"));
//! if we want to import that file which is not by default exporting than follow this 
const About = lazy(() => import("./components/About.jsx").then(res => {
  console.log(res);
  return {default : res.About}
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <h1>Hello Home</h1>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
