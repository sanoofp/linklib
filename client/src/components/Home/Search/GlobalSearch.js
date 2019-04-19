import React, { Component } from "react";
import { connect } from "react-redux";
import SearchRounded from "@material-ui/icons/SearchRounded";
import CircularProgress from "@material-ui/core/CircularProgress";
import { GobalSearchContainer, ResultContainer } from "../style";
import { searchGlobal, clearGlobalSearch } from "../../../actions/linkAction";
import ResultItem from "./ResultItem";
import SearchInfo from "./SearchInfo";
import IconButton from '@material-ui/core/IconButton';
import art from "./art1.png";

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
    const { globalSearchResult, searchLinkLoading } = this.props;
    return (
    <GobalSearchContainer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>SEARCH FOR LINKS</h2>
            <p>Search for links from the linklib database which are flaged as public by the owner</p>
            <img src={art} alt="Search linklib"/>            
          </div>
          <div className="col-md-6">
            
            <div className="search-box">
              <input type="text" name="search" onKeyDown={this.keyPress} onChange={this.onChange} placeholder="Search for link's"/>
              <IconButton onClick={this.onSubmit} style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)" }}>
                <SearchRounded />
              </IconButton>
            </div>
            
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
    </GobalSearchContainer>
    );
  }
}

const mapStateToProps = state => ({
  globalSearchResult: state.linkReducer.globalSearchResult,
  searchLinkLoading: state.linkReducer.searchLinkLoading
})

export default connect(mapStateToProps, { searchGlobal, clearGlobalSearch })(GlobalSearch);