import React from "react";
import { Link } from "react-router-dom";

export function Navigation(props) {
  return (
    <div>
      <Link to={"/dashboard"}>Dashboard</Link>
      <Link to={"/catalog"}>Catalog</Link>
    </div>
  );
}
