import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { animated, useSpring } from "react-spring";
import emailjs from "@emailjs/browser";

import styles from "./contactMe.module.css";
import { api } from "../../emailKey";

const ContactMe = () => {
  const transition = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(30%)" },
  });

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const onSubmit = (e) => {
    e.preventDefault();
    {
      /*let templateParams = {
      from_name: e.target[0].value,
      to_name: "Ian",
      message: e.target[2].value,
    };
    emailjs
      .send("service_u7ewsti", api.TEMPLATE_ID, templateParams, api.USER_ID)
      .catch((err) => console.log(err));*/
    }
    setOpen(true);
  };

  return (
    <>
      <animated.div style={transition}>
        <div className={styles.container}>
          <h2> Get In Touch </h2>
          <div className={styles.sub_container}>
            <div className={styles.form}>
              <form action="" onSubmit={onSubmit}>
                <div className={styles.form_sub_container}>
                  <input placeholder="name" required />
                  <input type="email" placeholder="email" required />
                </div>
                <textarea placeholder="message" required />

                <div
                  onClick={() => document.getElementById("form_button").click()}
                  className={`${styles.button} ${styles.button_6}`}
                >
                  <div className={styles.spin}></div>
                  <a href="#">Send !</a>
                </div>
                <button id="form_button" style={{ display: "none" }}>
                  {" "}
                  Real{" "}
                </button>
              </form>
            </div>
            <div className={styles.contact}>
              <h3> Phone Number </h3>
              <p
                title="Call +91 9930892362"
                onClick={() => window.open("tel:+919930892362", "_self")}
              >
                {" "}
                +91 9930892362{" "}
              </p>
              <p
                title="Call +971 561832073"
                onClick={() => window.open("tel:+971561832073", "_self")}
              >
                {" "}
                +971 561832073{" "}
              </p>
              <h3> Email ID </h3>
              <p
                title="Send an email"
                onClick={() =>
                  window.open("mailto:dsouzaian2020@gmail.com", "_self")
                }
              >
                {" "}
                dsouzaian2020@gmail.com{" "}
              </p>
              <h3> Address </h3>
              <p
                title="View on Maps"
                onClick={() =>
                  window.open("https://goo.gl/maps/ai4jtP2jQUatV3es9")
                }
              >
                {" "}
                Andheri, Mumbai, India{" "}
              </p>
            </div>
          </div>
        </div>
      </animated.div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Your message has been sent. Thank You !
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactMe;
