import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./index.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
// PASTE YOUR CLERK PUBLISHABLE_KEY HERE
// TO GET IT GO TO https://clerk.com/docs/react/getting-started/quickstart

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

// THEN SIGNUP HERE
// THEN YOU WILL GET YOUR KEY AFTER CREATING THE PROJECT.

ReactDOM.createRoot(document.getElementById("root")).render(
 <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
);
