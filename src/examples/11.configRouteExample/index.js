// 这个例子会展示怎么把路由配置集中管理
import React from "react";
import {
    BrowserRouter as Router,
    Route, Link
} from "react-router-dom";

// 有些开发者习惯把路由集中管理，其实路由管理的核心就是管理一系列数据
// React在讲数据映射(mapping)到组件这方面很优秀，而且<Route>的本质
// 就是一个组件。



////////////////////////////////////////////////////////////
// route相关的组件
const Toys = () => (<h2>玩具组件，没有子路由</h2>);
const Beer = () => (<h2>啤酒组件，没有自路由</h2>);
const Coke = () => (<h2>可乐组件，没有自路由</h2>);

const Drink = ({ routes }) => (
    <div>
        <h2>Drink组件，有子路由</h2>
        <ul>
            <li><Link to="/drink/coke">可乐</Link></li>
            <li><Link to="/drink/beer">啤酒</Link></li>
        </ul>
        {routes.map((route, idx) => (
            <RouteWithSubRoutes key={idx} {...route} />
        ))}
    </div>
);

// RouteWithSubRoutes是把Route包了一层的组件，在需要使用<Route>的时候
// 使用这个组件以处理路由嵌套。

const RouteWithSubRoutes = (route) => {
    console.log("route", route)
    return (
        <Route path={route.path}
            render={(props) => {
                console.log("props", props)
                return (
                    <route.component 
                        {...props} 
                        // 讲自路由继续向下传来实现嵌套
                        routes={route.routes}
                    />
                )
            }} />
    )
}
// 组件配置的数组
const routes = [
  {
      path: '/toy',
      component: Toys
  },
  {
      path: '/drink',
      component: Drink,
      routes: [
        {
            path: '/drink/coke',
            component: Coke
        },
        {
            path: '/drink/beer',
            component: Beer
        }
      ]
  }
]
export default () => (
    <Router>
        <div>
             <ul>
                <li><Link to="/toy">玩具</Link></li>
                <li><Link to="/drink">饮料</Link></li>
            </ul>

            {routes.map((route, idx) => {
                console.log(route)
                return <RouteWithSubRoutes key={idx} {...route} />
            })}
        </div>
    </Router>
)