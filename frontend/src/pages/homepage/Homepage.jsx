import "./style.css";
import logo from "../../assets/logo.png";
import cat1 from "../../assets/category/home_cat_bakery.jpg";
import cat2 from "../../assets/category/home_cat_chinesse.jpg";
import cat3 from "../../assets/category/home_cat_hamburgher.jpg";
import cat4 from "../../assets/category/home_cat_pizza.jpg";
import cat5 from "../../assets/category/home_cat_sushi.jpg";
import cat6 from "../../assets/category/home_cat_vegetarian.jpg";
import location1 from "../../assets/restaurants/location_list_1.jpg";
import location2 from "../../assets/restaurants/location_list_2.jpg";
import location3 from "../../assets/restaurants/location_list_3.jpg";
import location4 from "../../assets/restaurants/location_list_4.jpg";
import location5 from "../../assets/restaurants/location_list_5.jpg";
import location6 from "../../assets/restaurants/location_list_6.jpg";
import how1 from "../../assets/cta/how_1.svg";
import how2 from "../../assets/cta/how_2.svg";
import how3 from "../../assets/cta/how_3.svg";

const Homepage = () => {
  return (
    <>
      <header className="flex alignCenter">
        <nav className="flex alignCenter">
          <div className="logo flex alignCenter">
            <img src={logo} />
          </div>
          <div className="menu">
            <ul className="flex">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        {/* <!-- Hero Section --> */}
        <section className="hero flex alignCenter">
          <div className="heroContainer">
            <h1 id="heroHeading">Delivery or Takeaway Food</h1>
            <h2>The best restaurants at the best price</h2>
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

        <section className="topRR flex alignCenter">
          <div className="topRRContainer">
            <h2>Top Rated Restaurants</h2>
            <p className="topRRDesc">
              Cum doctus civibus efficiantur in imperdiet deterruisset.
            </p>
            <div className="topRRBoxes flex">
              <div className="topRRBoxesLeft flex">
                <a href="/">
                  <div className="topRRBox flex">
                    <div className="topRRBoxLeft">
                      <img src={location1} />
                    </div>
                    <div className="topRRBoxRight flex">
                      <span>Italian</span>
                      <h3>La Monnalisa</h3>
                      <p>8 Patriot Square E2 9NF</p>
                      <small>Average Price $30</small>
                    </div>
                  </div>
                </a>
                <a href="/">
                  <div className="topRRBox flex">
                    <div className="topRRBoxLeft">
                      <img src={location2} />
                    </div>
                    <div className="topRRBoxRight flex">
                      <span>Italian</span>
                      <h3>La Monnalisa</h3>
                      <p>8 Patriot Square E2 9NF</p>
                      <small>Average Price $30</small>
                    </div>
                  </div>
                </a>
                <a href="/">
                  <div className="topRRBox flex">
                    <div className="topRRBoxLeft">
                      <img src={location3} />
                    </div>
                    <div className="topRRBoxRight flex">
                      <span>Italian</span>
                      <h3>La Monnalisa</h3>
                      <p>8 Patriot Square E2 9NF</p>
                      <small>Average Price $30</small>
                    </div>
                  </div>
                </a>
              </div>
              <div className="topRRBoxesRight flex">
                <a href="/">
                  <div className="topRRBox flex">
                    <div className="topRRBoxLeft">
                      <img src={location4} />
                    </div>
                    <div className="topRRBoxRight flex">
                      <span>Italian</span>
                      <h3>La Monnalisa</h3>
                      <p>8 Patriot Square E2 9NF</p>
                      <small>Average Price $30</small>
                    </div>
                  </div>
                </a>
                <a href="/">
                  <div className="topRRBox flex">
                    <div className="topRRBoxLeft">
                      <img src={location5} />
                    </div>
                    <div className="topRRBoxRight flex">
                      <span>Italian</span>
                      <h3>La Monnalisa</h3>
                      <p>8 Patriot Square E2 9NF</p>
                      <small>Average Price $30</small>
                    </div>
                  </div>
                </a>
                <a href="/">
                  <div className="topRRBox flex">
                    <div className="topRRBoxLeft flex">
                      <img src={location6} />
                    </div>
                    <div className="topRRBoxRight flex">
                      <span>Italian</span>
                      <h3>La Monnalisa</h3>
                      <p>8 Patriot Square E2 9NF</p>
                      <small>Average Price $30</small>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

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
        <section className="cta flex alignCenter">
          <div className="ctaContainer flex alignCenter">
            <div className="ctaLeft flex alignCenter">
              <div className="ctaBox flex">
                <div className="ctaBoxChild">
                  <img src={how1} />
                  <h3>Easly Order</h3>
                  <p>
                    Faucibus ante, in porttitor tellus blandit et. Phasellus
                    tincidunt metus lectus sollicitudin.
                  </p>
                </div>
                <div className="ctaBoxChild">
                  <img src={how2} />
                  <h3>Quick Delivery</h3>
                  <p>
                    Maecenas pulvinar, risus in facilisis dignissim, quam nisi
                    hendrerit nulla, id vestibulum.
                  </p>
                </div>
              </div>
              <div className="ctaBox">
                <div className="ctaBoxChild">
                  <img src={how3} />
                  <h3>Enjoy Food</h3>
                  <p>
                    Morbi convallis bibendum urna ut viverra. Maecenas quis
                    consequat libero, a feugiat eros.
                  </p>
                </div>
              </div>
            </div>
            <div className="ctaRight">
              <h2>Start Ordering Now</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                imperdiet libero id nisi euismod, sed porta est consectetur
                deserunt.
              </p>
              <small>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </small>
              <div>
                <a href="/">Register</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex alignCenter">
        <div className="fContainer flex">
          <div className="fTab">
            <h3>QUICK LINKS</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
            </ul>
          </div>
          <div className="fTab">
            <h3>CATEGORIES</h3>
            <ul>
              <li>
                <a href="/">Top Categories</a>
              </li>
              <li>
                <a href="/">Best Rated</a>
              </li>
              <li>
                <a href="/">Best Price</a>
              </li>
              <li>
                <a href="/">Latest Submissions</a>
              </li>
            </ul>
          </div>
          <div className="fTab">
            <h3>CONTACTS</h3>
            <ul>
              <li>
                <a href="/">
                  97845 Baker st. 567
                  <br />
                  Los Angeles - US
                </a>
              </li>
              <li>
                <a href="/">+94 423-23-221</a>
              </li>
              <li>
                <a href="/">Best Price</a>
              </li>
              <li>
                <a href="/">info@domain.com</a>
              </li>
            </ul>
          </div>
          <div className="fTab">
            <h3>KEEP IN TOUCH</h3>
            <input placeholder="Your Email" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
