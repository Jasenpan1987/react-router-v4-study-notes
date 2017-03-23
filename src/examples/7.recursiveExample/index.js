// 这个例子是用路径参数处理递归路径比如 / => /1 => /1/2 => /1/2/3 => /1/2/3/4 ...
import React from "react";
import {
    BrowserRouter as Router
} from "react-router-dom";

import Person from "./Person";

export default () => (
    <Router>
        {/* 这里的match是第一次手动传入的，保持和真正的match格式相同 */}
        <Person match={{params: { id: 0 }, url: ""}} />
    </Router>
)