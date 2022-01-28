import React from "react";
import { animated, useSpring } from "react-spring";

import styles from "./about.module.css";

import person from "../../images/person.svg";

const About = ({ nav }) => {
  const forwardTransition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(50%)" },
  });
  const backwardTransition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(-50%)" },
  });
  const transition = !nav ? backwardTransition : forwardTransition;

  return (
    <animated.div style={transition}>
      <div className={styles.container}>
        <div className={styles.sub_container}>
          <h2> About Me </h2>
          <p>
            I am a Full Stack Web Developer specializing in MERN based
            architectures and a certified Ethical Hacker / Pen Tester.
            <br />
            <br />I have fun in both the professions I have taken up and that
            gives me an edge over most people. <br /> <br />I run a small{" "}
            <a
              href="https://www.instagram.com/just_another_cinema_buff/"
              target="_blank"
              title="just_another_cinema_buff"
            >
              movie page
            </a>{" "}
            on Instagram as a hobby and am also part of a podcast called{" "}
            <a
              href="https://www.youtube.com/channel/UCkUuVjmwH40NvTLeIQamvBA"
              target="_blank"
              title="The Seamen Youtube Channel"
            >
              The Seamen.
            </a>
          </p>
        </div>
        <img src={person} />
      </div>
    </animated.div>
  );
};

export default About;
