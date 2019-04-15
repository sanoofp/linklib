import React from "react";
import { SingleLinkContainer, CopiedMsg, ShareContainer } from "./styles";
import A from "../Button/A";
import FontAwesomeIconSet from "./icons/social";
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
    <A className="links-btn" href={singleLink.url}>
      Open Link
    </A>
    <input
      className="links-btn"
      type="button"
      value="Copy link"
      onClick={() => props.copyLink()}
    />
  </div>
  <ShareContainer>
    <h2>SHARE LINK</h2>
    <FontAwesomeIconSet
      title={singleLink.linkTitle}
      link={singleLink.url}
      ll={() => props.share()}
    />
  </ShareContainer>

  { props.userOfLink ?
    <MenuComponent link={singleLink} />
    : null
  }

</SingleLinkContainer>
}

export default SingleLinkMain;