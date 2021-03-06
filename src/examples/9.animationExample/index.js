// 使用router进行动画过过度效果，其实本质上与直接使用ReactCSSTransitionGroup没啥区别
// 只不过动画所需要的变量是从路径传过来的
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import "./style.css";

const AnimationExample = () => (
  <Router>
    <Route render={({ location }) => (
      <div style={styles.fill}>
        <Route exact path="/" render={() => (
          <Redirect to="/10/90/50"/>
        )}/>

        <ul style={styles.nav}>
          <NavLink to="/10/90/50">Red</NavLink>
          <NavLink to="/120/100/40">Green</NavLink>
          <NavLink to="/200/100/40">Blue</NavLink>
          <NavLink to="/310/100/50">Pink</NavLink>
        </ul>

        <div style={styles.content}>
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {/* 
                使用方法与使用其他ReactCSSTransitionGroup相同，
                但是需要传入'location'和'Route'来使这个组件在使
                用动画效果时可以匹配之前的location
            */}
            <Route
              location={location}
              key={location.key}
              path="/:h/:s/:l"
              component={HSL}
            />
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )}/>
  </Router>
)

const NavLink = (props) => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: 'inherit' }}/>
  </li>
)

const HSL = ({ match: { params } }) => (
  <div style={{
    ...styles.fill,
    ...styles.hsl,
    background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
  }}>hsl({params.h}, {params.s}%, {params.l}%)</div>
)

const styles = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center'
}

styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex'
}

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}

styles.hsl  = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
}

export default AnimationExample