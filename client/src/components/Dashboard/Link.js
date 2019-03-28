import React from "react";
import { LinkBoxContainer } from './styles'
import { Link } from "react-router-dom";

const LinkBox = props => <Link to={`/link/single/${props.link._id}`}>
  <LinkBoxContainer>
    <h3>{props.link.linkTitle} <span>{props.link.url}</span></h3>
    <a href={props.url}>Open Link</a>
  </LinkBoxContainer>
</Link>

export default LinkBox;