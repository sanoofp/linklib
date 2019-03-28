import React from "react";

export default function A(props) {
  return <a href={props.href ? props.href : "#"} target={props.href ? "_blank" : "_self"} rel="noopener noreferrer">{props.children}</a>
}