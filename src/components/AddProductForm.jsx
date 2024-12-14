import React, { useState } from 'react';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product added successfully! (Form submission not implemented)');
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Add New Product</h2>
      <label>Product Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <br /><br />
      
      
      <label>Price:</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <br /><br />
      <label>Category:</label>
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <br /><br />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
