// 使用prompt弹出框阻止路由的跳转
import React from "react";
import {
    BrowserRouter as Router, 
    Link, Route
} from "react-router-dom";

import Contact from "./Contact"

export default () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">主页</Link></li>
                <li><Link to="/about">关于</Link></li>
                <li><Link to="contact">表单</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" render={() => <h2>主页</h2>}/>
            <Route path="/about" render={() => <h2>关于</h2>}/>
            <Route path="/contact" component={Contact}/>
        </div>
    </Router>
)