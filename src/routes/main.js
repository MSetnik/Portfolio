import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../scenes/landingpage";
import Contact from "../scenes/contact";
import Projects from "../scenes/projects";
import Resume from "../scenes/resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Main;
