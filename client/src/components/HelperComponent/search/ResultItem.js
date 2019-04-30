import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import LinkRounded from "@material-ui/icons/LinkRounded";
import { truncateStringTo } from "../../../functions/helper";

const ResultItemContainer = styled.div`
  padding: 36px 20px;
  width: 100%;
  position: relative;
  h2 {
    font-size: 1em;
    word-break: break-all;
  }
  p {
    font-size: 0.7em;
    margin: 7px 0 4px 0;
  }
  small {
    font-size: 0.7em;
  }
  img {
    width: 20px;
    height: 20px;
    margin-bottom: -6px;
    display: inline-block;
    border-radius: 50%;
  }
  ${props => props.isMain ? `
    box-shadow: 0px 4px 12px rgba(0,0,0,0.16);
    margin: 28px 0;
    border-radius: 12px;
  ` : ""}
`;

const ResultItem = props => {
  return (
  <ResultItemContainer isMain={props.isMain}>
    <div>
      <h2>{props.result.linkTitle}</h2>
      <p>{truncateStringTo(props.result.url, 50)}</p>
      <small>
        Uploaded by <img src={props.result.userID.avatar} alt="Uploaded by"/> {props.result.userID.username}
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
  </ResultItemContainer>
)}

export default ResultItem;
