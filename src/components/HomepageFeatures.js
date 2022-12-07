import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "DevSecOps",
    Svg: require("../../static/img/tf02.svg").default,
    description: (
      <>
        <code>Automate</code> Infrastructure on Any Cloud and <code>Provision</code>, change, and version resources on any environment
      </>
    ),
  },
  {
    title: "DevSecOps",
    Svg: require("../../static/img/logo/pulumi.svg").default,
    description: (
      <>
        <code>Deliver</code> infrastructure with high velocity and scale through software engineering.
      </>
    ),
  },
  {
    title: "DevSecOps",
    Svg: require("../../static/img/logo/crossplane-horizontal-color.svg").default,
    description: (
      <>
        <code>Build</code> control planes without needing to write code
      </>
    ),
  },
  // {
  //   title: "DevSecOps",
  //   Svg: require("../../static/img/cloudformation.svg").default,
  //   description: (
  //     <>
  //       <code>Deploy</code> end-to-end architectures that contain all the
  //       services you need using CloudFormation
  //     </>
  //   ),
  // },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <a href="https://terraform.io">
          <Svg className={styles.featureSvg} alt={title} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        {/* <h1>{title}</h1> */}
        <h2>{description}</h2>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
