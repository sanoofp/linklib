import React, { Component } from "react";
import MoreVertRounded from "@material-ui/icons/MoreVertRounded";
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";
import AddToHomeScreenRounded from "@material-ui/icons/AddToHomeScreenRounded";
import LinkRounded from "@material-ui/icons/LinkRounded";
import { Link } from "react-router-dom";
import { ShowLinkItem } from "../styles";
import A from "../../Button/A";
import { truncateStringTo } from "../../../functions/helper";
import MenuComponent from "./Menu/MenuComponent";

class Items extends Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { linkTitle, url, _id, date } = this.props;
    const { anchorEl } = this.state;
    return <ShowLinkItem>
      <h4>{linkTitle}</h4>
      <p>{truncateStringTo(url, 100)}</p> 
      <div className="show-link-item-btn">
        <A href={url}>
          <Button color="secondary" variant="outlined" size="medium">
            <AddToHomeScreenRounded style={{ marginRight: 5, fontSize: 16 }} />
            Open link
          </Button>
        </A>
        <Link to={`/link/${_id}`}>
          <Button
            style={{ marginLeft: 8 }}
            color="secondary"
            variant="outlined"
            size="medium"
          >
            <LinkRounded style={{ marginRight: 5, fontSize: 16 }} />
            Details
          </Button>
        </Link>
      </div>
      <div className="more-show-link-item">
        <IconButton onClick={this.handleClick}>
          <MoreVertRounded />
        </IconButton>
        <MenuComponent anchorEl={anchorEl} handleClose={this.handleClose} date={date} _id={_id} />
      </div>
    </ShowLinkItem>
  }
};

export default Items;
