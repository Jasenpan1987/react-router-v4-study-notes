import React, { Component } from 'react';
import {
    Redirect
} from "react-router-dom";

import auth from "./fakeAuth";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = { isAuth: false };
        this.login = this.login.bind(this);
    }
    
    componentDidMount(){
        this.setState({
            isAuth: auth.getAuth()
        });
    }

    login(){
        auth.login((isAuth) => {
            this.setState({
                isAuth
            });
        });
    }
    render() {
        return (
            <div>
                { this.state.isAuth ?
                    // redirect 可以直接把route推倒to所指向的位置
                    <Redirect to="/"/> :
                    <div>
                        <p>To see the private page, you must login first</p>
                        <button onClick={this.login}>Log in</button>
                    </div>
                 }
            </div>
        );
    }
}

export default Login;