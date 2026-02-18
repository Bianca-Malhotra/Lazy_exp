import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const Dashboard = lazy(() =>
  delay(5000).then(() => import("./pages/dashboard"))
);

const About = lazy(() =>
  delay(5000).then(() => import("./pages/about"))
);

const Contact = lazy(() =>
  delay(5000).then(() => import("./pages/contact"))
);

// ... (imports and delay function remain the same)

function App() {
  return (
    <div className="matrix-theme">
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="fullscreen-loader">
              <div className="loader-card">
                <div className="buffer-circle"></div>
                <p>Loading...</p>
                <p className="warning-text">
                  Please wait do not quit (5s)
                </p>
              </div>
            </div>
          }
        >
          <div className="center-container">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              {/* Using the fade-in class to ensure smooth reveal */}
              <Route path="/dashboard" element={<div className="card fade-in"><Dashboard /></div>} />
              <Route path="/about" element={<div className="card fade-in"><About /></div>} />
              <Route path="/contact" element={<div className="card fade-in"><Contact /></div>} />
            </Routes>
          </div>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
