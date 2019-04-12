import React from "react";
import Button from "@material-ui/core/Button";
import AddToHomeScreenRounded from "@material-ui/icons/AddToHomeScreenRounded";
import LinkRounded from "@material-ui/icons/LinkRounded";
import { Link } from "react-router-dom";
import { ShowLinkItem } from "../styles";
import A from "../../Button/A";
import { truncateStringTo } from "../../../functions/helper";
import androidShare from "../../../functions/androidShare";
import MenuComponent from "../../Menu/MenuComponent";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpRounded from "@material-ui/icons/ThumbUpRounded";
import ThumbUpOutlined from "@material-ui/icons/ThumbUpOutlined";
import ShareRounded from "@material-ui/icons/ShareRounded";

const Items = props => {
    const { linkTitle, url, _id, date, vote } = props.link;
    let isUserLiked = false;
    let shareLink = {
      linkTitle, url
    }
    vote.users.map(user => {
      console.log(user);
      if(user.userID === props.userID) {
        isUserLiked = true;
        return true;
      }
      return false;
    })
    return (
      <div className="col-md-6 p-2">
      <ShowLinkItem>
        <h4>{linkTitle}</h4>
        <p>{truncateStringTo(url, 100)}</p>
        <div className="show-link-item-btn">
          <A href={url}>
            <Button color="secondary" variant="outlined" size="medium">
              <AddToHomeScreenRounded
                style={{ marginRight: 5, fontSize: 16 }}
              />
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

        <div className="actions">
          <IconButton onClick={() => props.upvote()}>
            {isUserLiked ? <ThumbUpRounded /> : <ThumbUpOutlined />} <p>{vote.up}</p>
          </IconButton>
          <IconButton onClick={() => androidShare(shareLink, () => console.log("API ERR"))}>
            <ShareRounded />
          </IconButton>
        </div>

        <MenuComponent
          date={date}
          _id={_id}
        />
      </ShowLinkItem>
      </div>      
    );
}

export default Items;
