




import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ParticipantList from "./Participants/ParticipantList";
import NewParticipantModal from "./Participants/NewParticipantModal";
import axios from "axios";
import { API_URL_PARTICIPANT } from "../constants";
import DriversList from "./Drivers/DriversList";
import AttendanceList from "./Attendance/AttendanceList";

class Home extends Component {
  state = {
    participants: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getParticipants = () => {
    axios.get(API_URL_PARTICIPANT).then((res) => this.setState({ participants: res.data }));
  };

  resetState = () => {
    this.getParticipants();
  };

  render() {
    return (
      <Container fluid>
        <Row>
          {/* Left Side Navigation */}
          <Col md="2" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <h3 style={{ padding: "20px", textAlign: "center" }}></h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ padding: "10px", textAlign: "center" }}>
                <a href="#participants" onClick={() => this.resetState()}>
                  Participants
                </a>
                
              </li>
              <li style={{ padding: "10px", textAlign: "center" }}>
                <a href="#drivers" onClick={() => this.resetState()}>
                  Drivers
                </a>
                
              </li>

              <li style={{ padding: "10px", textAlign: "center" }}>
                <a href="#locations" onClick={() => this.resetState()}>
                  Locations
                </a>
                
              </li>
              <li style={{ padding: "10px", textAlign: "center" }}>
                <a href="#attendancetracking" onClick={() => this.resetState()}>
                  AttendanceTracking
                </a>
                
              </li>
              <li style={{ padding: "10px", textAlign: "center" }}>
                <a href="#Transportation Tracking" onClick={() => this.resetState()}>
                  Transportation Tracking
                </a>
                
              </li>
              {/* Add more navigation links if needed */}
            </ul>
          </Col>

          {/* Main Content */}
          <Col md="10" style={{ padding: "20px" }}>
            
            {/* Render the ParticipantList component */}
            {window.location.hash === "#participants" && (
              <ParticipantList participants={this.state.participants} resetState={this.resetState} />
            )}

            {/* Render the NewParticipantModal component */}
            {/* Render the DriversList component */}
{window.location.hash === "#drivers" && (
  <DriversList drivers={this.state.drivers} resetState={this.resetState} />
)}


{window.location.hash === "#attendancetracking" && (
  <AttendanceList attendancetracking={this.state.attendancetracking} resetState={this.resetState} />
)}

           
        
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
