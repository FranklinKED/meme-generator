import React from "react";
import Logo from "../Images/Troll Face.png";

export default function () {
  return (
    <div className="header-container">
      <nav className="nav">
        <header className="header">
          <img src={Logo} alt="logo-icon" className="logo" />
          <h2>Meme Generator</h2>
        </header>
        <p> Generate Now</p>
      </nav>
    </div>
  );
}
