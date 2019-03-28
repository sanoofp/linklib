import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserLink } from "../../actions/linkAction";
import { LinksContainer } from "./styles";
import LinkBox from './Link'

const ShowLinks = props => {
  const links = props.userLinks;
  return links ? <LinksContainer>
    {links.map((item, i) => <LinkBox key={i} link={item} />)}
  </LinksContainer> : <h1 style={{textAlign: "center"}}>Loading..</h1>
}

ShowLinks.propTypes = {
  userLinks: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  userLinks: state.linkReducer.userLinks
})

export default connect(mapStateToProps, { getUserLink })(ShowLinks);
