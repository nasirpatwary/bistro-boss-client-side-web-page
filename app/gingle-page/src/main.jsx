import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import AuthProvider from "./components/providers/AuthProvider";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <AuthProvider>
      <Router />
  </AuthProvider>
    </BrowserRouter>
);
