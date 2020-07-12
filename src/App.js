import React, {Component} from 'react';
import './App.css';
//import Components from React MDL
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import Main from './Components/main.js';
import { Link, HashRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="demo-big-content">
          <Layout>
              <Header className='header_color' title="Pages" scroll>
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/cv">Curriculum Vitae</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                  </Navigation>
              </Header>
              <Drawer title="Pages">
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/cv">Curriculum Vitae</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
      </div>
    </HashRouter>
    );
  }
}

export default App;
