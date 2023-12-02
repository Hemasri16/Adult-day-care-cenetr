// NewFoodServiceModal.js
import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewFoodForm from "./Components/Food/NewFoodForm"; // Assuming you have created a NewFoodServiceForm

class NewFoodModal extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    const { create, resetState } = this.props;

    const title = create ? "Creating New Food Service" : "Editing Food Service";

    const button = create ? (
      <Button
        color="primary"
        className="float-right"
        onClick={this.toggle}
        style={{ minWidth: "200px" }}
      >
        Create New
      </Button>
    ) : (
      <Button onClick={this.toggle}>Edit</Button>
    );

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>
            <NewFoodForm resetState={resetState} toggle={this.toggle} />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewFoodModal;
