import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Items from "./Items";

const ShowLinks = props => {
  return (
    <div className="container show-items-container">
      <div className="row">
        <div className="col-md-12">
          {props.userLinks.map((item, idx) => <Items key={idx} linkTitle={item.linkTitle} url={item.url} />)}
        </div>
      </div>
    </div>
  );
};

ShowLinks.propTypes = {
  userLinks: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  userLinks: state.linkReducer.userLinks
});

export default connect(mapStateToProps)(ShowLinks);
