import React, { Component } from "react";
import { Prompt } from "react-router-dom";

// Prompt是一个弹出框，让用户确认是否继续跳转，
// 上面有两个属性：when是弹出框弹出的条件，比如表单不为空等
// message是弹出框显示的信息，里面可以写字符串或者一个回调
// 回调可以接受一系列参数，最后一定要返回一个字符串

export default class Contact extends Component {
    constructor(props){
        super(props);

        this.state = { msg: "" };
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            msg: ""
        });
    }

    handleChange(e){
        this.setState({
            msg: e.target.value
        });
    }

    render(){
        return (
            <div> 
                <p>{this.state.msg.length!==0 ? "表单不为空，能提交，不能跳转" : "表单为空，不可以提交，可以跳转"}</p>
                
                <input type="text" 
                    onChange={(e) => {this.handleChange(e)}}
                    value={this.state.msg} 
                    placeholder="随便输入什么都行。。。"
                />
                {" "}
                <button 
                    onClick={(e) => {this.handleSubmit(e)}} 
                    disabled={this.state.msg.length===0}>提交</button>
                
                <Prompt 
                    when={this.state.msg.length!==0}
                    message={location => (
                        `跳转到${location.pathname}会导致表单内容丢失，是否继续跳转？`
                    )}
                />
            </div>
        )
    }
}