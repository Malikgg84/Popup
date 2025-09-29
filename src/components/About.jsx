import React from "react";
import { useLocation, } from "react-router-dom";

export default function About() {
  const location  = useLocation().pathname
  return <div>About</div>;
}
