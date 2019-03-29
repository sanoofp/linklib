import React, { Component } from "react";
import { LinkBoxContainer } from "../styles";
import { truncateStringTo } from "../../../functions/helper";
import Button from "@material-ui/core/Button";
import AddToHomeScreenRounded from "@material-ui/icons/AddToHomeScreenRounded";
import LinkRounded from "@material-ui/icons/LinkRounded";
import SpeedDialComponent from './SpeedDialComponent'
import A from "../../Button/A";
import { Link } from "react-router-dom";

class LinkBox extends Component {
  state = { sdOpen: false, sdHidden: false }

  handleVisibility = () => this.setState(state => ({ sdOpen: false, sdHidden: !state.sdHidden }));

  handleClick = () => this.setState(state => ({ sdOpen: !state.sdOpen }));

  handleOpen = () => {
    if (!this.state.sdHidden) {
      this.setState({
        sdOpen: true,
      });
    }
  };

  handleClose = () => this.setState({ sdOpen: false });

  render() {
    const { link } = this.props;
    const { sdHidden, sdOpen } = this.state;
    return <LinkBoxContainer>
      <h3>{link.linkTitle}</h3>
      <input readOnly type="text" value={truncateStringTo(link.url, 55)} id={link._id} />
      <div className="dashboard--links-action">
        
        <div className="dashboard-btns">
          <A href={link.url}><Button color="secondary" variant="outlined" size="medium">
            <AddToHomeScreenRounded style={{ marginRight: 5, fontSize: 16 }} />
            Open link
          </Button></A>
          
          <Link to={`/link/${link._id}`}><Button style={{marginLeft: 8}} color="secondary" variant="outlined" size="medium">
            <LinkRounded style={{ marginRight: 5, fontSize: 16 }} />
            Details
          </Button></Link>
        </div>

        <SpeedDialComponent sdHidden={sdHidden} sdOpen={sdOpen}
          handleClose={this.handleClose}
          handleClick={this.handleClick}
          handleOpen={this.handleOpen}
          link={link}
          copiedMsg={() => console.log("co")}
        />
      </div>
        
    </LinkBoxContainer>
  }
}

export default LinkBox;
