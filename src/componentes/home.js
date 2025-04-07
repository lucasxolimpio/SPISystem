import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Seu código HTML aqui */
      <div className="home-container">
      <header className="home-header">
        <h1>SPISystem</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    
      <main className="home-content">
        <section className="hero">
          <h2>Welcome to SPISystem</h2>
          <p>Order your favorite dishes with ease.</p>
          <button className="btn-start">Start Order</button>
        </section>
    
        <section className="restaurant-info">
          <h3>About Our Restaurant</h3>
          <p>Learn more about our delicious menu and our commitment to quality.</p>
          <a href="#" className="btn-more">Learn More</a>
        </section>
      </main>
    
      <footer className="home-footer">
        <p>&copy; 2023 SPISystem. All rights reserved.</p>
      </footer>
    </div>}
    </div>
  );
}

export default Home;
import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>SPISystem</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="home-content">
        <section className="hero">
          <h2>Welcome to SPISystem</h2>
          <p>Order your favorite dishes with ease.</p>
          <button className="btn-start">Start Order</button>
        </section>

        <section className="restaurant-info">
          <h3>About Our Restaurant</h3>
          <p>Learn more about our delicious menu and our commitment to quality.</p>
          <a href="#" className="btn-more">Learn More</a>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2023 SPISystem. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;