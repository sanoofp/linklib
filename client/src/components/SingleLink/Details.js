import React from "react";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { SingleLinkContainer, ShareContainer } from "./styles";
import FontAwesomeIconSet from "./icons/social";

const Details = props => {
  return <SingleLinkContainer>
    <ShareContainer>
      <h2>SHARE LINK</h2>
      <FontAwesomeIconSet
        title={props.singleLink.linkTitle}
        link={props.singleLink.url}
        ll={() => props.share()}
      />
    </ShareContainer>

    <h2>Details of link</h2>
    <div className="details">
      <blockquote>{props.singleLink.public_link ? <p>This is a public link</p> : <p>This is a private link, this linklib ID is only availble to {props.username} and when shared by the direct <a href={`/link/${props.singleLink._id}`}>linklib url</a></p>}
      </blockquote>
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