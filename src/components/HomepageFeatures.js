import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "DevSecOps",
    Svg: require("../../static/img/tf02.svg").default,
    description: (
      <>
        <code>Deploy</code> end-to-end architectures that contain all the{" "}
        <code>
          <a href="/services">services</a>
        </code>{" "}
        you need using{" "}
        <code>
          <a href="https://terraform.io">Terraform</a>
        </code>
      </>
    ),
  },
  // {
  //   title: "DevSecOps",
  //   Svg: require("../../static/img/cdk-logo6-1260x476.svg").default,
  //   description: (
  //     <>
  //       <code>Deploy</code> end-to-end architectures that contain all the
  //       services you need using CDK
  //     </>
  //   ),
  // },
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
    <div className={clsx("col col--12")}>
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
