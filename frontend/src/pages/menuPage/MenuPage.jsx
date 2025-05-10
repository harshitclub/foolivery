import React from "react";
import "./style.css";
import {
  Pizza,
  ChevronsRight, // For category navigation
  Wine,
  Beer,
  Cake,
  Utensils,
  Coffee,
  Beef,
} from "lucide-react";

const MenuPage = () => {
  return (
    <main className="menu-page">
      <section className="menuContainer">
        <div className="menuHeader">
          <h1>Our Delicious Menu</h1>
          <p className="tagline">
            Explore a wide variety of mouthwatering dishes and beverages,
            crafted with the finest ingredients.
          </p>
        </div>

        <div className="menuSections">
          {/* Starters */}
          <section className="menuSection">
            <h2>
              <Utensils className="sectionIcon" />
              Starters
            </h2>
            <div className="menuItems">
              <div className="menuItem">
                <h3>Bruschetta</h3>
                <p className="description">
                  Toasted baguette topped with fresh tomatoes, basil, and
                  garlic.
                </p>
                <p className="price">$8.99</p>
              </div>
              <div className="menuItem">
                <h3>Caprese Salad</h3>
                <p className="description">
                  Fresh mozzarella, tomatoes, and basil, drizzled with balsamic
                  glaze.
                </p>
                <p className="price">$9.99</p>
              </div>
              <div className="menuItem">
                <h3>Soup of the Day</h3>
                <p className="description">
                  Ask your server for today's special selection.
                </p>
                <p className="price">$7.99</p>
              </div>
            </div>
            <ChevronsRight className="sectionArrow" />
          </section>

          {/* Pizzas */}
          <section className="menuSection">
            <h2>
              <Pizza className="sectionIcon" />
              Pizzas
            </h2>
            <div className="menuItems">
              <div className="menuItem">
                <h3>Margherita</h3>
                <p className="description">
                  Classic pizza with tomato sauce, mozzarella, and fresh basil.
                </p>
                <p className="price">$12.99</p>
              </div>
              <div className="menuItem">
                <h3>Pepperoni</h3>
                <p className="description">
                  Tomato sauce, mozzarella, and pepperoni.
                </p>
                <p className="price">$14.99</p>
              </div>
              <div className="menuItem">
                <h3>Vegetarian</h3>
                <p className="description">
                  Tomato sauce, mozzarella, and a variety of fresh vegetables.
                </p>
                <p className="price">$13.99</p>
              </div>
              <div className="menuItem">
                <h3>Meat Lover's</h3>
                <p className="description">
                  Tomato sauce, mozzarella, pepperoni, sausage, and bacon.
                </p>
                <p className="price">$16.99</p>
              </div>
            </div>
            <ChevronsRight className="sectionArrow" />
          </section>

          {/* Main Courses */}
          <section className="menuSection">
            <h2>
              <Beef className="sectionIcon" />
              Main Courses
            </h2>
            <div className="menuItems">
              <div className="menuItem">
                <h3>Grilled Salmon</h3>
                <p className="description">
                  Freshly grilled salmon served with roasted vegetables.
                </p>
                <p className="price">$19.99</p>
              </div>
              <div className="menuItem">
                <h3>Steak Frites</h3>
                <p className="description">
                  Juicy steak served with crispy French fries.
                </p>
                <p className="price">$24.99</p>
              </div>
              <div className="menuItem">
                <h3>Pasta Carbonara</h3>
                <p className="description">
                  Spaghetti with egg, pancetta, Parmesan cheese, and black
                  pepper.
                </p>
                <p className="price">$17.99</p>
              </div>
              <div className="menuItem">
                <h3>Chicken Alfredo</h3>
                <p className="description">
                  Fettuccine pasta tossed in a creamy Alfredo sauce with grilled
                  chicken.
                </p>
                <p className="price">$18.99</p>
              </div>
            </div>
            <ChevronsRight className="sectionArrow" />
          </section>

          {/* Desserts */}
          <section className="menuSection">
            <h2>
              <Cake className="sectionIcon" />
              Desserts
            </h2>
            <div className="menuItems">
              <div className="menuItem">
                <h3>Tiramisu</h3>
                <p className="description">
                  Classic Italian dessert with coffee-soaked ladyfingers and
                  mascarpone cream.
                </p>
                <p className="price">$8.99</p>
              </div>
              <div className="menuItem">
                <h3>Chocolate Lava Cake</h3>
                <p className="description">
                  Warm chocolate cake with a molten chocolate center.
                </p>
                <p className="price">$9.99</p>
              </div>
              <div className="menuItem">
                <h3>Crème brûlée</h3>
                <p className="description">
                  A rich custard base topped with a layer of hardened
                  caramelized sugar.
                </p>
                <p className="price">$10.99</p>
              </div>
            </div>
            <ChevronsRight className="sectionArrow" />
          </section>

          {/* Drinks */}
          <section className="menuSection">
            <h2>
              <Coffee className="sectionIcon" />
              Drinks
            </h2>
            <div className="menuItems">
              <div className="menuItem">
                <h3>Soft Drinks</h3>
                <p className="description">Coke, Diet Coke, Sprite, Fanta</p>
                <p className="price">$2.99</p>
              </div>
              <div className="menuItem">
                <h3>Juices</h3>
                <p className="description">Orange, Apple, Cranberry</p>
                <p className="price">$3.99</p>
              </div>
              <div className="menuItem">
                <h3>Coffee</h3>
                <p className="description">Regular, Decaf, Espresso</p>
                <p className="price">$3.49</p>
              </div>
              <div className="menuItem">
                <h3>Tea</h3>
                <p className="description">Black, Green, Herbal</p>
                <p className="price">$2.99</p>
              </div>
            </div>
            <ChevronsRight className="sectionArrow" />
          </section>

          {/* Wine List */}
          <section className="menuSection">
            <h2>
              <Wine className="sectionIcon" />
              Wine List
            </h2>
            <div className="menuItems">
              <div className="menuItem">
                <h3>House Red</h3>
                <p className="description">Cabernet Sauvignon, California</p>
                <p className="price">$25.00 / bottle</p>
                <p className="price"> $7.00 / glass</p>
              </div>
              <div className="menuItem">
                <h3>House White</h3>
                <p className="description">Chardonnay, California</p>
                <p className="price">$25.00 / bottle</p>
                <p className="price"> $7.00 / glass</p>
              </div>
              <div className="menuItem">
                <h3>Pinot Noir</h3>
                <p className="description">Oregon</p>
                <p className="price">$35.00 / bottle</p>
              </div>
            </div>
            <ChevronsRight className="sectionArrow" />
          </section>

          {/* Beer List */}
          <section className="menuSection">
            <h2>
              <Beer className="sectionIcon" />
              Beer List
            </h2>
            <div className="menuItems">
              <div className="menuItem">
                <h3>Draft Beer</h3>
                <p className="description">
                  Ask your server for our current selection.
                </p>
                <p className="price">$6.00</p>
              </div>
              <div className="menuItem">
                <h3>Bottled Beer</h3>
                <p className="description">Domestic and imported varieties.</p>
                <p className="price"> $5.00 - $8.00</p>
              </div>
            </div>
            <ChevronsRight className="sectionArrow" />
          </section>
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
