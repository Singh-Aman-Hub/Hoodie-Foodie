import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosConfig';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css'; // reuse styling

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch user info on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('/menu/protected'); // Protected route
        setUser(res.data.msg);
      } catch (err) {
        localStorage.removeItem('token');
        alert("You must be logged in to view profile");
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert("Logged out successfully");
    navigate('/login');
  };

  return (
    <div className="background">
    <div className="auth-form-container">
      <h2>User Profile</h2>
      <br></br>
      <h3 align="center"><i>{user ? <p>{user}</p> : <p>Loading...</p>}</i></h3>
     
      <h3 align="center"> ✻✻ Nice to have you here! ✻✻</h3>
      <h2>Go ahead recommend something!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
    </div>
  );
};

export default Profile;
