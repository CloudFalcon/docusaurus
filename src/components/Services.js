import React from "react";
import clsx from "clsx";
import styles from "./Services.module.css";

const ServicesList = [
  {
    title: "Foundations",
    desc: "Landing zone, Baseline",
  },
  {
    title: "Networking",
    desc: "VPC, DNS, Route53, VPN",

  },
  {
    title: "RefArchs",
    desc: "EC2, ECS, EKS",

  },
  {
    title: "Compliance",
    desc: "CIS Benchmark",

  },
  {
    title: "Automations",
    desc: "CICD",

  },
];

function Service({ title, desc }) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        <h2>
          {title}
        </h2>
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
