// src/App.jsx
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, signInWithGoogle, logOut } from './firebase'; // Import Auth tools

import Home from './Home';
import About from './About';
import ProductDetails from './ProductDetails';
import { PRODUCTS } from './data';
import './App.css';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // NEW: State to hold the logged-in user
  const [user, setUser] = useState(null);

  // NEW: Listen for login/logout changes automatically
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup listener
  }, []);

  const addToCart = (product) => { setCart((prevCart) => {
      // 1. Check if the item is already in the cart
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // 2. If it is, just increase the quantity by 1
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      
      // 3. If it is a new item, add it to the cart with a quantity of 1
      return [...prevCart, { ...product, quantity: 1 }];});
 setIsCartOpen(true); 
  };
  const updateQuantity = (id, amount) => {
    setCart((prevCart) => 
      prevCart.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + amount;
          // Don't let quantity drop below 1 using this button
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }; 
        }
        return item;
      })
    );
  };
  const removeFromCart = (id) => setCart((prevCart) => prevCart.filter(item => item.id !== id));

const cartItemCount = cart ? cart.reduce((total, item) => total + (item.quantity || 1), 0) : 0;
  const cartTotal = cart ? cart.reduce((total, item) => total + ((item.price || 0) * (item.quantity || 1)), 0) : 0;
  return (
    <Router>
      <nav className="navbar">
      
  <div className="logo">
    <span className="gen-z-gradient">Shourja</span>&Technologia.</div>

        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>
        
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {/* NEW: User Auth UI */}
          {user ? (
            <div className="user-profile" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img 
                src={user.photoURL} 
                alt="Profile" 
                style={{ width: '35px', height: '35px', borderRadius: '50%', border: '2px solid #0f172a' }} 
              />
              <button onClick={logOut} className="logout-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, color: '#ef4444' }}>
                Logout
              </button>
            </div>
          ) : (
            <button onClick={signInWithGoogle} className="login-btn" style={{ background: '#0f172a', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>
              Sign In
            </button>
          )}

          <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
            Cart {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
          </button>
        </div>
      </nav>

      {/* KEEP ALL YOUR EXISTING <Routes> AND CART DRAWER CODE HERE UNCHANGED */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={
          <main className="container" style={{ paddingTop: '3rem' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-1px' }}>All Products.</h1>
            <div className="product-grid">
              {PRODUCTS.map(product => (
                <div key={product.id} className="product-card">
                  <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-info">
                      <h3 className="product-title">{product.name}</h3>
                      <p className="product-desc">{product.desc}</p>
                    </div>
                  </Link>
                  <div className="product-footer" style={{ padding: '0 1.5rem 1.5rem' }}>
                    <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
                    <button className="add-btn" onClick={() => addToCart(product)}>+ Add</button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
      </Routes>
{/* Cart Drawer */}
      <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)} />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        
        <div className="cart-header">
          <h2>Your Cart.</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>&times;</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is currently empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info" style={{ flexGrow: 1 }}>
                  <div className="cart-item-title">{item.name}</div>
                  <div className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</div>
                  
                  <div className="quantity-controls" style={{ marginTop: '10px' }}>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span style={{ color: 'white', fontWeight: 'bold' }}>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)} style={{ marginLeft: 'auto' }}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Only show the footer if there are items in the cart */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
            {/* Make sure your handleCheckout function from earlier is here! */}
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}

      </div>
       
    </Router>
  );
}
