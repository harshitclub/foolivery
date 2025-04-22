import React from "react";
import "./style.css";

const StartNow = () => {
  return (
    <section className="startNow flex alignCenter">
      <div className="snContainer">
        <h4>FOOLIVERY DELIVERY</h4>
        <h2>We deliver to your office</h2>
        <p>Enjoy a tasty food in minutes!</p>
        <a href="/">
          <button>Start Now</button>
        </a>
      </div>
    </section>
  );
};

export default StartNow;
