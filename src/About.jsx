// src/About.jsx
import React from 'react';

export default function About() {
  return (
    <div className="container" style={{ maxWidth: '800px', padding: '4rem 5%' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Shourja&Technologia</h1>
      <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '1.5rem' }}>
        Welcome to Shourja&Technologia! We believe that cutting-edge technology shouldn't compromise on aesthetics. 
        Founded in 2026, our mission is to curate the highest quality electronics and everyday carry items 
        for the modern professional.
      </p>
      <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8' }}>
        Whether you are working from a local cafe or commuting across the city, our products are designed 
        to keep you connected and looking sharp.
      </p>
    </div>
  );
}