import React from "react";
import { SentLinkContainer } from "../style";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchRounded from "@material-ui/icons/SearchRounded";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SentLinkMainView = props => <SentLinkContainer>
  <h1>Sent Link to a Linklib user</h1>
  <TextField
    margin="normal"
    label="Username"
    variant="outlined"
    fullWidth
    onChange={e => props.handleOnChange(e.target.value)}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            edge="end"
            aria-label="Toggle password visibility"
            onClick={() => props.searchUsername()}
          >
            <SearchRounded />
          </IconButton>
        </InputAdornment>
      ),
    }}
  />

  {props.users.length > 0 &&
    <div className="sent-link--users">
    <h6>Linklib users:</h6>
      {props.users.map((user, i) => <div key={i} className="sent-link--user-item">
          <img src={user.avatar} alt=""/>
          <p>{user.username}</p>
          <IconButton className="ml-auto" onClick={() => props.confirmSent(user)}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </IconButton>
        </div>
      )}
    </div>
  }

</SentLinkContainer>

export default SentLinkMainView;