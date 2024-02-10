import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      // Call API to change password here
      // Assuming it's successful, log the user out
      logout();
      history.push("/login");
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
};

export default ChangePassword;
