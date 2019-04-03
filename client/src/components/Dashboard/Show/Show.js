import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Items from "./Items";

const ShowLinks = props => {
  const { userLinks, searchKeyword } = props.link;
  let searchData = null;
  if(searchKeyword) {
    const searchedLinks = userLinks.filter(item => {
      // return (item.linkTitle.toLowerCase().search(searchKeyword.toLowerCase())) !== -1
      return item.linkTitle.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1;
    });
    
    searchData = searchedLinks.map((item, idx) => (
      <Items
        key={idx}
        linkTitle={item.linkTitle}
        url={item.url}
        _id={item._id}
      />
    ));

    if(searchedLinks.length === 0) {
      searchData = <p className="no-result">No result found</p>
    }
  }
  // console.log(searchData, searchKeyword, Boolean(searchKeyword));
  return (
    <div className="container show-items-container">
      <div className="row">
        <div className="col-md-12">
          
          { searchKeyword !== "" && <div className="is-searching">
            <p>Showing Result for <strong>{searchKeyword}</strong></p>
            {(searchData.length !== 0 && Array.isArray(searchData)) && <small>Found {searchData.length} results</small>}
          </div>
          }
          { searchKeyword === ""
            ? userLinks.map((item, idx) => (
                <Items
                  key={idx}
                  linkTitle={item.linkTitle}
                  url={item.url}
                  _id={item._id}
                />
              ))
            : searchData}
        </div>
      </div>
    </div>
  );
};

ShowLinks.propTypes = {
  link: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  link: state.linkReducer
});

export default connect(mapStateToProps)(ShowLinks);
