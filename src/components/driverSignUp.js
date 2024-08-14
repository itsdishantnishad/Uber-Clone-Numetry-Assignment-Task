import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ onSignUpSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    validateField(name, value); // Validate field on change
  };

  const validateField = (name, value) => {
    let errorMsg = '';
    
    switch (name) {
      case 'name':
        if (!value) {
          errorMsg = 'Name is required.';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errorMsg = 'Please enter a valid email address.';
        }
        break;
      case 'password':
        if (value.length < 8) {
          errorMsg = 'Password must be at least 8 characters long.';
        }
        break;
      case 'phone':
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value)) {
          errorMsg = 'Please enter a valid 10-digit phone number.';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const { name, email, password, phone } = formData;
    
    // Perform final validation before submission
    for (const field in formData) {
      validateField(field, formData[field]);
    }

    // Check if there are any errors
    if (Object.values(errors).some((error) => error)) {
      alert('Please correct the errors before submitting.');
      return;
    }

    const options = {
      method: 'PUT', // Changed to PUT to use the email as the key
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phone
      })
    };

    try {
      const res = await fetch(`https://uberclone-2fe91-default-rtdb.firebaseio.com/DriverData/${email.replace('.', ',')}.json`, options);

      if (res.ok) {
        alert("Sign-up successful");
        // Reload the current page
        navigate(0); // 0 reloads the current page
        if (onSignUpSuccess) {
          onSignUpSuccess();
        }
      } else {
        const errorData = await res.json();
        alert("Error occurred during sign-up: " + (errorData.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("Error occurred during sign-up");
    }
  };

  return (
    <form onSubmit={handleSignUp} style={styles.form}>
      <h2 style={styles.title}>Sign Up</h2>
      <div style={styles.inputGroup}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        {errors.name && <small style={styles.error}>{errors.name}</small>}
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        {errors.email && <small style={styles.error}>{errors.email}</small>}
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
        {errors.password && <small style={styles.error}>{errors.password}</small>}
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          style={styles.input}
        />
        {errors.phone && <small style={styles.error}>{errors.phone}</small>}
      </div>
      <button
        type="submit"
        style={styles.submitButton}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.submitButtonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.submitButton.backgroundColor)}
      >
        Sign Up
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "400px", // Set a max width for better responsiveness
    margin: "0 auto", // Center form horizontally
  },
  title: {
    fontSize: "24px", // Slightly larger font for title
    marginBottom: "20px", // More space below the title
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: "15px", // Slightly larger space between input groups
    width: "100%", // Ensure the input group takes full width
    position: "relative",
  },
  input: {
    padding: "10px", // Larger padding for better touch targets
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box", // Ensure padding is included in total width
    fontSize: "16px", // Larger font size for readability
  },
  error: {
    fontSize: "12px", // Smaller font size for error messages
    color: "#d9534f", // Red color for error messages
    marginTop: "5px", // Space above error message
    display: "block",
  },
  submitButton: {
    padding: "12px 24px", // Larger button for better accessibility
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#28A745",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px", // Larger font size for button text
    transition: "background-color 0.3s ease", // Add a transition for hover effects
  },
  submitButtonHover: {
    backgroundColor: "#218838",
  },
};  // signup successfull

export default SignUp;
