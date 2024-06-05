import React from "react";
import { animated, useSpring } from "react-spring";

import styles from "./skills.module.css";
import react from "../../images/atomic.png";
import nodejs from "../../images/nodejs.png";
import linux from "../../images/linux.png";
import figma from "../../images/figma.png";
import redux from "../../images/redux.png";
import mongo from "../../images/leaf.png";
import design from "../../images/web-design.png";
import native from "../../images/native.png";
import graphql from "../../images/graphql.png";
import tauri from "../../images/tauri.png";
import nextjs from "../../images/nextjs.png";

const Skills = ({ nav }) => {
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
        <div className={styles.box}>
          <img
            src={nextjs}
            alt="icon"
          />
          <h3> NextJS </h3>
        </div>
        <div className={styles.box}>
          <img
            src={react}
            alt="icon"
          />
          <h3> ReactJS </h3>
        </div>
        <div className={styles.box}>
          <img
            src={redux}
            alt="icon"
          />
          <h3> Redux </h3>
        </div>
        <div className={styles.box}>
          <img
            src={native}
            alt="icon"
          />
          <h3> React Native </h3>
        </div>
        <div className={styles.box}>
          <img
            src={nodejs}
            alt="icon"
          />
          <h3> NodeJS </h3>
        </div>
        <div className={styles.box}>
          <img
            src={graphql}
            alt="icon"
          />
          <h3> GraphQL </h3>
        </div>
        <div className={styles.box}>
          <img
            src={tauri}
            alt="icon"
          />
          <h3> Tauri </h3>
        </div>
        <div className={styles.box}>
          <img
            src={linux}
            alt="icon"
          />
          <h3> Linux </h3>
        </div>
        <div className={styles.box}>
          <img
            src={figma}
            alt="icon"
          />
          <h3> Figma </h3>
        </div>
        <div className={styles.box}>
          <img
            src={mongo}
            alt="icon"
          />
          <h3> MongoDB </h3>
        </div>
        <div className={styles.box}>
          <img
            src={design}
            alt="icon"
          />
          <h3> UI / UX </h3>
        </div>
      </div>
    </animated.div>
  );
};

export default Skills;
