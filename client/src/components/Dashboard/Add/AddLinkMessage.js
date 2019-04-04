import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import DoneRounded from "@material-ui/icons/DoneRounded";
import ClearRounded from "@material-ui/icons/ClearRounded";
import { AddLinkMessageContainer } from "../styles";
import { dialogAction, clipboardState } from "../../../actions/appStateAction";

const AddLinkMessage = props => {
  const { clipboard } = props.appState;
  return (
    <Modal open={clipboard.foundUrl} onClose={() => props.clipboardState(false, "", true)}>
      <AddLinkMessageContainer>
        <h4>Found a url in your clipboard</h4>
        <h6>{clipboard.urlFromClipboard}</h6>
        <p>Do you want to save it ?</p>
        <div>
          <Button variant="outlined" color="primary" onClick={() => {
            props.dialogAction("addLinkDialogOpen", true);
            props.clipboardState(false, clipboard.urlFromClipboard);
          }}>
            <DoneRounded style={{ marginRight: 6 }} /> Yes
          </Button>
          <Button
            style={{ marginLeft: 6 }}
            color="secondary"
            onClick={() => props.clipboardState(false, "", true)}
          >
            <ClearRounded style={{ marginRight: 6 }} /> Nope
          </Button>
        </div>
      </AddLinkMessageContainer>
    </Modal>
  );
};

AddLinkMessage.propTypes = {
  dialogAction: PropTypes.func.isRequired,
  clipboardState: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  appState: state.appStateReducer
})

export default connect(
  mapStateToProps,
  { dialogAction, clipboardState }
)(AddLinkMessage);
