import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

function Resume() {
  return (
    <Layout title="Resume">
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
          Edit <code>pages/resume/index.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}

export default Resume;
