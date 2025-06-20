import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const userList = JSON.parse(localStorage.getItem('users')) || [];
    const matchedUser = userList.find(
      user => user.email === form.email && user.password === form.password
    );

    if (matchedUser) {
      setIsLoggedIn(true);
      localStorage.setItem('user', JSON.stringify(matchedUser));
      alert('User Logged in Successfully!');
      navigate('/');
    } else {
      alert('Wrong Credentials');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
