import React from "react";
import clsx from "clsx";
import styles from "./Clouds.module.css";
import { icon } from "@fortawesome/fontawesome-svg-core";

const cloudList = [
  {
    title: "AWS",
    icon: <i class="fab fa-aws"></i>,
  },
  {
    title: "Azure",
    icon: <i class="fab fa-microsoft"></i>,
  },
  {
    title: "GCP",
    icon: <i class="fab fa-google"></i>,
  },
];

function Cloud({ title, icon }) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        {/* <h2>{title}</h2> */}
        <h1>{icon}</h1>
      </div>
      <br></br>
    </div>
  );
}

export default function Clouds() {
  return (
    <section className={styles.cloud}>
      <div className="container">
        <div className="row">
          {cloudList.map((props, idx) => (
            <Cloud key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
