import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ResultContainer } from "../../style"
import ResultItem from "./ResultItem";
import SearchInfo from "./SearchInfo";

const SearchResult = props => {
  return(
    <ResultContainer>
      {
        props.searchLinkLoading ? <div className="search-loader"><CircularProgress color="secondary" /></div> : null
      }
      {
        props.globalSearchResult.length > 0 ?
        props.globalSearchResult.map((result, i) => <ResultItem result={result} key={i} />)                
        :
        <SearchInfo />
      }

    </ResultContainer>
  );
}

export default SearchResult;