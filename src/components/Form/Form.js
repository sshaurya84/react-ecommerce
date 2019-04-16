import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class Form extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",

    password: "",
    confirmPassword: ""
  };

  //next step

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  alert2 = () => {
    alert("Please Fill all the fields!");
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    } = this.state;
    const values = {
      step,
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    };
    switch (step) {
      case 1:
        return (
          <h1>
            <FormUserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
              alert2={this.alert2}
            />
          </h1>
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            alert2={this.alert2}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            values={values}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return <Success values={values} />;
    }
  }
}

export default Form;
