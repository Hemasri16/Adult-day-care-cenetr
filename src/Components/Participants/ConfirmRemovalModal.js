import React, { Fragment } from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import axios from "axios";
import { API_URL_PARTICIPANT } from "../constants";

class ConfirmRemovalModal extends React.Component {
  state = {
    modal: false,
  };

  
  toggle = () => {
    this.setState((previous) => ({
      modal: !previous.modal,
    }));
  };
  deleteParticipant = (pk) => {
    console.log("Deleting participant with pk:", pk);
    axios.delete(`${API_URL_PARTICIPANT}${pk}/`)  // Ensure the trailing slash
      .then(response => {
        this.props.onDelete(pk); // Call onDelete handler 
        this.toggle();
      })
      .catch(error => {
        console.error('Error deleting participant:', error);
      });
  };
  
  
  render() {
    return (
      <Fragment>
        <Button color="danger" onClick={() => this.toggle()}>
          Remove
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Do you really want to delete the participant?
          </ModalHeader>

          <ModalFooter>
            <Button type="button" onClick={() => this.toggle()}>
              Cancel
            </Button>
            <Button type="button" color="primary" onClick={() => this.deleteParticipant(this.props.pk)}>
              Yes
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default ConfirmRemovalModal;
