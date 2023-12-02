// NewDriverModal.js

import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewDriverForm from "./NewDriverForm"; // Assuming you have created a NewDriverForm

class NewDriverModal extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState((previous) => ({
      modal: !previous.modal,
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Editing Driver";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New Driver";

      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Create New
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewDriverForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              driver={this.props.driver}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewDriverModal;
