import React, { Component } from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import { GobalSearchContainer } from "../style";
import { ArtUp, ArtDown } from "../../svg/SearchArt";
import SearchResult from "./sub-component/SearchResult";
import SearchArts from "./sub-component/SearchArts";
import SearchBox from "../../HelperComponent/search/SearchBox";
// import LoadableLoader from "../../Loader/LoadableLoader";
// import Loadable from "react-loadable";

// const SearchResult = Loadable({
//   loader: () => import("./sub-component/SearchResult"),
//   loading: LoadableLoader
// });
// const SearchArts = Loadable({
//   loader: () => import("./sub-component/SearchArts"),
//   loading: LoadableLoader
// });
// const SearchBox = Loadable({
//   loader: () => import("../../HelperComponent/search/SearchBox"),
//   loading: LoadableLoader
// });

class GlobalSearch extends Component {
  render() {
    const { globalSearchResult, darkTheme } = this.props;
    return (
      <GobalSearchContainer>
        <ArtUp />
        <div className="container">
          <div className="row">
            <SearchArts darkTheme={darkTheme} />
            <div className="col-md-6">
              <Fade bottom distance="30px">
                <SearchBox />
                <SearchResult globalSearchResult={globalSearchResult} />
              </Fade>
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
  darkTheme: state.appStateReducer.darkTheme
});

export default connect(mapStateToProps)(GlobalSearch);
