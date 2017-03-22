import React from "react";
import {
    BrowserRouter as Router,
    Link, Route
} from "react-router-dom";

import CLink from "./CustomLink";
import "./style.css";

export default () => (
    <Router>
        <div>
            <CLink isExact={true} to="/" text={"Home"} />
            <CLink to="/about" text={"About"} />
            <hr/>
            <Route exact path="/" render={() => <h2>Home</h2>} />
            <Route exact path="/about" render={() => <h2>About</h2>} />
        </div>
    </Router>
)