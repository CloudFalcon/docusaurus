import React from "react";
import clsx from "clsx";
import styles from "./Tools.module.css";

const ToolList = [
  {
    title: "Terraform",
    url: "https://terraform.io/",
    Svg: require("../../static/img/logo/tf01.svg").default,
  },
  {
    title: "Packer",
    url: "https://packer.io/",
    Svg: require("../../static/img/logo/packer.svg").default,
  },
  {
    title: "Vault",
    url: "https://vaultproject.io/",
    Svg: require("../../static/img/logo/vault.svg").default,
  },
  {
    title: "Docker",
    url: "https://www.docker.com/",
    Svg: require("../../static/img/logo/docker.svg").default,
  },
  {
    title: "Ansible",
    url: "https://www.ansible.com/",
    Svg: require("../../static/img/logo/ansible.svg").default,
  },
  {
    title: "k8s",
    url: "https://www.kubernetes.io/",
    Svg: require("../../static/img/logo/k8s.svg").default,
  },
  {
    title: "Helm",
    url: "https://www.helm.sh/",
    Svg: require("../../static/img/logo/helm.svg").default,
  },
  {
    title: "Jenkins",
    url: "https://www.jenkins.io/",
    Svg: require("../../static/img/logo/jenkins.svg").default,
  },
  {
    title: "Prometheus",
    url: "https://www.prometheus.io/",
    Svg: require("../../static/img/logo/prometheus.svg").default,
  },
  {
    title: "Grafana",
    url: "https://www.grafana.com/",
    Svg: require("../../static/img/logo/grafana.svg").default,
  },
  {
    title: "Teleport",
    url: "https://www.goteleport.com/",
    Svg: require("../../static/img/logo/teleport.svg").default,
  },
  {
    title: "Linux",
    url: "https://www.linuxfoundation.org/",
    Svg: require("../../static/img/logo/linux.svg").default,
  },
];

function Tool({ Svg, title, url }) {
  return (
    <div className={clsx("col col--1")}>
      <div className="text--center">
        <a href={url}>
          <Svg className={styles.ToolSvg} alt={title} />
        </a>
      </div>
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
