import React from "react";
import "./style.css"; // New CSS file
import logo from "../../assets/logo.png";

const About = () => {
  return (
    <main className="about">
      <section className="aboutHero">
        <div className="heroContent">
          <div className="logoContainer">
            <img src={logo} alt="Foolivery Logo" className="logo" />
          </div>
          <h1>About Foolivery</h1>
          <p className="tagline">Delivering Happiness, One Meal at a Time.</p>
        </div>
      </section>

      <section className="aboutSection mission">
        <div className="sectionContent">
          <h2>Our Mission</h2>
          <p>
            At Foolivery, our mission is simple: to connect you with the best
            local restaurants and deliver your favorite meals quickly and
            efficiently. We believe that everyone deserves access to delicious
            food, no matter where they are. We strive to create a seamless and
            enjoyable food delivery experience, from browsing menus to the
            moment your order arrives at your doorstep.
          </p>
        </div>
      </section>

      <section className="aboutSection values">
        <div className="sectionContent">
          <h2>Our Core Values</h2>
          <ul>
            <li>
              <strong>Customer First:</strong> We prioritize your satisfaction
              above all else.
            </li>
            <li>
              <strong>Quality:</strong> We partner with restaurants that are
              committed to using fresh, high-quality ingredients.
            </li>
            <li>
              <strong>Efficiency:</strong> We leverage technology and logistics
              to ensure timely and reliable deliveries.
            </li>
            <li>
              <strong>Community:</strong> We support local businesses and strive
              to be a positive contributor to the communities we serve.
            </li>
            <li>
              <strong>Innovation:</strong> We are constantly looking for ways to
              improve our services and enhance your experience.
            </li>
          </ul>
        </div>
      </section>

      <section className="aboutSection team">
        <div className="sectionContent">
          <h2>Meet the Team (Our Philosophy)</h2>
          <p>
            Behind Foolivery is a passionate team of food lovers, tech
            enthusiasts, and logistics experts. We are united by our love for
            good food and our commitment to making it accessible to everyone.
            Our philosophy is rooted in collaboration, dedication, and a shared
            vision of revolutionizing the way people experience food delivery.
            We work tirelessly to ensure that every order is handled with care
            and delivered with a smile (even if you can't see it through the
            app!).
          </p>
        </div>
      </section>

      <section className="aboutFooter">
        <p>
          Join the Foolivery family and discover a world of culinary delights!
        </p>
      </section>

      {/* Inspiration from Contact Page */}
      <section className="inspirationNote">
        <p>
          You can see the inspiration for the layout and styling of this page in
          our{" "}
          <a href="/contact" target="_blank" rel="noopener noreferrer">
            Contact Us
          </a>{" "}
          page, which features a similar structured approach with a header,
          content sections, and a footer, all within a centered container on a
          light background.
        </p>
      </section>

      {/* Inspiration from Homepage (Conceptual) */}
      <section className="inspirationNote">
        <p>
          While we haven't designed a specific Homepage yet, imagine it sharing
          the same overall visual theme: a clean layout, consistent use of the
          Foolivery logo and color palette (light yellow accents), and clear
          typography. The Homepage might feature a prominent search bar,
          featured restaurants, promotions, and perhaps customer testimonials,
          all organized into easy-to-navigate sections with a similar visual
          hierarchy as seen here.
        </p>
      </section>
    </main>
  );
};

export default About;
