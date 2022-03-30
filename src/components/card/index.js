import React from "react";
import "./style.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-title">
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}
