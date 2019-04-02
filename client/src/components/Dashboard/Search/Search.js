import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchRounded from '@material-ui/icons/SearchRounded';
import { SearchContainerForm } from '../styles';

class Search extends Component {
  state = {
    linkTitle: "",
    cardPositionFixed: false,
    headerHeight: 100
  }
  _isMounted = false;

  handleChange = (name, event) => {
    this.setState({ [name]: event.target.value })
  }

  componentDidMount() {
    this._isMounted = true;
    const headerHeight = document.querySelector("#header").clientHeight;
    document.addEventListener("scroll", event => {
      if(this._isMounted) {
        if (window.scrollY > headerHeight) {
          this.setState({
            cardPositionFixed: true,
            headerHeight
          });
        } else {
          this.setState({ cardPositionFixed: false, headerHeight });
        }
      }
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(event); 
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  render() {
    return(
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-12">
          <SearchContainerForm cardPositionFixed={this.state.cardPositionFixed} headerHeight={this.state.headerHeight}>
            <form onSubmit={this.handleSubmit}>
              <TextField
                // fullWidth
                variant="outlined"
                label="Search by Title"
                placeholder="Title"
                margin="dense"
                onChange={(e) => this.handleChange("linkTitle", e)}
              />
              <Button style={{color: "#fff"}} variant="contained" type="submit" color="primary" size="medium">
                <SearchRounded />
                Search
              </Button>
            </form>
          </SearchContainerForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
