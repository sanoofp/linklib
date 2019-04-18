import React from "react";
// import art from "./art1.png"
import SearchRounded from "@material-ui/icons/SearchRounded";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const SearchInfo = props => {
  return (
    <div className="search-info">
      {/* <img src={art} alt="Search linklib"/> */}
      <SearchRounded style={{ fontSize: 50 }} />
      <p>Search for Link's.</p>
      <Button component={Link} to={`/search`} color="secondary" variant="outlined">Search for More from Linklib</Button> 
    </div>
  )
}

export default SearchInfo;