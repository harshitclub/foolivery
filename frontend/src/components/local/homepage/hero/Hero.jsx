import "./style.css";

import React from "react";

const Hero = () => {
  return (
    <section className="hero flex alignCenter">
      <div className="heroContainer">
        <h1 id="heroHeading">Fresh, fast & delicious!</h1>
        <h2>The best restaurant at the best price</h2>
        <div className="heroSearch">
          <input placeholder="Address, neighborhood..." />
          <button id="heroBtn">Search</button>
        </div>
        <p>
          Trending:{" "}
          <span>
            <a href="/">Sushi,</a>
          </span>
          <span>
            <a href="/">Burger,</a>
          </span>
          <span>
            <a href="/">Chinese,</a>
          </span>
          <span>
            <a href="/">Pizza</a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
