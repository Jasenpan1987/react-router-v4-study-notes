import React, { Component } from "react";
import {
    Link, BrowserRouter as Router, Route
} from "react-router-dom";

import Topics from "./Topics";

// 其他的组件
const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
// const Topics = () => <h2>Topics</h2>

const BasicExample = () => {
    return (
        <Router>
            <div>{/*如果有一个以上的route，就要用div包一层，要不就报错*/}
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
                <hr/>

                {/*如果只想在 / 的时候匹配Home，就要加exact，否则下面两个route也会被匹配上*/}
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>
            </div>
        </Router>
    )
}

export default BasicExample;