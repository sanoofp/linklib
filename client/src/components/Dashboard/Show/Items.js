import React from "react";
import { ShowLinkItem } from "../styles";
import { truncateStringTo } from "../../../functions/helper";
import A from "../../Button/A";
import Button from "@material-ui/core/Button";
import AddToHomeScreenRounded from "@material-ui/icons/AddToHomeScreenRounded";
import LinkRounded from "@material-ui/icons/LinkRounded";
import { Link } from "react-router-dom";

const Items = props => (
  <ShowLinkItem>
    <h4>{props.linkTitle}</h4>
    <p>{truncateStringTo(props.url, 100)}</p>
    <div className="show-link-item-btn">
      <A href={props.url}>
        <Button color="secondary" variant="outlined" size="medium">
          <AddToHomeScreenRounded style={{ marginRight: 5, fontSize: 16 }} />
          Open link
        </Button>
      </A>
      <Link to={`/link/${props._id}`}>
        <Button
          style={{ marginLeft: 8 }}
          color="secondary"
          variant="outlined"
          size="medium"
        >
          <LinkRounded style={{ marginRight: 5, fontSize: 16 }} />
          Details
        </Button>
      </Link>
    </div>
  </ShowLinkItem>
);

export default Items;
