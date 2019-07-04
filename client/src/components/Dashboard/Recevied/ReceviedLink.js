import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVoteYea, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import AddToHomeScreenRounded from "@material-ui/icons/AddToHomeScreenRounded";
import { truncateStringTo } from "../../../functions/helper";
import { ReceviedLinkItem } from "../styles";
import A from "../../Button/A";
import Button from "@material-ui/core/Button";

const ReceviedLink = props => <ReceviedLinkItem>
<div>
  <strong>{props.link.linkID.linkTitle}</strong>
  <p>{truncateStringTo(props.link.linkID.url, 80)}</p>
  <A href={props.link.linkID.url}>
    <Button
      aria-label="Open link"
      color="secondary"
      variant="outlined"
      size="medium"
    >
      <AddToHomeScreenRounded
        style={{ marginRight: 5, fontSize: 16 }}
      />
      Open link
    </Button>
  </A>
</div>

<div>
  <p className="my-2">From {props.link.fromUsername}</p>  
  <IconButton color="primary" onClick={() => props.acceptLink(props.link)}>
    <FontAwesomeIcon icon={faVoteYea} />
    <h6>Accept</h6>
  </IconButton>
  <IconButton color="secondary" onClick={() => props.rejectLink(props.link)}>
    <FontAwesomeIcon icon={faTrashAlt} />
    <h6>Remove Request</h6>
  </IconButton>
</div>
    
</ReceviedLinkItem>

export default ReceviedLink;