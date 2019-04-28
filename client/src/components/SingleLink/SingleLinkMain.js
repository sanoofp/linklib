import React from "react";
import Button from "@material-ui/core/Button";
import { SingleLinkContainer, CopiedMsg } from "./styles";
import A from "../Button/A";
// import FontAwesomeIconSet from "./icons/social";
import MenuComponent from "../Menu/MenuComponent";

const SingleLinkMain = props => {
  const { singleLink } = props;
  return <SingleLinkContainer>
  <h1>{singleLink.linkTitle}</h1>
  <div>
    <input
      type="text"
      id="copy-link"
      readOnly
      value={singleLink.url ? singleLink.url : ""}
    />
    <CopiedMsg copied={props.copied}>
      <p>Copied to clipboard</p>
    </CopiedMsg>
  </div>
  <div>
    <Button color="secondary" variant="outlined" size="medium" className="link-btn">
    <A className="links-btn" href={singleLink.url}>
      Open Link
    </A>
    </Button>
    <Button onClick={() => props.copyLink()} color="secondary" variant="outlined" size="medium" className="link-btn">
      Copy Link 
    </Button>
  </div>

  { props.userOfLink ?
    <MenuComponent link={singleLink} />
    : null
  }

</SingleLinkContainer>
}

export default SingleLinkMain;