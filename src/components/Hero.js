import React from "react";
import "./Hero.css"; // Import your styles

const Hero = () => {
	const scrollToWorkExperience = () => {
		const section = document.getElementById("WorkExperience");
		if (section) {
			const topOffset = section.offsetTop - 50;
			section.scrollIntoView({ top: topOffset, behavior: "smooth" });
		}
	  };

  return (
    <div className="hero-container" id = "hero">
      {/* Hero Content */}
      <div className="hero-content">
        <img src="/profile-pic.png" alt="Profile" className="profile-pic" />
        <h1>Meetkumar Patel</h1>
        <p>I'm a Software Engineer</p>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
        </div>

        {/* Hire Me Button */}
        <button className="hire-btn" onClick={scrollToWorkExperience}>Hire Me</button>
      </div>
    </div>
  );
};

export default Hero;