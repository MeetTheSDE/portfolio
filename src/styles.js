import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  background: "#ffffff",
  color: "#333333",
  navbarBackground: "#f8f9fa",
  buttonBackground: "#007bff",
  borderColor: "#ddd",
};

export const darkTheme = {
  background: "#121212",
  color: "#f0f0f0",
  navbarBackground: "#333",
  buttonBackground: "#1e90ff",
  borderColor: "#444",
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    box-sizing: border-box;
    overflow-x: hidden;
  }
  
  * {
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  button {
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  section {
    padding: 50px 0;
    text-align: center;
  }
  
  h1, h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto;
  }

  /* Media Queries for responsive design */
  @media screen and (max-width: 768px) {
    h1, h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
      padding: 0 20px;
    }
  }

  @media screen and (max-width: 480px) {
    h1, h2 {
      font-size: 1.8rem;
    }
  }
`;