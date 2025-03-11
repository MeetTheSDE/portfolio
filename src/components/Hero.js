import React from "react";
import "./Hero.css"; // Import your styles

const Hero = () => {
	const scrollToWorkExperience = () => {
		const section = document.getElementById("WorkExperience");
		if (section) {
			const targetPosition = section.getBoundingClientRect().top + window.scrollY - 50;
			const startPosition = window.scrollY;
			const distance = targetPosition - startPosition;
			const duration = 1000;
			let startTime = null;

			const smoothScroll = (currentTime) => {
				if (!startTime) startTime = currentTime;
				const timeElapsed = currentTime - startTime;
				const progress = Math.min(timeElapsed / duration, 1);
				const easeInOutCubic = progress < 0.5 
					? 4 * progress * progress * progress 
					: 1 - Math.pow(-2 * progress + 2, 3) / 2;
				
				window.scrollTo(0, startPosition + distance * easeInOutCubic);
				
				if (timeElapsed < duration) {
					requestAnimationFrame(smoothScroll);
				}
			};
			requestAnimationFrame(smoothScroll);
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