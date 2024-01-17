import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import ContactFormEn from "../../components/organisms/contact-form-en";
import avatar from "../../assets/avatar.png";

const ContactEn = () => {
	return (
		<div className="contact-body">
			<Grid className="contact-grid">
				<Cell
					className="contact-cell"
					col={6}
					data-aos="fade-right"
					data-aos-duration="2000"
					id="startAnim"
				>
					<h2>Matko Setnik</h2>
					<h4>Frontend mobile developer</h4>
					<img
						src={avatar}
						alt="avatar"
						style={{ height: "250px", paddingBottom: "2em" }}
					/>

					<p stlye={{ width: "75%", margin: "auto" }}>
						In search for an app? Contact me!
					</p>
				</Cell>
				<Cell
					className="contact-cell"
					col={6}
					data-aos="fade-left"
					data-aos-duration="2000"
					data-aos-anchor="#startAnim"
				>
					<h2>Contact</h2>
					<hr />

					<div className="contact-list">
						<ContactFormEn label='Send' />
					</div>
				</Cell>
			</Grid>
		</div>
	);
};

export default ContactEn;
