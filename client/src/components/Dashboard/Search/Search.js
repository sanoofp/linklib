import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import SearchRounded from "@material-ui/icons/SearchRounded";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { SearchContainerForm } from "../styles";
import { searchLink } from "../../../actions/linkAction";

class Search extends Component {
  state = {
    select: "Title"
  };
  // _isMounted = false;

  handleChange = event =>
    this.props.searchLink({
      text: event.target.value,
      type: this.state.select
    });

  handleSelectChange = e => this.setState({ select: e.target.value });

  componentWillUnmount() {
    this.props.searchLink({
      text: "",
      type: "Title"
    });
  }

  render() {
    const { select } = this.state;
    return (
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-12">
            <SearchContainerForm
            // cardPositionFixed={this.state.cardPositionFixed}
            // headerHeight={this.state.headerHeight}
            >
              <FormControl className="select">
                <InputLabel htmlFor="select-simple">Search By</InputLabel>
                <Select
                  value={select}
                  onChange={this.handleSelectChange}
                  inputProps={{ name: "tags" }}
                >
                  <MenuItem value="Title">Title</MenuItem>
                  <MenuItem value="Tags">Tags</MenuItem>
                </Select>
              </FormControl>

              <TextField
                variant="outlined"
                label={`Search by ${select}`}
                placeholder={select}
                margin="dense"
                onChange={e => this.handleChange(e)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchRounded />
                    </InputAdornment>
                  )
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
