import React, { useRef } from "react";

import styles from "./projects.module.css";

const FollowCarousel = (props) => {
  const container = useRef();

  const [divId, setDiv] = React.useState(null);

  const carouselImages = [
    "https://www.pixel4k.com/wp-content/uploads/2020/08/dark-batman_1596915655.jpg",
    "https://www.pixel4k.com/wp-content/uploads/2020/08/dark-batman_1596915655.jpg",
    "https://www.pixel4k.com/wp-content/uploads/2020/08/dark-batman_1596915655.jpg",
  ].map((img) => {
    return <img src={img} className={styles.img} alt="carousel" key={img} />;
  });

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
      <section ref={container} id="projects" className={styles.container}>
        <div className={styles.box}>
          <img
            src="https://www.pixel4k.com/wp-content/uploads/2020/08/dark-batman_1596915655.jpg"
            alt="project"
          />
          <h2> Artemis </h2>
          <p>
            Arbitror illum ut ullamco adipisicing ut nescius est excepteur.Ipsum
            consequat consectetur ad laborum eu fore.
          </p>
          <button> Code </button>
        </div>
        <div className={styles.box}>
          <img
            src="https://www.pixel4k.com/wp-content/uploads/2020/08/dark-batman_1596915655.jpg"
            alt="project"
          />
          <p>
            Doctrina domesticarum non mandaremus aut quid ita eiusmod.Cillum aut
            consequat, elit quamquam ita export ipsum.Minim cupidatat o cillum
            quorum nam consequat minim ipsum pariatur noster.Dolor relinqueret
            probant sint pariatur, qui laboris qui ullamco.
          </p>
          <button> Github </button>
        </div>
        <div className={styles.box}>
          <img
            src="https://www.pixel4k.com/wp-content/uploads/2020/08/dark-batman_1596915655.jpg"
            alt="project"
          />
          <p>
            Doctrina domesticarum non mandaremus aut quid ita eiusmod.Cillum aut
            consequat, elit quamquam ita export ipsum.Minim cupidatat o cillum
            quorum nam consequat minim ipsum pariatur noster.Dolor relinqueret
            probant sint pariatur, qui laboris qui ullamco.
          </p>
          <button> Github </button>
        </div>
        <div className={styles.box}>
          <img
            src="https://www.pixel4k.com/wp-content/uploads/2020/08/dark-batman_1596915655.jpg"
            alt="project"
          />
          <h2> Artemis </h2>
          <p>
            Arbitror illum ut ullamco adipisicing ut nescius est excepteur.Ipsum
            consequat consectetur ad laborum eu fore.
          </p>
          <button> Github </button>
        </div>
        <div className={styles.box}>
          <img
            src="https://www.pixel4k.com/wp-content/uploads/2020/08/dark-batman_1596915655.jpg"
            alt="project"
          />
          <p>
            Doctrina domesticarum non mandaremus aut quid ita eiusmod.Cillum aut
            consequat, elit quamquam ita export ipsum.Minim cupidatat o cillum
            quorum nam consequat minim ipsum pariatur noster.Dolor relinqueret
            probant sint pariatur, qui laboris qui ullamco.
          </p>
          <button> Github </button>
        </div>
      </section>
      <div className={styles.scroll_container}>
        <div className={styles.scroll}>Drag To View More Photos ></div>
      </div>
    </>
  );
};

export default FollowCarousel;
