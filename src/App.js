import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Profile} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/change-password" component={ChangePassword} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
