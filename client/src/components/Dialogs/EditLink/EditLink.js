import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ModelContainer from "./ModelContainer";
import { clearErrors } from "../../../actions/errorAction";
import { dialogAction } from "../../../actions/appStateAction";
import { setEditLink, editLink } from "../../../actions/linkAction";

class EditLinkModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editLink: this.props.link.editLink
    };
  }

  handleOnChange = (name, value) =>
    this.setState({
      editLink: {
        ...this.state.editLink,
        [name]: value
      }
    });

  handleSubmit = event => {
    event.preventDefault();
    this.props.editLink(this.state.editLink);
  };

  render() {
    const { editLink } = this.state;
    const { clearErrors, appState, dialogAction, setEditLink } = this.props;

    return (
      <Modal
        closeAfterTransition={true}
        BackdropProps={{ transitionDuration: 300 }}
        open={appState.editLinkDialogOpen}
        onClose={() => {
          clearErrors();
          setEditLink({});
          dialogAction("editLinkDialogOpen", false);
        }}
      >
        <ModelContainer
          editLink={editLink}
          onChange={(name, value) => this.handleOnChange(name, value)}
          // handleTagChange={(tag, tagState) => this.handleTagChange(tag, tagState)}
          handleSubmit={this.handleSubmit}
        />
      </Modal>
    );
  }
}

EditLinkModel.propTypes = {
  appState: PropTypes.object.isRequired,
  link: PropTypes.object.isRequired,
  dialogAction: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  appState: state.appStateReducer,
  link: state.linkReducer
});

export default connect(
  mapStateToProps,
  { clearErrors, dialogAction, editLink, setEditLink }
)(EditLinkModel);
