// NewAttendanceModal.js
import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewAttendanceForm from "./NewAttendanceForm"; // Assuming you have created a NewAttendanceForm

class NewAttendanceModal extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    const { create, resetState, attendanceRecord } = this.props;

    const title = create ? "Creating New Attendance" : "Editing Attendance";

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
            <NewAttendanceForm
              resetState={resetState}
              toggle={this.toggle}
              attendanceRecord={attendanceRecord}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewAttendanceModal;
