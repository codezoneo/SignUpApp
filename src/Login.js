// Login.js

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const history = useHistory();

  const handleLogin = async () => {
    try {
      // Call Firebase Authentication API for login
      // Replace 'YOUR_API_KEY' with your actual Firebase API key
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=YOUR_API_KEY`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message);
      }

      login(data.idToken); // Store token in context and localStorage
      history.push("/products"); // Redirect to products page
    } catch (error) {
      setError(error.message); // Display error message
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error message */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
