import React, { useRef } from "react";
import { animated, useSpring } from "react-spring";

import styles from "./projects.module.css";

import artemis from "../../images/artemis.png";
import bombayjesuits from "../../images/bombayjesuits.png";
import wollof from "../../images/wollof.png";
import todo from "../../images/todo-list.png";

const projects = [
  {
    img: artemis,
    title: "Artemis",
    description:
      "An Uber-like ambulance booking service. (Live not available as Google Maps API Key required)",
    video: "link",
    code: "https://github.com/damndaniel2000/artemis",
  },
  {
    img: bombayjesuits,
    title: "Bombay Jesuits Today",
    description:
      "A website made for the Bombay Jesuits to upload blogs and videos to continue reaching out to the community during the pandemic.",
    live: "https://bombayjesuitstoday.herokuapp.com/",
    code: "https://github.com/damndaniel2000/bombayjesuitstoday",
  },
  {
    img: wollof,
    title: "Wollof",
    description:
      "A tracking application for senior citizens and children who due to some medical condition or other reason can't take responsibility of their whereabouts. (same issues as Artemis)",
    video: "link",
    code: "https://github.com/damndaniel2000/wollof",
  },
  {
    img: todo,
    title: "To-Do List",
    description:
      "A to-do list made as an assignment for the selection of a company.",
    live: "https://damndaniel2000-todo.herokuapp.com/",
    code: "https://github.com/damndaniel2000/to-do-app",
  },
];

const FollowCarousel = ({ nav }) => {
  const container = useRef();

  const [divId, setDiv] = React.useState(null);

  const forwardTransition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(50%)" },
  });
  const backwardTransition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(-50%)" },
  });
  const transition = nav ? forwardTransition : backwardTransition;

  const leftScroll = () => {
    container.current.scrollLeft += 500;
  };
  const rightScroll = () => {
    container.current.scrollLeft -= 500;
  };

  React.useEffect(() => setDiv(document.querySelector("#projects")), []);

  let x = 0,
    y = 0,
    top = 0,
    left = 0;

  let draggingFunction = (e) => {
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", draggingFunction);
    });
    if (divId !== null) {
      divId.scrollLeft = left - e.pageX + x;
      divId.scrollTop = top - e.pageY + y;
    }
  };

  if (divId !== null)
    divId.addEventListener("mousedown", (e) => {
      e.preventDefault();

      y = e.pageY;
      x = e.pageX;
      top = divId.scrollTop;
      left = divId.scrollLeft;

      document.addEventListener("mousemove", draggingFunction);
    });

  return (
    <>
      <animated.div style={transition}>
        <section ref={container} id="projects" className={styles.container}>
          {projects.map((item, index) => (
            <div className={styles.box}>
              <img src={item.img} alt="project" />
              <h2> {item.title} </h2>
              <p>{item.description}</p>
              <div className={styles.button_group}>
                <div className={`${styles.button} ${styles.button_6}`}>
                  <div className={styles.spin}></div>
                  <a href={item.video ? item.video : item.live} target="_blank">
                    {item.video ? "Video" : "Live"}
                  </a>
                </div>
                <div className={`${styles.button} ${styles.button_6}`}>
                  <div className={styles.spin}></div>
                  <a href={item.code} target="_blank">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
        <div className={styles.scroll_container}>
          <div className={styles.scroll}>Drag To View More ></div>
        </div>
      </animated.div>
    </>
  );
};

export default FollowCarousel;
