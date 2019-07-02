import React from "react";
import SearchRounded from "@material-ui/icons/SearchRounded";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const SearchInfo = props => {
  return (
    <div className="search-info">
      <SearchRounded style={{ fontSize: 50 }} />
      <p>Search for Link's.</p>
      <Link to={`/search`}>
        <Button
          aria-label="Search for more links"
          color="secondary"
          variant="outlined"
        >
          Search for More from Linklib
        </Button>
      </Link>
    </div>
  );
};

export default SearchInfo;
