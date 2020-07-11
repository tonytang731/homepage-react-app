
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card className="project-cards" shadow={5}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Photogram</CardTitle>
            <CardText>
                •	Reproduced Instagram’s main functionalities and UI with React and UIkit <br></br>
                •	Created branching strategies for project management and tracked issues/user story with Github <br></br>
                •	Conducted unit testing using Jest, functional testing using Selenium and Continuous Integration with Travis CI
            </CardText>
            <CardActions border>
                <a href="https://github.com/tonytang731/Photogram"><Button colored>GitHub</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card className="project-cards" shadow={5}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >foodieCat</CardTitle>
            <CardText>
                •	Provided multiple services that connect the users to great food in the United States, including restaurant recommendations, trip planning, and friend suggestions. <br></br>
                •	Offered guidance for the users to select restaurants of their interest based on their current physical location. <br></br>
                •	Learned the quality of a certain restaurant by viewing its most useful comments and reviews. Besides the functionality contained in most of the crowdsourced review apps <br></br>
                •	Introduced the idea of social media by connecting the users and recommending restaurants based on their mutual preferences and locations <br></br>
            </CardText>
            <CardActions border>
              <a href="https://github.com/Yi-Nung/CIS550_project"><Button colored>GitHub</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card className="project-cards" shadow={5}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Yiwen's HomePage</CardTitle>
            <CardText>
                •	Designed interfaces with React MDL<br></br>
                •	Deployed at Github Pages<br></br>
            </CardText>
            <CardActions border>
                <a href="https://github.com/tonytang731/github-pages-react-app"><Button colored>GitHub</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Python</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is R</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    } else if(this.state.activeTab === 4) {
        return (
          <div><h1>This is MySQL</h1></div>
      )
    } else if(this.state.activeTab === 5) {
        return (
          <div><h1>This is NLP Annotation Service</h1></div>
    )
    }
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Python</Tab>
          <Tab>R</Tab>
          <Tab>MongoDB</Tab>
          <Tab>MySQL</Tab>
          <Tab>NLP Annotation Service</Tab>
        </Tabs>


        <Grid>
            <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
            </Cell>
        </Grid>


      </div>
    )
  }
}

export default Projects;