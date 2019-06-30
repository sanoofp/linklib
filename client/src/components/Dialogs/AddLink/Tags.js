import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircleRounded from "@material-ui/icons/AddCircleRounded"
import CloseRounded from "@material-ui/icons/CloseRounded"

class Tags extends Component {
  state = {
    tags: [],
    tag: ""
  }

  handleChange = e => this.setState({ tag: e.target.value });

  handleClick = () => {
    const { tag } = this.state;
    if(tag) {
      this.setState({
        tags: [...this.state.tags, tag],
      }, () => {
        this.props.onTagInputChange(this.state.tags);
        this.setState({ tag: "" })
      });
    }
  }

  deleteTag = unWantedTag => {
    const newTagArr = this.state.tags.filter(tag => tag !== unWantedTag);
    this.setState({
      tags: newTagArr
    }, () => {
      this.props.onTagInputChange(this.state.tags);
    })
  }

  componentDidMount() {
    const { tagsView } = this.props;
    this.setState({
      tags: tagsView
    })
  }

  componentWillUnmount() {
    this.setState({
      tags: [], tag: ""
    })
  }

  render() {
    const { tag, tags } = this.state;
    return (
      <div className="tag-container">
        <TextField
          label="Add Tags"
          type="text"
          // margin="normal"
          className="tag-input"
          value={tag}
          fullWidth
          variant="outlined"
          onChange={this.handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={this.handleClick}>
                <IconButton
                  edge="end"
                  aria-label="Add Tag"
                >
                  <AddCircleRounded color="primary" />
                </IconButton>
              </InputAdornment>
            ),
          }}    
        />

        <div className="applied-tag">
          {tags.length > 0 && tags ? tags.map((tag, index) => <div key={index} className="tag">
            <p>{tag}</p> <IconButton onClick={() => this.deleteTag(tag)}><CloseRounded  style={{fontSize: 12}}/></IconButton>
          </div>) : null}
        </div>
        
      </div>
    )
  }
  
}

export default Tags;