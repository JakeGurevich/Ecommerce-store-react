import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import DisplayItem from "./components/DisplayItem";
import Display from "./components/Display";
import Admin from "./components/Admin";

const App = () => {
  return (
    <div className="App">
      <Router>
        <>
          <Route path="/" exact component={Display} />
          <Route path="/item" component={DisplayItem} />
          <Route path="/admin" component={Admin} />
        </>
      </Router>
    </div>
  );
};

export default App;
