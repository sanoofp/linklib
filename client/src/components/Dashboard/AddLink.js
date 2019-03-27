import React, { Component } from "react";
import { connect } from 'react-redux'; 
import { Card } from "./styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddLink extends Component {
  render() {
    return <Card className="mt-2 px-3">
      <TextField
        fullWidth
        variant="outlined"
        id="addlink"
        label="Add URL"
        placeholder="URL"
        margin="normal"

      />
      <Button style={{ borderRadius: 10 }} variant="outlined" color="secondary" fullWidth>
        Add
      </Button>
    </Card>
  }
}

const mapStateToprops = state => ({

});

export default connect(mapStateToprops)(AddLink);
