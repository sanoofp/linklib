import React, { Component } from "react";
import { connect } from "react-redux";
import { GobalSearchContainer } from "../style";
import { searchGlobal, clearGlobalSearch } from "../../../actions/linkAction";
import { ArtUp, ArtDown } from "../../svg/SearchArt"
import LoadableLoader from "../../Loader/LoadableLoader";
import Loadable from "react-loadable";

const SearchResult = Loadable({
  loader: () => import("./sub-component/SearchResult"),
  loading: LoadableLoader
});
const SearchArts = Loadable({
  loader: () => import("./sub-component/SearchArts"),
  loading: LoadableLoader
});
const SearchBox = Loadable({
  loader: () => import("./sub-component/SearchBox"),
  loading: LoadableLoader
});

class GlobalSearch extends Component {
  state = {
    search: ""
  }
  
  onChange = event => this.setState({ search: event.target.value });

  keyPress = event => {
    if(event.keyCode === 13) {
      this.onSubmit();
    }
  }

  onSubmit = () => {
    const val = this.state.search;
    this.props.searchGlobal(val);
  }

  componentWillUnmount() {
    this.props.clearGlobalSearch();
  }
  
  render() {
    const { globalSearchResult, searchLinkLoading, darkTheme } = this.props;
    return (
    <GobalSearchContainer>
      <ArtUp />
      <div className="container">
        <div className="row">
          <SearchArts darkTheme={darkTheme} />
          <div className="col-md-6">
            <SearchBox onKeyDown={this.keyPress} onChange={this.onChange} onClick={this.onSubmit} />

            <SearchResult searchLinkLoading={searchLinkLoading} globalSearchResult={globalSearchResult} />
          </div>
        </div>
      </div>
      <ArtDown /> 
    </GobalSearchContainer>
    );
  }
}

const mapStateToProps = state => ({
  globalSearchResult: state.linkReducer.globalSearchResult,
  searchLinkLoading: state.linkReducer.searchLinkLoading,
  darkTheme: state.appStateReducer.darkTheme
})

export default connect(mapStateToProps, { searchGlobal, clearGlobalSearch })(GlobalSearch);