// 当我们需要模糊匹配路径，可以用下面这种方式

import React from "react";
import {
    BrowserRouter as Router,
    Link, Route, Switch
} from "react-router-dom";

export default () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/about">关于</Link></li>
                <li><Link to="/company">公司</Link></li>
                <li><Link to="/kim">Kim（动态路径）</Link></li>
                <li><Link to="/chris">Chris（动态路径）</Link></li>
            </ul>

            {/*
                有时候我们需要一系列的静态路径（如 "/about"和 "/company这种）
                并且同时也需要模糊匹配例如"/:user"这种路径。问题是"/about"其实
                也可以看做是模糊的，这意味着"/about"同时可以满足"/about"和"/:user"
                这两条路径的匹配。所有的路由都是用算法来做匹配，并且这些算法最后
                只会匹配到一个路径上。react router可以根据需求匹配到多个地方（比如
                sidebar，breadcrumb等）。所以，当你要弄清楚模糊匹配并且不想让"/about"
                匹配到"/:ueser"上时，只要将Routes外面包一层<Switch>即可，因为
                Switch只会渲染第一条满足匹配的路径。

                Switch的两个关键点：1）只渲染一个Route 2）渲染能匹配到的第一个Route
            */}

            <hr />
            {/* 这里如果把Switch去掉，当走/about时就会同时渲染/about和/:user这两个路径 */}
            <Switch>
                {/* 这里的顺序很重要，如果把/:user放到第一个，当走/about时，就会匹配到/:user */}
                <Route path="/about" render={() => (<h2>关于</h2>)}/>
                <Route path="/company" render={() => (<h2>关于</h2>)}/>
                <Route path="/:user" render={({ match }) => (<h2>名字: {match.params.user}</h2>)} />
            </Switch>
        </div>
    </Router>
)