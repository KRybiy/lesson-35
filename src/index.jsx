import "@css/style.css";
import "@less/style.less";
import "@sass/style.scss";
import "@sass/style.sass";

import '@model/lodash';

import * as $ from "jquery";
import Post from "@model/post";
import json from "@assets/data";
import logo from "@assets/icon-square-big";
import xml from "@assets/data.xml";
import csv from "@assets/data.csv";

import React from "react";
import * as ReactDOM from "react-dom/client";

const App = () => (
  <div className="container">
    <h1>Webpack training</h1>
    <div className="webpack-logo" />
    <pre />
    <div className="less-demo">
      <h2>Less</h2>
    </div>
    <div className="scss-demo">
      <h2>Scss</h2>
    </div>
    <div className="sass-demo">
      <h2>Sass</h2>
    </div>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

const post = new Post("Webpack Post Title", logo);

$("pre").addClass("code").html(post.toString());
$("pre").html(post.toString());
console.log("JSON:", json);
console.log(logo);
console.log("XML:", xml);
console.log("CSV:", csv);
