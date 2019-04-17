import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Title from "../Title";

export class LoginForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { nextStep } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Title name="Login" title="" />
          <div className="container text-center mb-5">
            <TextField
              type="email"
              hintText="Enter Email"
              floatingLabelText="Email"
            />
            <br />
            <TextField
              type="password"
              hintText="Password"
              floatingLabelText="Password"
            />
            <br />
            <label>
              <button type="checkbox" style={styles2.button} />
              <span style={styles2.span}>Remember me</span>
            </label>

            <br />
            <RaisedButton
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles2 = {
  button: {
    padding: 4,
    marginRight: 7,
    marginTop: 0,
    marginBottom: 7
  },
  span: {
    paddingTop: 10,
    marginBottom: 0,
    marginLeft: 2
  }
};
const styles = {
  button: {
    paddingTop: 0,
    margin: 0
  }
};
export default LoginForm;
