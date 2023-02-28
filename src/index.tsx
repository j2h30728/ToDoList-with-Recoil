import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import router from "./Router";
import { RouterProvider } from "react-router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
