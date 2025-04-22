import "./style.css";

import Navbar from "../../components/global/navbar/Navbar";
import Footer from "../../components/global/footer/Footer";
import Hero from "../../components/local/homepage/hero/Hero";
import Categories from "../../components/local/homepage/categories/Categories";
import TopRR from "../../components/local/homepage/topRR/TopRR";
import StartNow from "../../components/local/homepage/startNow/StartNow";
import CTA from "../../components/local/homepage/cta/CTA";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <TopRR />
        <StartNow />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
