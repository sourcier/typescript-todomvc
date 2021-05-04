import React from "react";
import { Route, Switch } from "react-router-dom";
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

import Home from "./Home";

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
  </Switch>
);

export default App;
