import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import LinkRounded from "@material-ui/icons/LinkRounded";
import { truncateStringTo } from "../../../functions/helper";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const ResultItem = props => {
  return (
  <div className="result-item">
    <div>
      <h2>{props.result.linkTitle}</h2>
      <p>{truncateStringTo(props.result.url, 40)}</p>
      <small>
        Uploaded by <Chip 
          avatar={<Avatar src={props.result.userID.avatar} />} 
          label={props.result.userID.username} 
          color="default" 
          variant="outlined" 
        />
      </small>
    </div>
    <div>
      <Link to={`/link/${props.result._id}`}>
        <Button
          color="secondary"
          variant="outlined"
          size="small"
          fullWidth
          style={{marginTop: 16}}
        >
          <LinkRounded style={{ marginRight: 5, fontSize: 16 }} />
          Details
        </Button>
      </Link>
    </div>
  </div>
)}

export default ResultItem;
