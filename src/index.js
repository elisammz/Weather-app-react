import ReactDOM from "react-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Weather from "./Weather";

const rootElement = document.getElementById("root");
ReactDOM.render(<Weather />, rootElement);
