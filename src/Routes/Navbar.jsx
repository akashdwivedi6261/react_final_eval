import React from "react";
import { Link } from "react-router-dom";
const links = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/admin",
    title: "Admin"
  }
];

export default function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
      {links.map(({ to, title }) => (
        <button>
          <Link to={to}>{title}</Link>{" "}
        </button>
      ))}
    </div>
  );
}
