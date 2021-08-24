import React from "react";
import { Grid, Cell } from "react-mdl";

const Experience = (props) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Grid>
        <Cell col={4}>
          <p style={{ marginBottom: "-10px" }}>
            {props.startYear} - {props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{props.jobName}</h4>
          <p>{props.jobDescription}</p>
          <div>
            <div>{props.companyName}</div>
            <div>{props.jobPlace}</div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Experience;
