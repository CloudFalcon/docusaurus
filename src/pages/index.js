import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import FontAwesomeIcons from "../components/FontAwesomeIcons";

import { InlineWidget } from "react-calendly";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <div className="button button--secondary button--lg">
            👋 Let's meet! - 30min ⏱️
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Salam from ${siteConfig.title}`}
      description="Elegant DevSecOps"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <InlineWidget url="https://calendly.com/mohammed-cloudfalcon/30min"></InlineWidget>
    </Layout>
  );
}
