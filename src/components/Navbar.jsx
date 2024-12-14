import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f8f9fa' }}>
      <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
      <Link to="/add-product" style={{ margin: '0 1rem' }}>Add Product</Link>
    </nav>
  );
};

export default Navbar;
