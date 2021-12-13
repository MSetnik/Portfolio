import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

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
            <List>
              <ListItem>
                <ListItemContent
                  className="contact-content"
                  style={{ fontSize: "30px", fontFamily: "Anton"}}
                >

                  <i className="fa fa-phone-square" aria-hidden="true"></i>

                  Na upit
                  

                  </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  className="contact-content"
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  setnik99@gmail.com
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>

      </Grid>
    </div>
  );
}


export default Contact;
