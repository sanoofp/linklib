import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBox from "../HelperComponent/search/SearchBox";
import { SearchMainContainer } from "./styles";
import ResultItem from "../HelperComponent/search/ResultItem";

class SearchMain extends Component {
  render() {
    const list = this.props.globalSearchResult;
    let list_view;
    if(list.length > 0) {
      list_view = list.map((result, i) => <ResultItem isMain={true} result={result} key={i} />);
    } else {
      list_view = <p className="no-result">No Result</p>;
    }
    return <SearchMainContainer>
      <div className="container">
        <div className="row">
          <div className="col-md-10 py-3 mx-auto">
            <h1>Search</h1>
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
});

export default connect(mapStateToProps)(SearchMain);