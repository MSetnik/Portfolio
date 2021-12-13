import React, { useEffect, useState } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./routes/main";
import { Link, useLocation } from "react-router-dom";
import fire from "./firebase";

import hr from './assets/hr.png'

const App = () => {
  const [loc, setLoc] = useState('HR')
  const location = useLocation()

  const hideToggle = () => {
    const selectorID = document.querySelector(".mdl-layout");
    selectorID.MaterialLayout.toggleDrawer();
  }

  const handleResponse = async () => {
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

  useEffect(() => {
    handleResponse();
    console.log(location)
    

    
    // alert(useLocation())
  
  });

  useEffect(() => {
    setLoc(location.pathname.includes('/en') ? 'ENG' : 'HR');
  }, [location])
 
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-background" title="Portfolio" scroll>
          <Navigation>
            <Link to={location.pathname.includes('/en') ? "/en" : '/'}>{location.pathname.includes('/en') ? 'Home' : 'Početna'}</Link>
            <Link to={location.pathname.includes('/en') ? "/en/resume" : '/resume'}>{location.pathname.includes('/en') ? 'Resume' : 'Životopis'}</Link>
            <Link to={location.pathname.includes('/en') ? "/en/projects" : '/projects'}>{location.pathname.includes('/en') ? 'Projects' : 'Projekti'}</Link>
            <Link to={location.pathname.includes('/en') ? "/en/contact" : '/contact'}>{location.pathname.includes('/en') ? 'Contact' : 'Kontakt'}</Link>
            <div>|</div>
            <Link to={location.pathname.includes('/en') ? "/" : '/en'} style={{fontSize: 10}}>{location.pathname.includes('/en') ? 'ENG' : 'HR'}</Link>
          </Navigation>
        </Header>
        <Drawer title={location.pathname.includes('/en') ? 'Menu' : 'Izbornik'} className="drawer">
          <Navigation>
            <Link to={location.pathname.includes('/en') ? "/en" : '/'} onClick={() => hideToggle()}>
              {location.pathname.includes('/en') ? 'Home' : 'Početna'}
            </Link>
            <Link to={location.pathname.includes('/en') ? "/en/resume" : '/resume'} onClick={() => hideToggle()}>
              {location.pathname.includes('/en') ? 'Resume' : 'Životopis'}
            </Link>
            <Link to={location.pathname.includes('/en') ? "/en/projects" : '/projects'} onClick={() => hideToggle()}>
              {location.pathname.includes('/en') ? 'Projects' : 'Projekti'}
            </Link>
            <Link to={location.pathname.includes('/en') ? "/en/contact" : '/contact'} onClick={() => hideToggle()}>
             {location.pathname.includes('/en') ? 'Contact' : 'Kontakt'}
            </Link>
            <Link 
              to={location.pathname.includes('/en') ? "/" : '/en'} 
              style={{fontSize: 10}} 
              onClick={() => hideToggle()}>
                {location.pathname.includes('/en') ? 'ENG' : 'HR'}
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

export default App;
