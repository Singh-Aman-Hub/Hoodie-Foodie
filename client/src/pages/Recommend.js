import React, { useState } from 'react';
import { recommendDish } from '../services/api';
import {useNavigate} from 'react-router-dom'


import './Recommend.css';

const Recommend = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: ''
  });

  const [message, setMessage] = useState('');


let navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      await recommendDish(formData);
      setMessage('Dish recommended successfully!');
      setFormData({ name: '', price: '', category: ''});
    } catch (error) {
      // Check if it's an Axios error and has a response
      if (error.response) {
        if (error.response.status === 401) {
          // Not logged in
          alert("You must be logged in to recommend a dish.");
          navigate('/login', { state: { error: 'Please log in to recommend a dish.' } });
        } else if (error.response.status === 403) {
          alert("You are not authorized to perform this action.");
        } else if (error.response.status === 500) {
          alert("Server error! Please try again later.");
        } else {
          alert(`Something went wrong: ${error.response.data?.message || 'Unknown error'}`);
        }
      } else {
        alert("Network error or something unexpected happened.");
      }
    }
  };

  return (
    <div className="recommend-wrapper">
      <h2>Recommend a Dish</h2>
      <form onSubmit={handleSubmit} className="recommend-form">
        <input type="text" name="name" placeholder="Dish Name" value={formData.name} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      {message && <p className="recommend-message">{message}</p>}
    </div>
  );
};

export default Recommend;