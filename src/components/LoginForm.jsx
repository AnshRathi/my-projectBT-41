import React, { useState } from 'react';
import { useNavigate, useViewTransitionState } from 'react-router-dom';

function LoginForm() {

    let navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Logging in with\nEmail: ${form.email}\nPassword: ${form.password}`);
    JSON.parse(localStorage.getItem('users')) ||[];
    userList.find(user => user.email === FormData.email && useViewTransitionState.password === FormData.password);

    if(matchedUser){
            setIsLoggedIn(true);
            localStorage.setItem('user', JSON.stringify(matchedUser));
            aleart('User Logged in SuccessFul!')
            navigate('/')
    }else{
        aleart('Wrong Credentials')
    }
    // Add your login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email: </label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Password: </label>
        <input name="password" type="password" value={form.password} onChange={handleChange} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;