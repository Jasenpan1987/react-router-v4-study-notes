import React from "react";
import { withRouter } from "react-router-dom"
import auth from "./fakeAuth";

// withRouter是一个高阶组件，它可以把一个普通的组件包装，使它具有Router的三个属性
// history，location，match，并可以调用这三个属性上的方法（例如history.push）
const AuthButton = withRouter((props) => {
    const { history } = props;
    // console.log(props)
    return (
        auth.getAuth() ? (
            <p>
            Welcome! <button onClick={() => {
                auth.logout(() => history.push('/'))
            }}>Sign out</button>
            </p>
        ) : (
            <p>You are not logged in.</p>
        )
    )
})

export default AuthButton;