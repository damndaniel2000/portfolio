import React from "react";
import { makeStyles } from "@mui/styles";
import { animated, useSpring } from "react-spring";
import Button from "@mui/material/Button";

import styles from "./home.module.css";

import IconButton from "@mui/material/IconButton";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const useStyles = makeStyles({
  icon: {
    "&:hover": { color: "#1890ff" },
  },
});

const Home = () => {
  const classes = useStyles();
  const transition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(-30%)" },
  });

  return (
    <animated.div style={transition}>
      <div className={styles.container}>
        <div className={styles.sub_container}>
          <h1>
            Hello World, I'm{" "}
            <span style={{ color: "#1890ff" }}>Ian D'souza</span>
          </h1>
          <h2> Full Stack Developer / Ethical Hacker </h2>
          <div className={styles.social_media}>
            <IconButton
              onClick={() =>
                window.open("https://www.linkedin.com/in/ian-dsouza/")
              }
              className={classes.icon}
              color="secondary"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              onClick={() => window.open("https://github.com/damndaniel2000")}
              className={classes.icon}
              color="secondary"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("mailto:dsouzaian2020@gmail.com", "_self")
              }
              className={classes.icon}
              color="secondary"
            >
              <EmailIcon />
            </IconButton>
          </div>
          <a
            href="https://drive.google.com/file/d/1gg6tm2BYhSWOpb8IeIOe-_bou-t0Xm5a/view?usp=drive_link"
            className={styles.rotate_button}
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.rotate_button_face}>Resume</span>
            <span className={styles.rotate_button_face_back}>Open</span>
          </a>
        </div>
      </div>
    </animated.div>
  );
};

export default Home;
