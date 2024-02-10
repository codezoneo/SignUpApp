// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Navbar from "./Navbar";
import About from "./About";
import Login from "./Login";
import Products from "./Products";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/products" component={Products} />{" "}
          {/* Use PrivateRoute for Products */}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
