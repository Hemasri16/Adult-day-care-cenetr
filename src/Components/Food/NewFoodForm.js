import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { API_URL_PARTICIPANT, API_URL_FOOD_SERVICE } from "./constantsFood";

class NewFoodForm extends Component {
  state = {
    participantOptions: [],
    attendance: "",
    serviceType: "breakfast", // Default to breakfast, you can change as needed
    payType: "cash", // Default to cash, you can change as needed
  };

  componentDidMount() {
    axios
      .get(API_URL_PARTICIPANT)
      .then((response) => {
        this.setState({
          participantOptions: response.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching participant options:", error);
      });
  }

  onChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  };

  submitForm = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", this.state);

    const { attendance, serviceType, payType } = this.state;

    const foodServiceData = {
      attendance,
      service_type: serviceType,
      pay_type: payType,
    };

    console.log("Food Service Data:", foodServiceData);

    try {
      await axios.post(API_URL_FOOD_SERVICE, foodServiceData);

      // Additional actions if needed after successful submission

      this.props.resetState();
      this.props.toggle();
    } catch (error) {
      console.error("Error creating food service record:", error);

      // Log the Axios error response for debugging
      if (error.response) {
        console.error("AxiosError Response data:", error.response.data);
      }
    }
  };

  render() {
    return (
      <Form onSubmit={this.submitForm}>
        <FormGroup>
          <Label for="attendance">Participant</Label>
          <Input
            type="select"
            name="attendance"
            id="attendance"
            onChange={this.onChange}
            value={this.state.attendance}
          >
            <option value="">Select a participant</option>
            {this.state.participantOptions.map((participant) => (
              <option key={participant.id} value={participant.id}>
                {participant.name}
              </option>
            ))}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="serviceType">Service Type</Label>
          <Input
            type="select"
            name="serviceType"
            id="serviceType"
            onChange={this.onChange}
            value={this.state.serviceType}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="payType">Payment Type</Label>
          <Input
            type="select"
            name="payType"
            id="payType"
            onChange={this.onChange}
            value={this.state.payType}
          >
            <option value="cash">Cash</option>
            <option value="credit_card">Credit Card</option>
            <option value="debit_card">Debit Card</option>
            {/* Add more payment types as needed */}
          </Input>
        </FormGroup>

        <Button type="submit">Save</Button>
      </Form>
    );
  }
}

export default NewFoodForm;
