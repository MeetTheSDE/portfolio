import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "./styles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Navbar toggleTheme={toggleTheme} />
      <Hero />
	  <WorkExperience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
    </ThemeProvider>
  );
};

export default App;