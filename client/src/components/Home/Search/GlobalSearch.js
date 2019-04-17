import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import LinkRounded from "@material-ui/icons/LinkRounded";
import SearchRounded from "@material-ui/icons/SearchRounded";
import CircularProgress from "@material-ui/core/CircularProgress";
import { GobalSearchContainer, ResultContainer } from "../style";
import { searchGlobal, clearGlobalSearch } from "../../../actions/linkAction";
import { truncateStringTo } from "../../../functions/helper";
import art from "./art1.png"

class GlobalSearch extends Component {
  state = {
    search: ""
  }
  
  onChange = event => {
    const val = event.target.value;
    this.props.searchGlobal(val);
    this.setState({ search: event.target.value })
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
            <input type="text" name="search" onChange={this.onChange} placeholder="Search for link's"/>
            
            <ResultContainer>
            {searchLinkLoading && <div className="search-loader"><CircularProgress color="secondary" /></div>
            }
            {globalSearchResult && globalSearchResult.map(result => <div className="result-item">
                <span>
                  <h2>{result.linkTitle}</h2>
                  <p>{truncateStringTo(result.url, 40)}</p>
                </span>
                <div>

                  <Link to={`/link/${result._id}`}>
                    <Button
                      style={{ marginLeft: 8 }}
                      color="secondary"
                      variant="outlined"
                      size="small"
                    >
                      <LinkRounded style={{ marginRight: 5, fontSize: 16 }} />
                      Details
                    </Button>
                  </Link>

                </div>
                
              </div>
            )}
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