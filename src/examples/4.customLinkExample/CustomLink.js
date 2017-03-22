import React from "react";
import {
    Link, Route
} from "react-router-dom";

export default ({text, to, isExact}) => (
    <Route 
        path={to}
        exact={isExact}
        children={({match}) => { // children是react的属性，render是Route的，也就是说如果用children不管是否匹配上都会走
            console.log(match); // match只会在route匹配的时候才会有值，否则就是null
            return (
                <div>
                    {match ? "-> " : ""}
                    <Link to={to}
                    className={match ? "active" : null}
                    >{text}</Link>
                </div>
            )
        }}
    />
)