import React from "react";
import IconButton from '@material-ui/core/IconButton';
import SearchRounded from "@material-ui/icons/SearchRounded";

const SearchBox = props => <div className="search-box">
  <input type="text" name="search" onKeyDown={props.onKeyDown} onChange={props.onChange} placeholder="Search for link's"/>
  <IconButton onClick={props.onClick} style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)" }}>
    <SearchRounded />
  </IconButton>
</div>

export default SearchBox;