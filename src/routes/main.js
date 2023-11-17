import React from "react";
import { Switch, Route } from "react-router-dom";

//hr
import LandingPage from "../scenes/hr/landingpage";
import Contact from "../scenes/hr/contact";
import Projects from "../scenes/hr/projects";
import Resume from "../scenes/hr/resume";

// eng
import LandingPageEn from "../scenes/en/landingpage";
import ContactEn from "../scenes/en/contact";
import ProjectsEn from "../scenes/en/projects";
import ResumeEn from "../scenes/en/resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />

    <Route exact path="/en/" component={LandingPageEn} />
    <Route path="/en/contact" component={ContactEn} />
    <Route path="/en/projects" component={ProjectsEn} />
    <Route path="/en/resume" component={ResumeEn} />
  </Switch>
);

export default Main;
