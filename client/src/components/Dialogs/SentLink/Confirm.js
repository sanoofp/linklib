import React from "react";
import Fade from "react-reveal/Fade";
import { ConfirmSentLink } from "../style";
import { faGrimace, faSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';

const Confirm = props => {
  return <Fade bottom distance="20px">
    <ConfirmSentLink>
      <img src={props.toUser.avatar} alt="send" />
      <h2>Send this Link to {props.toUser.username} ?</h2>
      <div>
        <IconButton variant="contained" color="primary" onClick={() => props.sendToUser(props.toUser._id)}>
          <FontAwesomeIcon icon={faSmileBeam} />
          <p>Yep</p>
        </IconButton>
        <IconButton variant="contained" onClick={() => props.cancelConfirmation()}>
          <FontAwesomeIcon icon={faGrimace} />
          <p>Nope</p>
        </IconButton>
      </div>
    </ConfirmSentLink>
  </Fade>
}

export default Confirm;