import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route, Link
} from "react-router-dom";

import AuthButton from "./AuthButton";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";

const Public = () => <h2>Public Message To Everyone</h2>;
const Private = () => <h2>Private Message To Only Members</h2>;

export default () => (
    <Router>
        <div>
            <AuthButton />
            <hr/>
            <ul>
                <li><Link to="/public">Public Message</Link></li>
                <li><Link to="/private">Private Message</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            <Route path="/public" component={Public}/>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/private" component={Private}/>
        </div>
    </Router>
)