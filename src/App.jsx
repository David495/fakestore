import Header from "./components/Header/Header";
import Button from "./components/Button/button";
import "./App.css";
import Hero from './assets/Hero.png';
import Card from "./components/products/Product";

function greet() {
  return (
    <>
  <Header/>
  <main>
        {/* Hero */}
        <section className="hero">
          <div>
            <h1 className="hero-title">Welcome to Fake Store</h1>
            <p>We have a wide range of 20 different products you can buy!</p>

            <Button>Shop Now</Button>
          </div>

          <div className="hero-img-box">
            <img src={Hero} alt="fake store hero" />
          </div>
        </section>
      </main>
      <Card/>
    </>	
  );
}

export default greet;