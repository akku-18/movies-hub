import React from "react";
import "./skeleton.css";

export default function Skeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item, index) => <div className="skeleton" key={index} />);
}
