// 这个例子是一个sidebar的例子，其实就是在相同路径下，渲染多个Route。
// 在rrv4中，route和一般的component没有区别，可以任意组合，嵌套
// rrv4的route其实就是一块会根据路径而进行条件性渲染的组件
// 比如 <Route path="/foo" component={Foo} />这个东西说白了就是
// 当路径为/foo的时候，Foo这个组件就会被渲染，
// 而且上面会有额外的几个props（match, location, path）可以供我们使用
import React from "react";
import {
    BrowserRouter as Router,
    Link, Route
} from "react-router-dom";

const routes = [
    { 
        path: '/',
        exact: true,
        sidebar: () => <div>Home</div>,
        main: () => <h2>Hello Home</h2>
    },
    { 
        path: '/foo',
        sidebar: () => <div>Foo</div>,
        main: () => <h2>Hello Foo</h2>
    },
    { 
        path: '/bar',
        sidebar: () => <div>Bar</div>,
        main: () => <h2>Hello Bar</h2>
    }
];

export default () => (
    <Router>
        <div style={{display: "flex"}}> 
            <div style={{
                padding: '10px',
                width: '40%',
                background: '#f0f0f0'
            }}>{/* sidebar 加上一点样式*/}
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/foo">Foo</Link></li>
                    <li><Link to="/bar">Bar</Link></li>
                </ul>
                {/* 动态生成Route */}
                {routes.map((route, idx) => (
                    // 你可以在项目的任何位置渲染Route。
                    // 只要路径匹配，被渲染的Route会和其他Route组件一样被渲染。
                    // 所以当渲染sidebar或者其他需要路径匹配的组件时，其实就是
                    // 渲染多个Route组件。
                    <Route 
                        path={route.path} 
                        component={route.sidebar} 
                        exact={route.exact} 
                        key={idx}
                    />
                ))}
            </div>
            <div style={{ flex: 1, padding: '10px' }}>
                {/* 这里是相同路径下被渲染的第二个Route */}
                {routes.map((route, idx) => (
                    <Route 
                        path={route.path} 
                        component={route.main} 
                        exact={route.exact} 
                        key={idx}
                    />
                ))}
            </div>
        </div>
    </Router>
)