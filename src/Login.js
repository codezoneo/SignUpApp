import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
  const history = useHistory();
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    history.push("/profile");
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
