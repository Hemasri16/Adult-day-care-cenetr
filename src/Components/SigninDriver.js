import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import DriversList from "./Drivers/DriversList"; // Assuming you have a DriversList component
import NewDriverModal from "./Drivers/NewDriverModal"; // Assuming you have a NewDriverModal component

import axios from "axios";

import { API_URL_DRIVER } from "../constants"; // Adjust the API URL for Drivers

class Home extends Component {
  state = {
    drivers: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getDrivers = () => {
    axios.get(API_URL_DRIVER).then((res) => this.setState({ drivers: res.data }));
  };

  resetState = () => {
    this.getDrivers();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <DriversList drivers={this.state.drivers} resetState={this.resetState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewDriverModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
