
// DeleteAttendance.js

import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import axios from "axios";
import { API_URL_ATTENDANCE } from "./constantsAttendance"; // Adjust the import as needed

class DeleteAttendance extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState((previous) => ({
      modal: !previous.modal,
    }));
  };

  deleteAttendance = (attendanceId) => {
    console.log(`Deleting attendance with ID: ${attendanceId}`);
    axios
      .delete(`${API_URL_ATTENDANCE}${attendanceId}/`)
      .then((response) => {
        this.props.onDelete(attendanceId); // Call onDelete handler
        this.toggle();
      })
      .catch((error) => {
        console.error(`Error deleting attendance: ${error}`);
      });
  };

  render() {
    return (
      <Fragment>
        <Button color="danger" onClick={this.toggle}>
          Remove Attendance
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Do you really want to delete this attendance record?
          </ModalHeader>

          <ModalFooter>
            <Button type="button" onClick={this.toggle}>
              Cancel
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={() => this.deleteAttendance(this.props.attendanceId)}
            >
              Yes
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default DeleteAttendance;
