import React from "react";
import { TypeAnimation } from "react-type-animation";

const Dashboard = () => {
  return (
    <>
      <h2>
        <TypeAnimation
          sequence={[
            "Aspiring Software Developer",
            1000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h2>

      <p>
        Welcome to my portfolio dashboard. Exploring Artificial Intelligence and Machine Learning through practical projects, technical depth, 
        and real-world applications.
      </p>
    </>
  );
};

export default Dashboard;
