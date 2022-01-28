import React from "react";

import styles from "./navbar.module.css";

const Navbar = ({ setNav, nav }) => {
  return (
    <div className={styles.container}>
      <h3
        style={{ color: nav === 0 ? "#1890ff" : "#fff" }}
        onClick={() => setNav(0)}
      >
        {" "}
        Home{" "}
      </h3>
      <h3
        style={{ color: nav === 1 ? "#1890ff" : "#fff" }}
        onClick={() => setNav(1)}
      >
        {" "}
        About Me{" "}
      </h3>
      <h3
        style={{ color: nav === 2 ? "#1890ff" : "#fff" }}
        onClick={() => setNav(2)}
      >
        {" "}
        Skills{" "}
      </h3>
      <h3
        style={{ color: nav === 3 ? "#1890ff" : "#fff" }}
        onClick={() => setNav(3)}
      >
        {" "}
        Projects{" "}
      </h3>
      <h3
        style={{ color: nav === 4 ? "#1890ff" : "#fff" }}
        onClick={() => setNav(4)}
      >
        {" "}
        Contact Me{" "}
      </h3>
    </div>
  );
};

export default Navbar;
