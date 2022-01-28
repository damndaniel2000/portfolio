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
        "Poppins",
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

  const [aboutTrans, setAboutTrans] = useState(true);
  const [skillTrans, setSkillTrans] = useState(true);
  const [projectTrans, setProjectTrans] = useState(true);

  React.useEffect(() => {
    nav > 1 && setAboutTrans(false);
    nav < 1 && setAboutTrans(true);

    nav > 2 && setSkillTrans(false);
    nav < 2 && setSkillTrans(true);

    nav > 3 && setProjectTrans(false);
    nav < 3 && setProjectTrans(true);
  }, [nav]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar setNav={setNav} nav={nav} />
      {nav === 0 && <Main />}
      {nav === 1 && <About nav={aboutTrans} />}
      {nav === 2 && <Skills nav={skillTrans} />}
      {nav === 3 && <Projects nav={projectTrans} />}
      {nav === 4 && <ContactMe />}
    </ThemeProvider>
  );
}

export default App;
