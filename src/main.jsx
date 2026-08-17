import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import IR35Checker from "./App.jsx";
import Articles from "./Articles.jsx";

const COLORS = {
  navy: "#0F1F3D",
  amber: "#F5A623",
  white: "#FFFFFF",
  midGray: "#8A97B0",
  lightGray: "#F4F6FA",
};

function Nav({ currentPage, setPage }) {
  return (
    <div style={{ background: COLORS.navy, padding: "0" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", gap: 12 }}>
        <div
          onClick={() => setPage("checker")}
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", flex: 1 }}
        >
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: COLORS.amber, display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: 14, color: COLORS.navy, flexShrink: 0
          }}>IR</div>
          <div style={{ color: COLORS.white, fontWeight: 700, fontSize: 15 }}>IR35 Checker</div>
        </div>

        <div style={{ display: "flex", gap: 4 }}>
          <button
            onClick={() => setPage("checker")}
            style={{
              padding: "7px 14px", borderRadius: 8, border: "none", fontFamily: "inherit",
              background: currentPage === "checker" ? "rgba(255,255,255,0.15)" : "transparent",
              color: currentPage === "checker" ? COLORS.white : COLORS.midGray,
              fontSize: 13, fontWeight: 600, cursor: "pointer"
            }}
          >Check Status</button>
          <button
            onClick={() => setPage("articles")}
            style={{
              padding: "7px 14px", borderRadius: 8, border: "none", fontFamily: "inherit",
              background: currentPage === "articles" ? "rgba(255,255,255,0.15)" : "transparent",
              color: currentPage === "articles" ? COLORS.white : COLORS.midGray,
              fontSize: 13, fontWeight: 600, cursor: "pointer"
            }}
          >IR35 Guides</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("checker");

  return (
    <div style={{ minHeight: "100vh", background: COLORS.lightGray, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Nav currentPage={page} setPage={setPage} />
      {page === "checker" ? (
        <IR35Checker embedded />
      ) : (
        <Articles onStartChecker={() => setPage("checker")} />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
