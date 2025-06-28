import React, { useState } from 'react';
import axios from '../utils/axiosConfig';
import { useNavigate ,Link} from 'react-router-dom';
import './AuthForm.css'; 

const Register = () => {
  const navigate=useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/register', form);
      localStorage.setItem('token', res.data.token);
      alert('Registration Successful');
      navigate('/profile')
    } catch (err) {
      alert(err.response?.data?.msg || "Registration failed- server not running");
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
        <h1> </h1>
        <Link to="/login">Existing User? Login here</Link>
      </form>
    </div>
  );
};

export default Register;
