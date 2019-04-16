import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";

import Title from "../Title";

export class FormPersonalDetails extends Component {
  render() {
    const {
      values: { email }
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Title name="Success!" title="" />
          <div className="container text-center my-5">
            Thank you for registering with us, an Email has been sent to :
            <List>
              <ListItem primaryText="" secondaryText={email} />
            </List>
            Please verify your Email.
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
