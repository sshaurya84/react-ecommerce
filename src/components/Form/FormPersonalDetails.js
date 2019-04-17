import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Title from "../Title";

export class FormPersonalDetails extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  alert1 = () => {
    alert(`Passwords are empty or Don't Match`);
  };
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const {
      values: { password, confirmPassword }
    } = this.props;
    const { handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Title name="Enter" title="Password" />
          <div className="container text-center mb-5">
            <TextField
              type="password"
              hintText="Enter Password"
              floatingLabelText="Password"
              onChange={handleChange("password")}
              defaultValue={password}
            />
            <br />
            <TextField
              type="password"
              hintText="Confirm Password"
              floatingLabelText="Confirm Password"
              onChange={handleChange("confirmPassword")}
              defaultValue={confirmPassword}
            />
            <br />

            <RaisedButton
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={
                confirmPassword !== password ||
                confirmPassword === "" ||
                password === ""
                  ? this.alert1
                  : this.continue
              }
            />
            <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.back}
            />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    paddingTop: 0,
    margin: 15
  }
};
export default FormPersonalDetails;
