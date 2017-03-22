import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route, Link
} from "react-router-dom";

const TechDetail = ({ match, history, location }) => { // match.params.<key>取出路径参数
    console.log(match, history, location)
    return <h3>Selected technology: {match.params.tech} 
        <button
            onClick={() => history.go(-2)}
        >Go Back</button></h3>
}

// 路径参数
const UrlParamExample = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/react">React</Link></li>
                    <li><Link to="/ng">Angular</Link></li>
                    <li><Link to="/vue">Vue</Link></li>
                    <li><Link to="/knockout">Knockout</Link></li>
                </ul>
                <hr/>
                <Route exact path="/" render={() => <h2>Select your favorite framework</h2>}/>
                <Route path="/:tech" component={TechDetail} />{/* 设置路径参数的key */}
            </div>
        </Router>
    )
}

export default UrlParamExample;