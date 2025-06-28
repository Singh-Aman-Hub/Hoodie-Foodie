import React, { useEffect, useState } from 'react';
import { fetchMenuItems } from '../services/api';
import './Menu.css';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const res = await fetchMenuItems();
        setMenuItems(res.data);
      } catch (err) {
        console.error("Error fetching menu:", err);
      }
    };
    getMenu();
  }, []);

  return (
    <div className="menu-container">
      <h2><u>Our Delicious Menu</u></h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-card" key={item._id}>
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Price: ₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
