import React from "react";
import clsx from "clsx";
import styles from "./Services.module.css";
import { icon } from "@fortawesome/fontawesome-svg-core";

const ServicesList = [
  {
    title: "Landing Zone",
    desc: "Multi-Account Secure Setup",
  },
  {
    title: "Services Catalog",
    desc: "VPC, DNS, RDS, Cache, MQ",
  },
  {
    title: "RefArchs",
    desc: "EC2, ECS, EKS",
  },
  {
    title: "Platform Engineering",
    icon: "fas fa-rocket",
    desc: "CI/CD - Self Service",
  },
];

function Service({ title, desc }) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        <h2>{title}</h2>
        <h1></h1>
      </div>
      <div class="alert alert--success" role="alert">
        IaC <strong>{desc}</strong>
      </div>
      <br></br>
    </div>
  );
}

export default function Services() {
  return (
    <section className={styles.services}>
      <div className="container">
        <div className="row">
          {ServicesList.map((props, idx) => (
            <Service key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
