import React from "react";
import "./style.css";
import cat1 from "../../../../assets/category/home_cat_bakery.jpg";
import cat2 from "../../../../assets/category/home_cat_chinesse.jpg";
import cat3 from "../../../../assets/category/home_cat_hamburgher.jpg";
import cat4 from "../../../../assets/category/home_cat_pizza.jpg";
import cat5 from "../../../../assets/category/home_cat_sushi.jpg";
import cat6 from "../../../../assets/category/home_cat_vegetarian.jpg";

const Categories = () => {
  return (
    <section className="categories flex alignCenter">
      <div className="catContainer">
        <h2>Popular Categories</h2>
        <p className="catDesc">
          Cum doctus civibus efficiantur in imperdiet deterruisset
        </p>
        <div className="catBoxes flex">
          <div className="catBox">
            {/* <!-- <div className="catBoxMark"><span>98</span></div> --> */}
            <img src={cat4} />
            <div className="catBoxContent">
              <h3>Pizza</h3>
              <p>Avg price $40</p>
            </div>
          </div>
          <div className="catBox">
            {/* <!-- <div className="catBoxMark"><span>98</span></div> --> */}
            <img src={cat5} />
            <div className="catBoxContent">
              <h3>Japenese</h3>
              <p>Avg price $40</p>
            </div>
          </div>
          <div className="catBox">
            {/* <!-- <div className="catBoxMark"><span>98</span></div> --> */}
            <img src={cat3} />
            <div className="catBoxContent">
              <h3>Burghers</h3>
              <p>Avg price $40</p>
            </div>
          </div>
          <div className="catBox">
            {/* <!-- <div className="catBoxMark"><span>98</span></div> --> */}
            <img src={cat6} />
            <div className="catBoxContent">
              <h3>Vegetarian</h3>
              <p>Avg price $40</p>
            </div>
          </div>
          <div className="catBox">
            {/* <!-- <div className="catBoxMark"><span>98</span></div> --> */}
            <img src={cat1} />
            <div className="catBoxContent">
              <h3>Bakery</h3>
              <p>Avg price $40</p>
            </div>
          </div>
          <div className="catBox">
            {/* <!-- <div className="catBoxMark"><span>98</span></div> --> */}
            <img src={cat2} />
            <div className="catBoxContent">
              <h3>Chinese</h3>
              <p>Avg price $40</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
