import React, { Component } from "react";
import { connect } from 'react-redux'; 
import PropTypes from "prop-types";
import { Card } from "./styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addLink } from "../../actions/linkAction";

class AddLink extends Component {
  state = {
    url: "",
    linkTitle: "",
  }
  handleChange = (name, event) => {
    this.setState({ [name]: event.target.value })
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.addLink(this.state);
  }

  render() {
    return <Card className="px-3">
      <form onSubmit={this.handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          id="addlink"
          label="URL Title"
          placeholder="Title"
          margin="dense"
          onChange={(e) => this.handleChange("linkTitle", e)}
        />
        <TextField
          fullWidth
          variant="outlined"
          id="addlink"
          label="URL"
          placeholder="URL"
          margin="dense"
          onChange={(e) => this.handleChange("url", e)}
        />
        <Button type="submit" style={{ borderRadius: 10, marginTop: 12 }} variant="outlined" color="secondary" fullWidth>
          Add
        </Button>
      </form>
    </Card>
  }
}

AddLink.propTypes = {
  addLink: PropTypes.func.isRequired
}

const mapStateToprops = state => ({

});

export default connect(mapStateToprops, { addLink })(AddLink);
