import React from "react";

export default function Test() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0b0f3b 0%, #1a1a2e 100%)",
      color: "#fff",
      padding: "0",
      textAlign: "center"
    }}>
      <h1>Test Page</h1>
      <p>This is a test page for your SSG setup.</p>
    </div>
  );
}
