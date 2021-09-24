import React, { useEffect } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./routes/main";
import { Link } from "react-router-dom";
import fire from "./firebase";

const App = () => {
  const hideToggle = () => {
    const selectorID = document.querySelector(".mdl-layout");
    selectorID.MaterialLayout.toggleDrawer();
  };

  const handleResponse = async () => {
    const eventref = fire.database().ref("visitors");
    const snapshot = await eventref.once("value");
    const value = snapshot.val();

    const visitorsCount = value.visitors_count;

    const newVisitors = {
      visitors_count: visitorsCount + 1
    };

    if (newVisitors != null) {
      eventref.set(newVisitors);
    }

    console.log(
      "Stranicu je posjetilo ukupno " + newVisitors.visitors_count + " osobe"
    );
  };

  useEffect(() => {
    handleResponse();
  });

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
            <Link to="/" onClick={() => hideToggle()}>
              Početna
            </Link>
            <Link to="/resume" onClick={() => hideToggle()}>
              Životopis
            </Link>
            <Link to="/projects" onClick={() => hideToggle()}>
              Projekti
            </Link>
            <Link to="/contact" onClick={() => hideToggle()}>
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
};

export default App;
