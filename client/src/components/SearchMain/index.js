import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBox from "../HelperComponent/search/SearchBox";
import { SearchMainContainer } from "./styles";
import ResultItem from "../HelperComponent/search/ResultItem";
import ArtLight from "./art_light.svg";
import ArtDark from "./art_dark.svg";

class SearchMain extends Component {
  render() {
    const { darkTheme } = this.props;
    const list = this.props.globalSearchResult;
    let list_view;
    if(list.length > 0) {
      list_view = list.map((result, i) => <ResultItem isMain={true} result={result} key={i} />);
    } else {
      list_view = <div className="no-result">
        <img src={darkTheme ? ArtDark : ArtLight} alt="Search Art" />
        <p>No Link Found</p>
        </div>;
    }
    return <SearchMainContainer>
      <div className="container">
        <div className="row">
          <div className="col-md-10 py-3 mx-auto">
            <SearchBox isMain={true} />
            {list_view}
          </div>
        </div>
      </div>
    </SearchMainContainer>
  }
}

const mapStateToProps = state => ({
  globalSearchResult: state.linkReducer.globalSearchResult,
  darkTheme: state.appStateReducer.darkTheme
});

export default connect(mapStateToProps)(SearchMain);