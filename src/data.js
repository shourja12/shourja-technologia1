// src/data.js
export const PRODUCTS = [
  { 
    id: 1, 
    name: 'Premium Wireless Headphones', 
    price: 2499.00, 
    desc: 'Active noise cancelling, 30-hour battery life.',
    longDesc: 'Experience pure audio bliss with our industry-leading noise cancellation. Perfect for focusing at work, commuting, or tuning in to the weekend match without distractions. Features plush ear cushions and spatial audio support.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    initialReviews: [
      { id: 101, author: 'Leo M.', rating: 5, text: 'Fantastic sound quality. Perfect for pre-game focus.' },
      { id: 102, author: 'Sarah K.', rating: 4, text: 'Very comfortable, but the case is a bit bulky.' }
    ]
  },
  { 
    id: 2, 
    name: 'Minimalist Smartwatch', 
    price: 1999.00, 
    desc: 'Track your fitness, heart rate, and sleep.',
    longDesc: 'A sleek, aerospace-grade aluminum casing hides a powerful fitness tracker. Monitor your heart rate, track your sleep cycles, and get notifications right on your wrist. Water-resistant up to 50 meters.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    initialReviews: [
      { id: 103, author: 'James T.', rating: 5, text: 'Looks great with any outfit, battery lasts for days!' }
    ]
  },
  { 
    id: 3, 
    name: 'Classic Canvas Sneaker', 
    price: 65000.00, 
    desc: 'Comfortable everyday wear with durable rubber soles.',
    longDesc: 'The quintessential everyday shoe. Made with breathable organic cotton canvas and a high-traction rubber outsole. Designed to look better with every step you take.',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80',
    initialReviews: []
  },
  { 
    id: 4, 
    name: 'Vintage Leather Backpack', 
    price: 1250.00, 
    desc: 'Genuine leather, spacious interior with laptop sleeve.',
    longDesc: 'Handcrafted from top-grain leather that develops a beautiful patina over time. Features a padded 15-inch laptop sleeve, multiple organizer pockets, and comfortable padded shoulder straps.',
    image: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=600&q=80',
    initialReviews: [
      { id: 104, author: 'Elena R.', rating: 3, text: 'Beautiful bag, but a bit heavier than I expected.' }
    ]
  },
];