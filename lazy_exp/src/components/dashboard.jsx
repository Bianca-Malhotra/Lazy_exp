import React from "react";
import cuLogo from "../images/Chandigarh-University-CU-logo.jpg";

export default function Dashboard() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>

        

        <img src={cuLogo} alt="CU Logo" style={styles.logo} />

        <h1 style={styles.name}>Bianca Malhotra</h1>

        <div style={styles.marqueeWrapper}>
          <div style={styles.marqueeContent}>
           • AIML Undergrad • Front-End Developer 
          </div>
        </div>

      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
}
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top left, #ff5f5f, #ff2e63)",
    fontFamily: "'Poppins', sans-serif",
    perspective: "1200px",
    WebkitFontSmoothing: "antialiased",
  },

  card: {
    background: "rgba(255, 255, 255, 0.92)",
    padding: "70px 60px",
    borderRadius: "28px",
    textAlign: "center",
    width: "540px",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    transformStyle: "preserve-3d",
    boxShadow: `
      0 10px 40px rgba(0,0,0,0.25),
      0 0 25px rgba(255, 0, 90, 0.4)
    `,
  },

  heading: {
    fontSize: "22px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "4px",
    color: "#ff004f",
    marginBottom: "40px",
  },

  logo: {
    width: "130px",
    marginBottom: "35px",
  },

  name: {
    fontSize: "44px",
    fontWeight: "800",
    letterSpacing: "2px",
    marginBottom: "40px",
    background: "linear-gradient(90deg, #111, #ff004f)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  marqueeWrapper: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    background: "rgba(255, 0, 80, 0.08)",
    padding: "24px",
    borderRadius: "20px",
  },

  marqueeContent: {
    display: "inline-block",
    animation: "scroll 12s linear infinite",
    fontSize: "20px",
    fontWeight: "500",
    letterSpacing: "1px",
    color: "#333",
  },
};
