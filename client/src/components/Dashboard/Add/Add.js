import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AddLinkModal from "../../Dialogs/AddLink/AddLinkModal";
import { dialogAction } from "../../../actions/appStateAction";

const AddLink = props => {
  const { dialogAction } = props;
  return (
    <React.Fragment>
      <Fab
        color="secondary"
        aria-label="Add"
        onClick={() => dialogAction("addLinkDialogOpen", true)}
        style={{ position: "fixed", left: "50%", bottom: 24, transform: "translateX(-50%)" }}
      >
        <AddIcon />
      </Fab>
      <AddLinkModal />
    </React.Fragment>
  );
};

AddLink.propTypes = {
  dialogAction: PropTypes.func.isRequired
};

export default connect(
  null,
  { dialogAction }
)(AddLink);
