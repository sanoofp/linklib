import React, { Component } from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { GobalSearchContainer, ResultContainer } from "../style";
import { searchGlobal, clearGlobalSearch } from "../../../actions/linkAction";
import ResultItem from "./sub-component/ResultItem";
import SearchInfo from "./sub-component/SearchInfo";
import SearchArts from "./sub-component/SearchArts";
import SearchBox from "./sub-component/SearchBox";
import { ArtUp, ArtDown } from "../../svg/SearchArt"

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
            
            
            <ResultContainer>
              {
                searchLinkLoading ? <div className="search-loader"><CircularProgress color="secondary" /></div> : null
              }
              {
                globalSearchResult.length > 0 ?
                globalSearchResult.map((result, i) => <ResultItem result={result} key={i} />)                
                :
                <SearchInfo />
              }

            </ResultContainer>
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