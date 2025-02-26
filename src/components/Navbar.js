import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.navbarBackground};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.6rem;
  color: ${(props) => props.theme.color};
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 30px;
  font-size: 1.1rem;
  font-weight: 600;

  li {
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>MyPortfolio</Logo>
      <NavLinks>
        <li><Link to="hero" smooth={true} offset={-50}>Home</Link></li>
        <li><Link to="WorkExperience" smooth={true} offset={-50}>Work Experience</Link></li>
		<li><Link to="skills" smooth={true} offset={-50}>Skills</Link></li>
        <li><Link to="projects" smooth={true} offset={-50}>Projects</Link></li>
        <li><Link to="Education" smooth={true} offset={-50}>Education</Link></li>
        <li><Link to="certifications" smooth={true}>Certifications</Link></li>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;