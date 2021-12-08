import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ReactDOM from "react-dom";
import React from "react";

import Weather from "./Weather";

const rootElement = document.getElementById("root");
ReactDOM.render(<Weather />, rootElement);
