import React from "react";
import {
    BrowserRouter as Router,
    Link, Route
} from "react-router-dom";

import people from "./people"; // people是个数组，上面追加有findById方法，自己写的

const Person = ({ match }) => {
    // match的格式：{{params: { id: 0 }, url: ""}}
    const targetPerson = people.findById(match.params.id); // 找到person
    
    return (
        <div>
            <h3>{targetPerson.name}'s friends: </h3>
            <ul>
                {targetPerson.friends.map(id => {
                    return (
                        <li key={id}>
                            <Link to={`${match.url}/${id}`}>
                                {people.findById(id).name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Route path={`${match.url}/:id`} component={Person} />{/* match.url会拿到上一层的url，然后在尾部追加/id */}
        </div>
    )
}

export default Person;