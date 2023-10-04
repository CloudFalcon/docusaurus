import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Terraform",
    link: "https://www.terraform.io/",
    Svg: require("../../static/img/logo/tf.svg").default,
    description: (
      <>
        <code>Automate</code> Infrastructure on Any Cloud and Provision, change,
        and version resources on any environment.
      </>
    ),
  },
  {
    title: "AWS CDK",
    link: "https://aws.amazon.com/cdk/",
    Svg: require("../../static/img/logo/cdk.svg").default,
    description: (
      <>
        <code>Deploy</code> end-to-end architectures that contain all the
        services you need to run your applications.
      </>
    ),
  },
  {
    title: "Pulumi",
    link: "https://www.pulumi.com/",
    Svg: require("../../static/img/logo/pulumi02.svg").default,
    description: (
      <>
        <code>Deliver</code> infrastructure with high velocity and scale through
        software engineering.
      </>
    ),
  },
  {
    title: "Crossplane",
    link: "https://crossplane.io/",
    Svg: require("../../static/img/logo/crossplane02.svg").default,
    description: (
      <>
        <code>Build</code> control planes without needing to write code.
      </>
    ),
  },
];

function Feature({ Svg, title, link, description }) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h1>
          <a href={link}>{title}</a>
        </h1>
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
