import React from "react";
import artPrimary from "./art_light.svg";
import artSecondary from "./art_dark.svg";

// @credits - https://undraw.co/
// dark = #585858
// light = #30b669

const SearchArts = props => <div className="col-md-6">
  <h3>SEARCH FOR LINKS</h3>
  <p>Search for links from the linklib database which are flaged as public by the owner</p>
  <img src={!props.darkTheme ? artPrimary : artSecondary} className="search-home-art" alt="Search linklib"/>
</div>

export default SearchArts;