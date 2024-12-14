import React, { useState, useEffect } from 'react';


const ProductDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Product Dashboard</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
          
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td><img src={product.image} alt={product.title} style={{ width: '50px' }} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDashboard;
