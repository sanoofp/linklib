import React from "react";
import { LinkBoxContainer } from "./styles";
import { Link } from "react-router-dom";
import { truncateStringTo } from "../../functions/helper";
import Button from "@material-ui/core/Button";

const LinkBox = props => (
  <LinkBoxContainer>
    <h3>{props.link.linkTitle}</h3>
    <strong>{truncateStringTo(props.link.url, 55)}</strong>
    <div className="dashboard--links-action">
      <Button variant="outlined" component={Link} to={props.link.url} color="secondary" size="small">
        Open link
      </Button>
      <Button variant="outlined" component={Link} to={`/link/${props.link._id}`} color="secondary" size="small">
        Link Details
      </Button>
    </div>
  </LinkBoxContainer>
)

export default LinkBox;
