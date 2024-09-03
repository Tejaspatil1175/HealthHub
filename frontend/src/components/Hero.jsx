import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
  At Healthub Medical Institute, we are committed to delivering exceptional 
  healthcare services, combining innovation with compassionate care. Our 
  state-of-the-art facility is supported by a team of highly skilled professionals
   who are dedicated to providing personalized treatment tailored to each individual's 
   needs. Your health and well-being are at the heart of everything we do, ensuring a
    supportive and seamless journey toward achieving optimal wellness.
</p>

        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
