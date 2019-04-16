import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Title from "../Title";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {
      values: { firstName, lastName, email },
      handleChange,
      alert2
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Title name="Enter" title="User Details" />
          <div className="container text-center mb-5">
            <TextField
              hintText="Enter Your First Name"
              floatingLabelText="First Name"
              onChange={handleChange("firstName")}
              defaultValue={firstName}
            />
            <br />
            <TextField
              hintText="Enter Your Last Name"
              floatingLabelText="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={lastName}
            />
            <br />
            <TextField
              hintText="Enter Your Email"
              floatingLabelText="Email"
              onChange={handleChange("email")}
              defaultValue={email}
            />
            <br />

            <RaisedButton
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={
                firstName === "" || lastName === "" || email === ""
                  ? alert2
                  : this.continue
              }
            />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};
export default FormUserDetails;
