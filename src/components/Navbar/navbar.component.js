import React from "react";

import styles from "./navbar.module.css";

const Navbar = ({ setNav }) => {
  return (
    <div className={styles.container}>
      <h3 onClick={() => setNav(0)}> Home </h3>
      <h3 onClick={() => setNav(1)}> About Me </h3>
      <h3 onClick={() => setNav(2)}> Skills </h3>
      <h3 onClick={() => setNav(3)}> Projects </h3>
      <h3 onClick={() => setNav(4)}> Contact Me </h3>
    </div>
  );
};

export default Navbar;
