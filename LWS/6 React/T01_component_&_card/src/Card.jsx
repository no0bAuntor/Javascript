import React from "react";
import profilepic from "./assets/me.jpg"
export default function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilepic} alt="profile picture"></img>
      <h2 className="card-title">Auntor</h2>
      <p className="card-text">Student of ETE department</p>
    </div>
  );
}
