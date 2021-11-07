import React from "react";
import { Grid, Cell } from "react-mdl";
import ContactForm from "../components/organisms/contact-form";

const Contact = () => {
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
            Zainteresirani za suradnju? Kontaktirajte me!
          </p>
        </Cell>
        <Cell className="contact-cell" col={6}>
          <h2>Kontakt</h2>
          <hr />

          <div className="contact-list">
            <ContactForm />
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Contact;
