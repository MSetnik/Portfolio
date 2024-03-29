import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
	render() {
		return (
			<Grid>
				<Cell col={5}>
					<div style={{ display: "flex", justifyContent: "center" }}>
						{this.props.skill}
					</div>
				</Cell>
				<Cell col={7}>
					<div style={{ display: "flex" }}>
						<ProgressBar
							style={{ margin: "auto", width: "75%" }}
							progress={this.props.progress}
						/>
					</div>
				</Cell>
			</Grid>
		);
	}
}

export default Skills;
