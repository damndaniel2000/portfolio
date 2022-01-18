import React from "react";
import { animated, useSpring } from "react-spring";

import styles from "./about.module.css";

import person from "../../images/person.svg";

const About = () => {
  const transition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(30%)" },
  });

  return (
    <animated.div style={transition}>
      <div className={styles.container}>
        <div className={styles.sub_container}>
          <h2> About Me </h2>
          <p>
            Aut duis senserit relinqueret, officia ut amet. Quibusdam esse
            officia iudicem iis anim appellat sed illum labore.A ullamco
            concursionibus, an duis cernantur praetermissum.Export nescius
            ullamco ea si duis officia concursionibus.Probant sed sint, ita esse
            o irure.Commodo minim est pariatur graviterque, et quis ubi
            sint.Quamquam non sint non de nisi multos tamen appellat.{" "}
          </p>
        </div>
        <img src={person} />
      </div>
    </animated.div>
  );
};

export default About;
