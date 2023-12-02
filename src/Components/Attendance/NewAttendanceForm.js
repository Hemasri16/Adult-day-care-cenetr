import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { API_URL_ATTENDANCE, API_URL_PARTICIPANT } from "./constantsAttendance";

class NewAttendanceForm extends Component {
  state = {
    id: this.props.attendanceRecord ? this.props.attendanceRecord.id : null,
    location: "",
    participant: this.props.attendanceRecord ? this.props.attendanceRecord.participant : "",
    signin_date: this.props.attendanceRecord ? this.props.attendanceRecord.signin_date : "",
    signin_Time: this.props.attendanceRecord ? this.props.attendanceRecord.signin_time : "",
    sign_out_time: this.props.attendanceRecord ? this.props.attendanceRecord.sign_out_time : "",
    sign_out_date: this.props.attendanceRecord ? this.props.attendanceRecord.sign_out_date : "",
    breakfastAttendance: this.props.attendanceRecord ? this.props.attendanceRecord.breakfastAttendance : "Not given",
    lunchAttendance: this.props.attendanceRecord ? this.props.attendanceRecord.lunchAttendance : "Not given",
    snackAttendance: this.props.attendanceRecord ? this.props.attendanceRecord.snackAttendance : "Not given",
    errorFlag: this.props.attendanceRecord ? this.props.attendanceRecord.errorFlag : false,
    participantOptions: [],
    participantOptions: [],
    lunchAttendance: 'not given',
    breakfastAttendance: 'not given',
    snackAttendance: 'not given',
    locationOptions: ["Location1", "Location2"],
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
  
  
  generateTimeOptions = () => {
    const timeOptions = [];
    for (let hours = 0; hours < 24; hours++) {
      for (let minutes = 0; minutes < 60; minutes += 15) {
        const timeString = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
        timeOptions.push(
          <option key={timeString} value={timeString}>
            {timeString}
          </option>
        );
      }
    }
   
    return timeOptions;
  };

  submitForm = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", this.state);
  
    const {
      id,
      participant,
      signin_date,
      signin_time,
      sign_out_time,
      sign_out_date,
      breakfastAttendance,
      lunchAttendance,
      snackAttendance,
      errorFlag,
    } = this.state;
  
    
  
    const attendanceData = {
      participant,
      signin_date,
      signin_time,
      sign_out_time,
      sign_out_date,
      breakfast_attendance:
      breakfastAttendance === 'accepted'
        ? true
        : breakfastAttendance === 'declined'
        ? false
        : null,
    lunch_attendance:
      lunchAttendance === 'accepted'
        ? true
        : lunchAttendance === 'declined'
        ? false
        : null,
    snack_attendance:
      snackAttendance === 'accepted'
        ? true
        : snackAttendance === 'declined'
        ? false
        : null,
  
    };
  
    console.log("Attendance Data:", attendanceData); // Log the attendance data
  
    try {
      if (id) {
        await axios.put(`${API_URL_ATTENDANCE}${id}/`, attendanceData);
      } else {
        await axios.post(API_URL_ATTENDANCE, attendanceData);
      }
  
      this.props.resetState();
      this.props.toggle();
    } catch (error) {
      console.error("Error creating or updating attendance record:", error);
  
      // Log the Axios error response for debugging
      if (error.response) {
        console.error("AxiosError Response data:", error.response.data);
      }
    }
  };
  
  render() {
    const statusOptions = ["Not given", "Declined", "Accepted"];

    return (
      <Form onSubmit={this.submitForm}>
        <FormGroup>
          <Label for="participant">Participant</Label>
          <Input
            type="select"
            name="participant"
            id="participant"
            onChange={this.onChange}
            value={this.state.participant}
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
          <Label for="signin_date">Sign-In Date</Label>
          <Input
            type="date"
            name="signin_date"
            id="signin_date"
            onChange={this.onChange}
            value={this.state.signin_date}
          />
        </FormGroup>

        <FormGroup>
  <Label for="signin_time">Sign-In Time</Label>
  <Input
    type="select"
    name="signin_time"
    id="signin_time"
    onChange={this.onChange}
    value={this.state.signin_time}
  >
    <option value="">Select a time</option>
    {this.generateTimeOptions()}
  </Input>
</FormGroup>


        {/* Other form fields */}
        <FormGroup>
          <Label for="sign_out_date">Sign-Out Date</Label>
          <Input
            type="date"
            name="sign_out_date"
            id="sign_out_date"
            onChange={this.onChange}
            value={this.state.sign_out_date}
          />
        </FormGroup>

        <FormGroup>
          <Label for="sign_out_time">Sign-Out Time</Label>
          <Input
            type="select"
            name="sign_out_time"
            id="sign_out_time"
            onChange={this.onChange}
            value={this.state.sign_out_time}
          >
          <option value="">Select a time</option>
    {this.generateTimeOptions()}
  </Input>
        </FormGroup>
        
      
        <FormGroup>
          <Label for="breakfastAttendance">Breakfast</Label>
          <Input
            type="select"
            name="breakfastAttendance"
            id="breakfastAttendance"
            onChange={this.onChange}
            value={this.state.breakfastAttendance}
          >
             <option value="accepted">Accepted</option>
                <option value="declined">Declined</option>
                <option value="not given">Not Given</option>
            
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="lunchAttendance">Lunch</Label>
          <Input
            type="select"
            name="lunchAttendance"
            id="lunchAttendance"
            onChange={this.onChange}
            value={this.state.lunchAttendance}
          >
             <option value="accepted">Accepted</option>
                <option value="declined">Declined</option>
                <option value="not given">Not Given</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="snackAttendance">Snack</Label>
          <Input
            type="select"
            name="snackAttendance"
            id="snackAttendance"
            onChange={this.onChange}
            value={this.state.snackAttendance}
          > <option value="accepted">Accepted</option>
          <option value="declined">Declined</option>
          <option value="not given">Not Given</option>
          </Input>
        </FormGroup>

        <Button type="submit">Save</Button>
      </Form>
    );
  }
}

export default NewAttendanceForm;
