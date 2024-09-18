import React from 'react';
import './App.css'
import iphone13ProMax from './Images/iphone13promax.jpeg';
import iphone12 from './Images/iphone12.jpeg';
import iphoneSE from './Images/iphoneSE.jpeg';

const App = () => {
  const products = [
      {
          id: 1,
          name: "iPhone 13 Pro Max",
          price: "Rp 20.000.000",
          image: iphone13ProMax,
          description: "iPhone terbaru dengan performa unggulan dan kamera canggih."
      },
      {
          id: 2,
          name: "iPhone 12",
          price: "Rp 15.000.000",
          image: iphone12,
          description: "HP dengan desain klasik dan performa yang mumpuni."
      },
      {
          id: 3,
          name: "iPhone SE",
          price: "Rp 9.000.000",
          image: iphoneSE,
          description: "HP Apple terjangkau dengan performa kuat."
      }
  ];

  return (
      <div className="app">
        
          <section className="hero">
              <h2>Temukan iPhone Impianmu</h2>
              <b><p>Promo spesial untuk iPhone terbaru. Jangan lewatkan!</p></b>
              <a href="#products" className="cta-button">Belanja Sekarang</a>
          </section>

          <section className="products" id="products">
              <h2>Produk Terbaru</h2>
              <div className="product-list">
                  {products.map((product) => (
                      <div key={product.id} className="product-item">
                          <img src={product.image} alt={product.name} />
                          <h3>{product.name}</h3>
                          <p>{product.description}</p>
                          <p>Harga: {product.price}</p>
                          <button>Beli Sekarang</button>
                      </div>
                  ))}
              </div>
          </section>

          <footer className="footer">
              <p>&copy; 2024 Apple Store. All Rights Reserved.</p>
              <nav>
                  <a href="#about">Tentang</a> | <a href="#contact">Kontak</a>
              </nav>
          </footer>
      </div>
  );
};

export default App;
