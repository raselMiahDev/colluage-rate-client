import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LoadingProvider } from "./contexts/loading-context.tsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { GoogleOAuthProvider } from "@react-oauth/google";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LoadingProvider>
          <GoogleOAuthProvider clientId="679021578353-j772nuso5ct1penjtkihci44455tfb5u.apps.googleusercontent.com">
            <App />
          </GoogleOAuthProvider>
        </LoadingProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
