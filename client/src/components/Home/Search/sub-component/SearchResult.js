import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { ResultContainer } from "../../style";
import ResultItem from "../../../HelperComponent/search/ResultItem";
import SearchInfo from "./SearchInfo";

const SearchResult = props => {
  const list = props.globalSearchResult;
  let list_view;
  console.log(list);
  if (list.length > 0) {
    list_view = list.map((result, i) => <ResultItem result={result} key={i} />);
    list_view.push(
      <div className="show-more--btn" key={list.length + 1}>
        <Link to="/search">
          <Button
            aria-label="Show more"
            variant="contained"
            color="secondary"
            fullWidth
          >
            Show More
          </Button>
        </Link>
      </div>
    );
  } else {
    list_view = <SearchInfo />;
  }
  return <ResultContainer>{list_view}</ResultContainer>;
};

export default SearchResult;
