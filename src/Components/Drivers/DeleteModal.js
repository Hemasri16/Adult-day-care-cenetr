// DeleteModal.js

import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import axios from "axios";
import {API_URL_DRIVER } from "../constants_driver";

class DeleteModal extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState((previous) => ({
      modal: !previous.modal,
    }));
  };

  deleteItem = (pk) => {
    const apiEndpoint = this.props.isDriver ? API_URL_DRIVER : API_URL_PARTICIPANT;

    console.log(`Deleting item with pk: ${pk}`);
    axios
      .delete(`${apiEndpoint}${pk}/`)
      .then((response) => {
        this.props.onDelete(pk); // Call onDelete handler
        this.toggle();
      })
      .catch((error) => {
        console.error(`Error deleting item: ${error}`);
      });
  };

  render() {
    return (
      <Fragment>
        <Button color="danger" onClick={this.toggle}>
          Remove
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Do you really want to delete the item?
          </ModalHeader>

          <ModalFooter>
            <Button type="button" onClick={this.toggle}>
              Cancel
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={() => this.deleteItem(this.props.pk)}
            >
              Yes
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default DeleteModal;
