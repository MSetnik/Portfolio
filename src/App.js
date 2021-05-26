import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import fire from "./firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nVisitors: 0,
    };

    this.visitorsCounter.bind(this);
    this.handleResponse();
  }

  hideToggle() {
    const selectorID = document.querySelector(".mdl-layout");
    selectorID.MaterialLayout.toggleDrawer();
  }

  visitorsCounter = () => {
    console.log(this.state.nVisitors);
  };

  handleResponse = async () => {
    var visitorsCount;
    var newVisitors;
    const eventref = fire.database().ref("visitors");
    const snapshot = await eventref.once("value");
    const value = snapshot.val();

    visitorsCount = value.visitors_count;

    newVisitors = {
      visitors_count: visitorsCount + 1,
    };

    if (newVisitors != null) {
      eventref.set(newVisitors);
    }

    console.log(
      "Stranicu je posjetilo ukupno " + newVisitors.visitors_count + " osobe"
    );
  };

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-background" title="Portfolio" scroll>
            <Navigation>
              <Link to="/">Početna</Link>
              <Link to="/resume">Životopis</Link>
              <Link to="/projects">Projekti</Link>
              <Link to="/contact">Kontakt</Link>
            </Navigation>
          </Header>
          <Drawer title="Menu" className="drawer">
            <Navigation>
              <Link to="/" onClick={() => this.hideToggle()}>
                Početna
              </Link>
              <Link to="/resume" onClick={() => this.hideToggle()}>
                Životopis
              </Link>
              <Link to="/projects" onClick={() => this.hideToggle()}>
                Projekti
              </Link>
              <Link to="/contact" onClick={() => this.hideToggle()}>
                Kontakt
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
