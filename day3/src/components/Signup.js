import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Import your CSS file

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/posts", {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      console.log("Success:", response.data);
      alert("Registration successful!");
      navigate("/loginpage");
    } catch (error) {
      console.error("Error details:", error.response || error.message || error);
      if (error.response) {
        console.error("Server responded with status:", error.response.status);
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
      alert("Registration failed!");
    }
  };

  return (
    <div className="entire">
      <div className="registercontainer">
        <h2>Register Page</h2>
        <form className="registerform" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter the name"
            value={formData.name}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter the email"
            value={formData.email}
            onChange={handleChange} required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter the password"
            value={formData.password}
            onChange={handleChange} required
          />
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange} required
          />
          <button type="submit">Register</button>
          <label>Already have an account?</label>
          <button type="button" onClick={() => navigate('/loginpage')}>Login page</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
