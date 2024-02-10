import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Profile = () => {
  const history = useHistory();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  return (
    <div>
      <h2>Profile</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
