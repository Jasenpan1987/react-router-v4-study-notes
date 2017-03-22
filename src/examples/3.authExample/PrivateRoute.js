// 这是一个高阶组件，接收component 和 path，
// 通过判断isAuth来决定render或者是redirect
import React from "react";
import {
    Route, Redirect
} from "react-router-dom";

import auth from "./fakeAuth";

export default (parentProps) => {
    console.log(parentProps);
    return (
        <Route path={parentProps.path} render={props => (
            auth.getAuth() ? 
                // 由于组件名称是动态的，所以要用React.createElement方法
                React.createElement(parentProps.component, props) :
                <Redirect to="/login" />
            ) } />
    )
}

