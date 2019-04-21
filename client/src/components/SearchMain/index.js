import React, { Component } from "react";
import SearchBox from "../HelperComponent/search/SearchBox";
import { SearchMainContainer } from "./styles";

class SearchMain extends Component {
  render() {
    return <SearchMainContainer>
      <div className="container">
        <div className="row">
          <div className="col-md-10 py-3 mx-auto">
            <h1>Search</h1>
            <SearchBox />
          </div>
        </div>
      </div>
    </SearchMainContainer>
  }
}

export default SearchMain;