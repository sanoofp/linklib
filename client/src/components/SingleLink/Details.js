import React from "react";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { SingleLinkContainer } from "./styles";

const Details = props => {
  return <SingleLinkContainer>
    <h2>Details of link</h2>
    <div className="details">
      <span>Uploaded by <Chip
          avatar={<Avatar src={props.avatar} />}
          label={props.username}
          color="default"
          variant="outlined"
        />
      </span>
    </div>
  </SingleLinkContainer>
}

export default Details;