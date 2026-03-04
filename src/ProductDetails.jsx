// src/ProductDetails.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from './data';

export default function ProductDetails({ addToCart }) {
  // Grab the product ID from the URL (e.g., /product/2)
  const { id } = useParams();
  
  // Find the exact product from our data file
  const product = PRODUCTS.find(p => p.id === parseInt(id));

  // State for reviews and the new review form
  const [reviews, setReviews] = useState(product ? product.initialReviews : []);
  const [newReviewText, setNewReviewText] = useState('');
  const [newRating, setNewRating] = useState(5);

  if (!product) {
    return <div className="container"><h2>Product not found!</h2><Link to="/">Go Back</Link></div>;
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReviewText.trim()) return;

    const review = {
      id: Date.now(), // Generate a unique ID
      author: 'Guest User',
      rating: newRating,
      text: newReviewText
    };

    setReviews([...reviews, review]);
    setNewReviewText(''); // Clear the input
    setNewRating(5); // Reset rating
  };

  // Helper to render stars (⭐) based on rating number
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="container product-page">
      <Link to="/" className="back-link">← Back to Shop</Link>
      
      {/* Product Information Section */}
      <div className="product-details-grid">
        <img src={product.image} alt={product.name} className="details-image" />
        
        <div className="details-info">
          <h1 className="details-title">{product.name}</h1>
          <p className="details-price">₹{product.price.toLocaleString('en-IN')}</p>
          <p className="details-long-desc">{product.longDesc}</p>
          
          <button className="add-to-cart-large" onClick={() => addToCart(product)}>
            Add to Cart - ${product.price.toFixed(2)}
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        
        <div className="reviews-list">
          {reviews.length === 0 ? (
            <p className="no-reviews">No reviews yet. Be the first to review!</p>
          ) : (
            reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <strong>{review.author}</strong>
                  <span className="stars">{renderStars(review.rating)}</span>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))
          )}
        </div>

        {/* Leave a Review Form */}
        <div className="review-form-container">
          <h3>Write a Review</h3>
          <form onSubmit={handleReviewSubmit} className="review-form">
            <div className="form-group">
              <label>Rating:</label>
              <select value={newRating} onChange={(e) => setNewRating(Number(e.target.value))}>
                <option value="5">5 Stars - Excellent</option>
                <option value="4">4 Stars - Good</option>
                <option value="3">3 Stars - Average</option>
                <option value="2">2 Stars - Poor</option>
                <option value="1">1 Star - Terrible</option>
              </select>
            </div>
            <div className="form-group">
              <label>Your Feedback:</label>
              <textarea 
                value={newReviewText} 
                onChange={(e) => setNewReviewText(e.target.value)} 
                placeholder="What did you think about this product?"
                rows="4"
                required
              />
            </div>
            <button type="submit" className="submit-review-btn">Post Review</button>
          </form>
        </div>
      </div>
    </div>
  );
}
