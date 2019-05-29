import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import SearchRounded from "@material-ui/icons/SearchRounded";
import InputAdornment from '@material-ui/core/InputAdornment';
import { SearchContainerForm } from "../styles";
import { searchLink } from "../../../actions/linkAction";

class Search extends Component {
  // state = {
  //   cardPositionFixed: false,
  //   headerHeight: 100
  // };
  // _isMounted = false;

  // componentDidMount() {
  //   this._isMounted = true;
  //   const headerHeight = document.querySelector("#header").clientHeight;
  //   document.addEventListener("scroll", event => {
  //     if (this._isMounted) {
  //       if (window.scrollY > headerHeight) {
  //         this.setState({
  //           cardPositionFixed: true,
  //           headerHeight
  //         });
  //       } else {
  //         this.setState({ cardPositionFixed: false, headerHeight });
  //       }
  //     }
  //   });
  // }

  handleChange = event => this.props.searchLink(event.target.value);

  componentWillUnmount() {
    // this._isMounted = false;
    this.props.searchLink("")
  }

  render() {
    return (
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-12">
            <SearchContainerForm
              // cardPositionFixed={this.state.cardPositionFixed}
              // headerHeight={this.state.headerHeight}
            >
              <TextField
                variant="outlined"
                label="Search by Title"
                placeholder="Title"
                margin="dense"
                onChange={e => this.handleChange(e)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchRounded />
                    </InputAdornment>
                  ),
                }}
              />
            </SearchContainerForm>
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  searchLink: PropTypes.func.isRequired
};

export default connect(
  null,
  { searchLink }
)(Search);
