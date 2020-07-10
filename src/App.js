import React, {Component} from 'react';
import './App.css';
//import Components from React MDL
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import Main from './Components/main.js';
import { Link, BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="demo-big-content">
          <Layout>
              <Header title="Title" scroll>
                  <Navigation>
                      <Link to="/cv">Curriculum Vitae</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <Link to="/">Link</Link>
                      <Link to="/">Link</Link>
                      <Link to="/">Link</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
