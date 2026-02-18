import React from "react";

const Contact = () => {
  return (
    <>
      <h2>Contact</h2>
      <p>
        Feel free to connect for collaborations, internships, or opportunities.
      </p>

      <p>
        📧{" "}
        <a
          href="mailto:biancamalhotra2004@gmail.com"
          className="green-link"
        >
          biancamalhotra2004@gmail.com
        </a>
      </p>

      <p>
        🔗{" "}
        <a
          href="https://www.linkedin.com/in/bianca-malhotra"
          target="_blank"
          rel="noopener noreferrer"
          className="green-link"
        >
          LinkedIn Profile
        </a>
      </p>
    </>
  );
};

export default Contact;
