import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render () {
    return (
      <Grid>
        <Cell col={4}>
          <p style={{ marginBottom: "-10px" }}>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>

        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription}</p>
          <p>{this.props.schoolWeb}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
