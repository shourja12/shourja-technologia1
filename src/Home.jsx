// src/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1 className="hero-title">TECH MEETS AESTHETIC</h1>
        <p className="hero-sub">Shourja&Technologia. Elevating your everyday carry.</p>
        <Link to="/shop" className="cta-button">Enter The Shop ➔</Link>
      </header>

      {/* Bento Grid for Mission/Vision/Goal */}
      <section className="bento-grid">
        <div className="bento-card">
          <h3>🎯 Our Mission</h3>
          <p>To eliminate boring tech. We curate gear that looks cinematic and performs flawlessly.</p>
        </div>
        <div className="bento-card">
          <h3>👁️ The Vision</h3>
          <p>A world where your setup is a true reflection of your personal aesthetic.</p>
        </div>
        <div className="bento-card">
          <h3>🚀 Our Goal</h3>
          <p>100% hype. 0% e-waste. Bringing you only top-tier tech by 2026.</p>
        </div>
      </section>

      {/* Contact Banner */}
      <footer className="contact-banner">
        <h2>Don't ghost us. Reach out.</h2>
        <p className="phone-number">+91 9836111206</p>
        <p className="location">📍 HQ: Sodepur, West Bengal</p>
      </footer>
    </div>
  );
}