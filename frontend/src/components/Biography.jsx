import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="Healthub Overview" className="banner-image" />
      </div>
      <div className="banner">
        <h2>Our Journey</h2>
        <h3>Who We Are</h3>
        <p>
          At Healthub Medical Institute, we are dedicated to providing
          exceptional healthcare services that prioritize your well-being. Our
          team of experts is committed to advancing medical practices and
          delivering personalized care to every patient.
        </p>
        <p>Leading the way in 2024 and beyond, we are pioneers in healthcare innovation.</p>
        <p>We are actively developing a state-of-the-art MERN STACK project to enhance patient care and streamline medical processes.</p>
        <p>
          Our mission is to blend cutting-edge technology with compassionate
          care, ensuring that every individual receives the best possible
          treatment in a supportive and nurturing environment.
        </p>
        <p>At Healthub, we believe in the power of collaboration, continuous learning, and a patient-first approach.</p>
        <p>Your health is our top priority, and we are here to support you every step of the way.</p>
      </div>
    </div>
  );
};

export default Biography;

