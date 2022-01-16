import React from "react";
import clsx from "clsx";
import styles from "./Tools.module.css";

const TFToolList = [
  {
    title: "⚙️ Trunk",
    url: "https://trunk.io/",
  },
  {
    title: "📄 tfdocs",
    url: "https://terraform-docs.io/",
  },
  {
    title: "🔧 tflint",
    url: "https://github.com/terraform-linters/tflint",
  },
  {
    title: "🔒 tfsec",
    url: "https://aquasecurity.github.io/tfsec/",
  },
  {
    title: "💰 tfcost",
    url: "https://www.infracost.io/",
  },
  {
    title: "🚧 tfdrift",
    url: "https://driftctl.com/",
  },
];

function TFTool({ title, url }) {
  return (
    <div className={clsx("col col--2")}>
      <div className="text--center">
        <h1>
          <a href={url}>{title}</a>
        </h1>
      </div>
    </div>
  );
}

export default function Tools() {
  return (
    <section className={styles.tools}>
      <div className="container">
        <div className="row">
          {TFToolList.map((props, idx) => (
            <TFTool key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
