import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import AttendanceList from "./Attendance/AttendanceList"; // Assuming you have an AttendanceTrackingList component
import NewAttendanceModal from "./Attendance/NewAttendanceModal"; // Assuming you have a NewAttendanceTrackingModal component

import axios from "axios";
import { API_URL_ATTENDANCE } from '../constantsAttendance';
// Adjust the API URL for Attendance Tracking

class Home extends Component {
  state = {
    attendanceRecords: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getAttendanceRecords = () => {
    axios.get(API_URL_ATTENDANCE).then((res) => this.setState({ attendanceRecords: res.data }));
  };

  resetState = () => {
    this.getAttendanceRecords();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <AttendanceList attendanceRecords={this.state.attendanceRecords} resetState={this.resetState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewAttendanceModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
