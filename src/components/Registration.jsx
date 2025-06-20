import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();

    const userList = JSON.parse(localStorage.getItem('users')) || [];

    const matchedUser = userList.find(user => user.email === form.email);
    if (matchedUser) {
      alert("User is already registered with this email ID");
      return;
    }

    const updatedList = [...userList, form];
    localStorage.setItem('users', JSON.stringify(updatedList));
    alert('User is registered successfully!');
    navigate('/login');
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email: </label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required />
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
      <button type="submit">Register</button>
    </form>
  );
}

export default Registration;
