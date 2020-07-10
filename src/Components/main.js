import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import AboutMe from './AboutMe.js';
import CV from './CV.js';
import Projects from "./Projects.js";

const Main = () => (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cv" component={CV} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/projects" component={Projects} />
        </Switch>
)

export default Main;