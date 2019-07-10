// need React(duh) and the css for styling
import React from "react";
import "./Wrapper.css";

//stateless component
const Wrapper = props => <div className="wrapper">{props.children}</div>;
// EXPORT EXPORT EXPORT
export default Wrapper;