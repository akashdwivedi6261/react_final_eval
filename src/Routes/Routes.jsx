import React from "react";

import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Admin from "../Pages/Admin";
import Employee from "../Pages/Employee";
export default function Routes() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Employee />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>

        <Route>
          <h1>Not found</h1>
        </Route>
      </Switch>
    </div>
  );
}
