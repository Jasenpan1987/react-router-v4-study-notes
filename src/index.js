import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import BasicExample from "./examples/1.basicExample";
import UrlParamExample from "./examples/2.urlParams";
import AuthExample from "./examples/3.authExample";
import CustomLink from "./examples/4.customLinkExample";
import PromptExample from "./examples/5.promptExample";
import NoMatchExample from "./examples/6.nomatchExample";
import RecursiveExample from "./examples/7.recursiveExample";
import SideBarExample from "./examples/8.sidebarExample";
import AnimationExample from "./examples/9.animationExample";
import AmbiguousExample from "./examples/10.ambiguousExample";

ReactDOM.render(
  <AmbiguousExample />,
  document.getElementById('root')
);
