import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";

import RaisedButton from "material-ui/RaisedButton";
import Title from "../Title";

export class FormPersonalDetails extends Component {
  back = e => {
    e.preventDefault();

    this.props.prevStep();
  };

  alert1 = () => {
    alert(`Passwords Don't Match!`);
  };
  continue = e => {
    e.preventDefault();
    //PROCESS FORM//
    this.props.nextStep();
  };
  render() {
    const {
      values: { firstName, lastName, email }
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Title name="Confirm" title="User Details" />
          <div className="container text-center my-5">
            <List>
              <ListItem primaryText="First Name" secondaryText={firstName} />
              <ListItem primaryText="Last Name" secondaryText={lastName} />
              <ListItem primaryText="Email" secondaryText={email} />
            </List>
            <RaisedButton
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
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
