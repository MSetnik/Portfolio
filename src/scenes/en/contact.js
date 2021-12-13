import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import ContactFormEn from "../../components/organisms/contact-form-en";

const ContactEn = () => {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell className="contact-cell" col={6}>
          <h2>Matko Setnik</h2>
          <h4>Frontend mobile developer</h4>
          <img
            src="https://icon-library.com/images/avatar-icon/avatar-icon-4.jpg"
            alt="avatar"
            style={{ height: "250px", paddingBottom: "2em" }}
          />

          <p stlye={{ width: "75%", margin: "auto" }}>
            In search for an app? Contact me!
          </p>
        </Cell>
        <Cell className="contact-cell" col={6}>
          <h2>Kontakt</h2>
          <hr />
         
          <div className="contact-list">
            <ContactFormEn/>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}


export default ContactEn;
