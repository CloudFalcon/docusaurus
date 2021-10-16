import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

function Team() {
  return (
    <Layout title="Team">
      <div
        style={{
          display: "block",
          justifyContent: "left",
          alignItems: "left",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>Mohammed Yahya - Almusaddar</p>
        <code>
          DevOps Engineer | AWS Community Builder | Co-organizer of Hamburg
          HashiCorp User Group
        </code>
      </div>
    </Layout>
  );
}

export default Team;
