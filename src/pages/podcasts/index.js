import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

function Podcasts() {
  return (
    <Layout title="Podcasts">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>
          Edit <code>pages/podcasts/index.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}

export default Podcasts;
