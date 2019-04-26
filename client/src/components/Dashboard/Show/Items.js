import React from "react";
import Button from "@material-ui/core/Button";
import AddToHomeScreenRounded from "@material-ui/icons/AddToHomeScreenRounded";
import LinkRounded from "@material-ui/icons/LinkRounded";
import { Link } from "react-router-dom";
import { ShowLinkItem } from "../styles";
import A from "../../Button/A";
import { truncateStringTo } from "../../../functions/helper";
// import androidShare from "../../../functions/androidShare";
import MenuComponent from "../../Menu/MenuComponent";
import LockRounded from "@material-ui/icons/LockRounded";
import IconButton from "@material-ui/core/IconButton";


const Items = props => {
    const { linkTitle, url, _id, public_link } = props.link;
    return (
      <div className="col-md-6 p--2">
      <ShowLinkItem>
        <h4>{linkTitle}</h4>
        <p>{truncateStringTo(url, 100)} </p>
        {!public_link && <div className="private"><IconButton><LockRounded /></IconButton> <p>Private Link</p></div>}
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

        <MenuComponent link={props.link} />
      </ShowLinkItem>
      </div>      
    );
}

export default Items;
