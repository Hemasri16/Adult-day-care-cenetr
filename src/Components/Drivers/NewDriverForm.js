// NewDriverForm.js

import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { API_URL_DRIVER } from "../constants_driver";

class NewDriverForm extends Component {
  state = {
    id: this.props.driver ? this.props.driver.id : null,
    name: this.props.driver ? this.props.driver.name : "",
    other_field: this.props.driver ? this.props.driver.other_field : "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", this.state);

    // Form validation can be added here

    const { id, name, other_field } = this.state;
    const driverData = { name, other_field };

    try {
      if (id) {
        // Update driver
        await axios.put(`${API_URL_DRIVER}${id}/`, driverData);
      } else {
        // Create new driver
        await axios.post(API_URL_DRIVER, driverData);
      }

      // Notify the parent to refresh the driver list
      this.props.resetState();
      this.props.toggle(); // Close the modal
    } catch (error) {
      console.error('Error creating or updating driver:', error);
    }
  };

  render() {
    return (
      <Form onSubmit={this.submitForm}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            onChange={this.onChange}
            value={this.state.name}
          />
        </FormGroup>
        
        <Button type="submit">Save</Button>
      </Form>
    );
  }
}

export default NewDriverForm;
