import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./signupcss.css";

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const login = async (email, password) => {
        const emailKey = email.replace('.', ',');
        const url = `https://uberclone-2fe91-default-rtdb.firebaseio.com/userData/${emailKey}.json`;

        try {
            const res = await fetch(url);

            if (res.ok) {
                const userData = await res.json();

                if (userData && userData.password === password) {
                    setSuccessMessage("Login successful");
                    // Redirect to the dashboard or home page upon successful login
                    setTimeout(() => {
                        navigate('/dashboard');
                    }, 1000);
                } else {
                    alert("Invalid email or password");
                }
            } else {
                alert("User not found");
            }
        } catch (error) {
            console.error("Error occurred:", error);
            alert("Error occurred");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        // Check for empty fields
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';

        // Set errors if any
        setErrors(newErrors);

        // If no errors, proceed with submission
        if (Object.keys(newErrors).length === 0) {
            await login(formData.email, formData.password);
        }
    };

    return (
        <>
            <div className="parent">
                <div className="signup">
                    <div className="signup-box">
                        <div className="heading">
                            <h1>Sign In</h1>
                        </div>
                        <form method="POST" onSubmit={handleSubmit}>
                            <div className="input-section">
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
                                <input type="submit" value="Sign In" />
                            </div>
                        </form>
                        {successMessage && <p className="success">{successMessage}</p>}
                    </div>
                </div>
                <div className="orline">
                    <p>or</p>
                </div>
                <div className="otheroptions">
                    <Link to="/"><img src="./images/googleColoredIcon.png" alt="google" />Continue with Google</Link>
                    <Link to="/"><img src="./images/appleColoredIcon.png" alt="apple" />Continue with Apple</Link>
                    <Link to="/"><img src="./images/facebookColoredIcon.png" alt="facebook" />Continue with Facebook</Link>
                </div>
            </div>
        </>
    );
};

export default SignIn;
