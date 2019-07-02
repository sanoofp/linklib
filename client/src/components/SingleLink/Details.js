import React from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { SingleLinkContainer, ShareContainer } from "./styles";
import FontAwesomeIconSet from "./icons/social";
import CircularProgress from "@material-ui/core/CircularProgress";

const Details = props => {
  let src = "";
  const isLoaded = Object.keys(props.singleLinkDetails).length !== 0;
  if (isLoaded) {
    src = "data:image/png;base64," + props.singleLinkDetails.screenshot;
    // src = props.singleLinkDetails.shot;
  }
  return (
    <SingleLinkContainer>
      <ShareContainer>
        <h2>SHARE LINK</h2>
        <FontAwesomeIconSet
          title={props.singleLink.linkTitle}
          link={props.singleLink.url}
          ll={() => props.share()}
        />
      </ShareContainer>

      <h2>Details of link</h2>

      {isLoaded ? (
        <div className="screenshot">
          <img src={src} alt="Screenshot" />
          <p>{props.singleLinkDetails.info.title}</p>
        </div>
      ) : (
        <div>
          <p>Loading webpage</p>
          <CircularProgress size={20} />
        </div>
      )}

      <div className="details">
        <blockquote>
          {props.singleLink.public_link ? (
            <p>This is a public link</p>
          ) : (
            <p>
              This is a private link, this linklib ID is only availble to{" "}
              {props.username} and when shared by the direct{" "}
              <a href={`/link/${props.singleLink._id}`}>
                <u>linklib url</u>
              </a>
            </p>
          )}
        </blockquote>
        <span>
          Uploaded by{" "}
          <Chip
            avatar={<Avatar src={props.avatar} />}
            label={props.username}
            color="default"
            variant="outlined"
          />
        </span>
      </div>
    </SingleLinkContainer>
  );
};

export default Details;
