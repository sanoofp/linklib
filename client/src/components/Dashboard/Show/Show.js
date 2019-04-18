import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Items from "./Items";

const ShowLinks = props => {
  const { userLinks, searchKeyword } = props.link;
  let searchData = null;
  if (searchKeyword) {
    const searchedLinks = userLinks.filter(item => {
      return (
        item.linkTitle.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1
      );
    });

    searchData = searchedLinks.map((item, idx) => (
      <Items
        key={idx}
        link={item}
      />
    ));

    if (searchedLinks.length === 0) {
      searchData = <p className="no-result">No result found</p>;
    }
  }
  // console.log(searchData, searchKeyword, Boolean(searchKeyword));
  return (
    <div className="container show-items-container">
      <div className="row">
        <div className="col-md-12">
          {searchKeyword !== "" && (
            <div className="is-searching">
              <p>
                Showing Result for <strong>{searchKeyword}</strong>
              </p>
              {searchData.length !== 0 && Array.isArray(searchData) && (
                <small>Found {searchData.length} results</small>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="row">
      {userLinks.length === 0 && <h3 className="py-5 mx-auto">No links found.</h3>}
        {searchKeyword === ""
          ? userLinks.map((item, idx) => (
              <Items
                key={idx}
                link={item}
                userID={props.userID}
              />
            ))
          : searchData}
      </div>
    </div>
  );
};

ShowLinks.propTypes = {
  link: PropTypes.object.isRequired,
  userID: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  link: state.linkReducer,
  userID: state.authReducer.user._id
});

export default connect(mapStateToProps)(ShowLinks);
