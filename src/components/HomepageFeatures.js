import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Architectures Catalog",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        <code>Deploy</code> end-to-end architectures that contain all the
        services you need.
      </>
    ),
  },
  {
    title: "Services Catalog",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        <code>Deploy</code> off-the-shelf services, without writing any code.
      </>
    ),
  },
  {
    title: "Terraform Modules Catalog",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        list of tested battle prove community/AWS modules, and private custom
        modules.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
