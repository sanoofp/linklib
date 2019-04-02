import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { addLink } from "../../../actions/linkAction";
import { AddLinkContainerForm } from '../styles';
import { snackbarToggle } from "../../../actions/appStateAction";

class AddLink extends Component {
  state = {
    url: "",
    linkTitle: "",
    cardPositionFixed: false,
    headerHeight: 100
  }
  _isMounted = false;
  handleChange = (name, event) => {
    this.setState({ [name]: event.target.value })
  }
  handleSubmit = event => {
    event.preventDefault();
    const { url, linkTitle } = this.state;
    if(url === "" || linkTitle === "") {
      this.props.snackbarToggle(true, "Please Enter complete data", "error");
    } else {
      this.props.addLink(this.state);
    }
  }
  componentDidMount() {
    this._isMounted = true;
    const headerHeight = document.querySelector("#header").clientHeight;
    if(navigator.clipboard) {
      navigator.clipboard.readText()
        .then(text => console.log(text))
        .catch(err => console.log(err))
    }
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

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  render() {
    return(
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-12">
          <AddLinkContainerForm cardPositionFixed={this.state.cardPositionFixed} headerHeight={this.state.headerHeight}>
            <form onSubmit={this.handleSubmit}>
              <TextField
                // fullWidth
                variant="outlined"
                label="Link Title"
                placeholder="Title"
                margin="dense"
                onChange={(e) => this.handleChange("linkTitle", e)}
              />
              <TextField
                // fullWidth
                variant="outlined"
                label="Url"
                placeholder="URL"
                margin="dense"
                onChange={(e) => this.handleChange("url", e)}
              />
              <Button style={{color: "#fff"}} variant="contained" type="submit" color="primary" size="medium">
                <AddIcon />
                Add Link
              </Button>
            </form>
          </AddLinkContainerForm>
          </div>
        </div>
      </div>
    );
  }
}

AddLink.propTypes = {
  addLink: PropTypes.func.isRequired,
  snackbarToggle: PropTypes.func.isRequired
}

const mapStateToprops = state => ({

});

export default connect(mapStateToprops, { addLink, snackbarToggle })(AddLink);
