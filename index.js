import React from "react";
import { render } from "react-dom";
import Mdx from "./index.mdx";

let body = document.body;
let target = body.appendChild(document.createElement("div"));

render(<Mdx />, target);
