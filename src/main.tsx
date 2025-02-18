import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LoadingProvider } from "./contexts/loading-context.tsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { GoogleOAuthProvider } from "@react-oauth/google";
const googleAuthKey = import.meta.env.VITE_GOOGLE_AUTH_KEY;
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LoadingProvider>
          <GoogleOAuthProvider clientId={googleAuthKey}>
            <App />
          </GoogleOAuthProvider>
        </LoadingProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
