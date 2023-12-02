import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { API_URL_PARTICIPANT } from "../constants";

class NewParticipantForm extends Component {
  state = {
    id: this.props.participant ? this.props.participant.id : null,
    name: this.props.participant ? this.props.participant.name : "",
    billing_type: this.props.participant ? this.props.participant.billing_type : "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitForm = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", this.state);
  
    // Form validation can be added here
  
    const { id, name, billing_type } = this.state;
    const participantData = { name, billing_type };
  
    try {
      if (id) {
        // Update participant
        await axios.put(`${API_URL_PARTICIPANT}${id}/`, participantData);
      } else {
        // Create new participant
        await axios.post(API_URL_PARTICIPANT, participantData);
      }
  
      // Notify the parent to refresh the participant list
      this.props.resetState();
      this.props.toggle(); // Close the modal
    } catch (error) {
      console.error('Error creating or updating participant:', error);
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
        <FormGroup>
          <Label for="billing_type">Billing Type</Label>
          <Input
            type="text"
            name="billing_type"
            id="billing_type"
            onChange={this.onChange}
            value={this.state.billing_type}
          />
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form>
    );
  }
}

export default NewParticipantForm;
