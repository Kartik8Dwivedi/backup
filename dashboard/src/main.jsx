import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Template from "./Layouts/Template.jsx";
import Error from "./Components/Error.jsx";
import SignUpPage from "./Components/SignUpPage.jsx";
import SignInPage from "./Components/SignInPage.jsx";
import Tables from "./Components/Tables.jsx";
import Data from "./Components/Data.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/link",

    element: <App />,
    errorElement: <Template Component={Error}/>,
  },
  {
    path: "/",

    element: <Template Component={Data}/>,
    errorElement: <Template Component={Error}/>,
  },
  {
    path: "/tables",
    element: <Template Component={Tables}/>,
    errorElement: <Template Component={Error}/>,
  },
  {
    path: "/signup",
    element: <Template Component={SignUpPage} />,
    errorElement: <Template Component={Error}/>,
  },
  {
    path: "/signin",
    element: <Template Component={SignInPage} />,
    errorElement: <Template Component={Error}/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router} />
  </ClerkProvider>
);
