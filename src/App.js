import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
