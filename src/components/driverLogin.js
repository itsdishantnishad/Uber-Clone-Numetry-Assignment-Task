import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const login = async (email, password) => {
    const emailKey = email.replace('.', ',');
    const url = `https://uberclone-2fe91-default-rtdb.firebaseio.com/DriverData/${emailKey}.json`;

    try {
      const res = await fetch(url);

      if (res.ok) {
        const DriverData = await res.json();

        if (DriverData && DriverData.password === password) {
          setSuccessMessage("Login successful");
          setTimeout(() => {
            navigate('/dashboard');
          }, 1000);
        } else {
          setError("Invalid email or password");
        }
      } else {
        setError("User not found");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setError("Error occurred");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    login(email, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleLogin} style={styles.form}>
      <h2 style={styles.title}>Log In</h2>
      {error && <p style={styles.error}>{error}</p>}
      {successMessage && <p style={styles.success}>{successMessage}</p>}
      <div style={styles.inputGroup}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.submitButton}>Log In</button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  inputGroup: {
    marginBottom: "10px",
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  },
  submitButton: {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#28A745",
    color: "#fff",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
  success: {
    color: "green",
    marginBottom: "10px",
  },
};

export default Login;
