// 处理无法被匹配的路径
import React from "react";
import {
    BrowserRouter as Router,
    Link, Route, Switch
} from "react-router-dom";

export default () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页（正常渲染）</Link></li>
                <li><Link to="/about">about页面，可以正常渲染</Link></li>
                <li><Link to="/about/123">有路径参数的about页面，可以正常渲染</Link></li>
                <li><Link to="/not-found">about w id</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" render={() => (
                <div>
                    <h2>首页</h2>
                    这个页面在Switch之外，所以也可以看见默认的404页面
                </div>
            )}/>
            <Switch>
                <Route path="/about" exact render={({match}) => (
                    <div>
                        <h2>About页面</h2>
                        这个页面在Switch里面，看不到404页面，
                        而且由于使用了exact，所以在走有路径参数的about页面时，不会看到这个页面
                    </div>
                )}/>
                <Route path="/about/:id" render={({match}) => (
                    <div>
                        <h2>About页面（路径参数为{match.params.id}）</h2>
                        这个页面在Switch里面，看不到404页面
                    </div>
                )}/>
                <Route render={() => (
                    <div>
                        <h2>404页面</h2>
                        这个页面没有path属性，所以会匹配一切链接，但是由于包在Switch里面
                        所以只有在没有Route匹配路径时才会出现。
                        Switch里面的Route在匹配路径时会匹配第一个被匹配到的Route。
                    </div>
                )}/>
            </Switch>
        </div>
    </Router>
)