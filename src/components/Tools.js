import React from "react";
import clsx from "clsx";
import styles from "./Tools.module.css";

const ToolList = [
  {
    title: "Terraform",
    Svg: require("../../static/img/logo/tf01.svg").default,
  },
  {
    title: "Packer",
    Svg: require("../../static/img/logo/packer.svg").default,
  },
  {
    title: "Vault",
    Svg: require("../../static/img/logo/vault.svg").default,
  },
  {
    title: "Docker",
    Svg: require("../../static/img/logo/docker.svg").default,
  },
  {
    title: "Ansible",
    Svg: require("../../static/img/logo/ansible.svg").default,
  },
  {
    title: "k8s",
    Svg: require("../../static/img/logo/k8s.svg").default,
  },
  {
    title: "Helm",
    Svg: require("../../static/img/logo/helm.svg").default,
  },
  {
    title: "Jenkins",
    Svg: require("../../static/img/logo/jenkins.svg").default,
  },
  {
    title: "Prometheus",
    Svg: require("../../static/img/logo/prometheus.svg").default,
  },
  {
    title: "Grafana",
    Svg: require("../../static/img/logo/grafana.svg").default,
  },
  {
    title: "Teleport",
    Svg: require("../../static/img/logo/teleport.svg").default,
  },
  {
    title: "Linux",
    Svg: require("../../static/img/logo/linux.svg").default,
  },
];

function Tool({ Svg, title }) {
  return (
    <div className={clsx("col col--1")}>
      <div className="text--center">
        <Svg className={styles.ToolSvg} alt={title} />
      </div>
      {/* <div className="text--center padding-horiz--md">
        <h4>{title}</h4>
      </div> */}
    </div>
  );
}

export default function Tools() {
  return (
    <section className={styles.tools}>
      <div className="container">
        <div className="row">
          {ToolList.map((props, idx) => (
            <Tool key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
