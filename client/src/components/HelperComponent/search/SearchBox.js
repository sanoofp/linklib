import React, { Component } from "react";
import { connect } from "react-redux";
import IconButton from '@material-ui/core/IconButton';
import SearchRounded from "@material-ui/icons/SearchRounded";
import styled from "styled-components";
import { searchGlobal, clearGlobalSearch } from "../../../actions/linkAction";
import { snackbarToggle } from "../../../actions/appStateAction";

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  margin: 12px 0;
  background: ${props => props.theme.bodybg};
  outline: none;
  border: none;
  box-shadow: 4px 4px 25px rgba(0,0,0,0.26);
  border-radius: 12px;
  padding: 24px 18px;
  font-size: 1.1em;
  color: ${props => props.theme.font};
  font-family: ${props => props.theme.primaryFont};
  @media (max-width: 580px) {
    margin: 20px 0;
  }  
`

class SearchBox extends Component {
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
    if(val !== "") {
      if(this.props.isMain) {
        return this.props.searchGlobal(val, 50);
      }
      this.props.searchGlobal(val);
    } else {
      this.props.snackbarToggle(true, "Please enter a search query", "error")
    }
  }

  componentWillUnmount() {
    this.props.clearGlobalSearch();
  }

  render() {
    return <div className="position-relative">
      <Input 
        type="text" 
        name="search" 
        onKeyDown={this.keyPress} 
        onChange={this.onChange} 
        placeholder="Search for link's"
      />
      <IconButton 
        onClick={this.onSubmit} 
        style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)" }}>
        <SearchRounded />
      </IconButton>
    </div>
  }
}

export default connect(null, { searchGlobal, clearGlobalSearch, snackbarToggle })(SearchBox);