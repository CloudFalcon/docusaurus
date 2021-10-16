import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

function Links() {
  return (
    <Layout title="Links">
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
          Edit <code>pages/links/index.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}

export default Links;
