import React from "react";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { SingleLinkContainer } from "./styles";

// const getLinkDetails = link => {
//   console.log(link);
//   fetch(link).then(data => data.text())
//     .then(html => {
//       const title = new DOMParser().parseFromString(html, "text/html").title
//       return title
//     })
// }

const Details = props => {
  return <SingleLinkContainer>
    <h2>Details of link</h2>
    {/* <p>
      {title ? `Title of the webpage : ${title}` : null}
    </p> */}
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