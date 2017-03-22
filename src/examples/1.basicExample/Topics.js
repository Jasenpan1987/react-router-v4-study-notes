import React from "react";
import {
    Link, Route
} from "react-router-dom"

const TopicDetail = ({ match }) => {
    // match的另一个属性是match.params.<params-key>，可以帮你拿到路径字符串参数
    // 比如一会传过来的url是 /topics/123，topicId就是123
    return (
        <h3>TopicId: {`${match.params.topicId}`}</h3>
    )
}

const Topics = ({ match }) => {
    // match 是由上边传下来的属性，在props里，里面包括url和其他的参数
    // url: 第一个link的match.url就是/topics
    console.log(match); 
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with react</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props vs State</Link>
                </li>
            </ul>

            {/* rrv4中，route就是组件，可以自由拆分，或者嵌套进其他组件 */}
            <Route path={`${match.url}/:topicId`} component={TopicDetail}/>
            {/* 这个Route是说，当没有topicId参数时，会传到这里，注意要加上exact属性，否则会匹配上面的那条路径 */}
            <Route exact path={`${match.url}`} render={({match}) => {
                console.log("without topicId", match);
                return (
                    <h2>Please select a topic.</h2>
                )
            }} />
        </div>
    )
}

export default Topics;