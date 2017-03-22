import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import BasicExample from "./examples/1.basicExample";
import UrlParamExample from "./examples/2.urlParams";
import AuthExample from "./examples/3.authExample";
import CustomLink from "./examples/4.customLinkExample";
import PromptExample from "./examples/5.promptExample";
import NoMatchExample from "./examples/6.nomatchExample.js";

ReactDOM.render(
  <NoMatchExample />,
  document.getElementById('root')
);