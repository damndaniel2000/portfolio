import React, { useState } from "react";
import "./App.css";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar/navbar.component";
import Main from "./components/Home/home.component";
import About from "./components/About/about.component";
import Skills from "./components/Skills/skills.component";
import Projects from "./components/Projects/projects.component";
import ContactMe from "./components/ContactMe/ContactMe.component";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1890ff",
      },
      secondary: {
        main: "#fff",
      },
    },
    typography: {
      fontFamily: [
        "Rajdhani",
        "Roboto",
        '"Helvetica"',
        "Arial",
        "sans-serif",
      ].join(","),

      button: {
        fontFamily: "rajdhani",
        fontWeight: 800,
        letterSpacing: 2,
      },
      span: {
        color: "#fff",
      },
    },
  });

  const [nav, setNav] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Navbar setNav={setNav} />
      {nav === 0 && <Main />}
      {nav === 1 && <About />}
      {nav === 2 && <Skills />}
      {nav === 3 && <Projects />}
      {nav === 4 && <ContactMe />}
    </ThemeProvider>
  );
}

export default App;
