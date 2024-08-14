import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./signupcss.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Check for empty fields
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';

    // Set errors if any
    setErrors(newErrors);

    // If no errors, proceed with submission
    if (Object.keys(newErrors).length === 0) {
      const { name, email, password } = formData;

   
      const options = {
        method: 'PUT', // Changed to PUT to use the email as the key
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      };

      try {
        const res = await fetch(`https://uberclone-2fe91-default-rtdb.firebaseio.com/userData/${email.replace('.', ',')}.json`, options);

        if (res.ok) {
          alert("User Successfully SignedUp");
          // Redirect to sign in page upon successful signup
          navigate('/signin');
        } else {
          alert("Error occurred");
        }
      } catch (error) {
        alert("Error occurred");
      }
    }
  };

  return (
    <div className="parent">
      <div className="signup">
        <div className="signup-box">
          <div className="heading">
            <h1>Sign up</h1>
          </div>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="input-section">
              <input
                type="text"
                placeholder='Enter your name'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
              <input
                type="email"
                placeholder='Enter your email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
              <input
                type="password"
                placeholder='Enter your password'
                name='password'
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="btn">
              <input type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
