
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
                •	Learned the quality of a certain restaurant by viewing its most useful comments and reviews. <br></br>
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
        <div className="projects-grid">
          {/* Project 1 */}
          <Card className="project-cards" shadow={5}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://www.python.org/static/community_logos/python-powered-h.svg) center / cover'}} >Amazom Review Sentiment Analysis</CardTitle>
            <CardText>
                •	Built multiple machine learning models on text data (One vs. One SVM, One vs. All SVM, Neural Network) <br></br>
                •	Explored the timestamp data and find some interesting trend (exploration and findings related to Year and Month with data visualizations) <br></br>
                •	Constructed our final Neural Network model containing one-hot encoded features enigneered from timestamp (Final Accuracy: 81.14%)
            </CardText>
            <CardActions border>
                <a href="https://github.com/tonytang731/Big-Data-Analytics-Final-Project"><Button colored>GitHub</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card className="project-cards" shadow={5}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://www.python.org/static/community_logos/python-powered-h.svg) center / cover'}} >US Company Public Data Harvasting</CardTitle>
            <CardText>
                •	Analyzed the pattern of the HTML structure and automatically collected data from public websites <br></br>
            </CardText>
            <CardActions border>
                <a href="https://github.com/tonytang731/CompanyDataScraping"><Button colored>GitHub</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card className="project-cards" shadow={5}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://www.python.org/static/community_logos/python-powered-h.svg) center / cover'}} >LeetCode/LintCode Programming</CardTitle>
            <CardText>
                •	Record of my submissions to LeetCode and LintCode coding problems/contests <br></br>
            </CardText>
            <CardActions border>
                <a href="https://github.com/tonytang731/LeetCode-LintCode-Programming/"><Button colored>GitHub</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
          {/* Project 1 */}
          <Card className="project-cards" shadow={5}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://www.r-project.org/logo/Rlogo.svg) center / cover'}} >Amazom Review Sentiment Analysis</CardTitle>
            <CardText>
                •	Published paper on academic journal Statistics and Public Policy and presented at AISC Greensboro, North Carolina; won the best undergraduate presentation award <br></br>
                •	Established over 30 test cases to ensure the effectiveness of the text cleaning procedure <br></br>
                •	Incorporated multiple Machine Learning algorithms and feature extraction techniques in the methodology <br></br>
                •	Designed lexicon-based features which led to an increase in prediction accuracy from 58.25% to 66.75% 
            </CardText>
            <CardActions border>
                <a href="https://github.com/tonytang731/Classifying-Hate-Speech-Using-a-Two-Layer-Model"><Button colored>GitHub</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card className="project-cards" shadow={5}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://www.r-project.org/logo/Rlogo.svg) center / cover'}} >US Company Public Data Harvasting</CardTitle>
            <CardText>
                •	Contributed to the functionality of R packages <a href="https://github.com/twosixcapital/Lego">Lego</a> and <a href="https://github.com/twosixcapital/twosixtools">twosixtools</a> in the topic of momentum chart<br></br>
            </CardText>
            <CardActions border>
                <a href="https://github.com/twosixcapital/Lego"><Button colored>GitHub of Lego</Button></a>
                <a href="https://github.com/twosixcapital/twosixtools"><Button colored>GitHub of twosixtools</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div>          
            {/* Project 1 */}
            <Card className="project-cards" shadow={5}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg) center / cover'}} >Photogram</CardTitle>
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
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg) center / cover'}} >foodieCat</CardTitle>
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
        </div>
      )
    } else if(this.state.activeTab === 4) {
        return (
          <div>
            {/* Project 2 */}
            <Card className="project-cards" shadow={5}>
                <CardTitle style={{color: '#000', height: '236px', background: 'url(https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg) center / cover'}} >foodieCat</CardTitle>
                <CardText>
                    •	Provided multiple services that connect the users to great food in the United States, including restaurant recommendations, trip planning, and friend suggestions. <br></br>
                    •	Offered guidance for the users to select restaurants of their interest based on their current physical location. <br></br>
                    •	Learned the quality of a certain restaurant by viewing its most useful comments and reviews. <br></br>
                    •	Introduced the idea of social media by connecting the users and recommending restaurants based on their mutual preferences and locations <br></br>
                </CardText>
                <CardActions border>
                    <a href="https://github.com/Yi-Nung/CIS550_project"><Button colored>GitHub</Button></a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>
          </div>
      )
    } else if(this.state.activeTab === 5) {
        return (
          <div className="pdf">
              <a style={{'font-size': 'x-large'}} href="http://macniece.seas.upenn.edu:4005/wikify?json=true&text=Helicopters%20will%20patrol%20the%20temporary%20no-fly%20zone%20around%20New%20Jersey%27s%20MetLife%20Stadium%20Sunday,%20with%20F-16s%20based%20in%20Atlantic%20City%20ready%20to%20be%20scrambled%20if%20an%20unauthorized%20aircraft%20does%20enter%20the%20restricted%20airspace.%20Down%20below,%20bomb-sniffing%20dogs%20will%20patrol%20the%20trains%20and%20buses%20that%20are%20expected%20to%20take%20approximately%2030,000%20of%20the%2080,000-plus%20spectators%20to%20Sunday%27s%20Super%20Bowl%20between%20the%20Denver%20Broncos%20and%20Seattle%20Seahawks.%20The%20Transportation%20Security%20Administration%20said%20it%20has%20added%20about%20two%20dozen%20dogs%20to%20monitor%20passengers%20coming%20in%20and%20out%20of%20the%20airport%20around%20the%20Super%20Bowl.%20On%20Saturday,%20TSA%20agents%20demonstrated%20how%20the%20dogs%20can%20sniff%20out%20many%20different%20types%20of%20explosives.%20Once%20they%20do,%20they%27re%20trained%20to%20sit%20rather%20than%20attack,%20so%20as%20not%20to%20raise%20suspicion%20or%20create%20a%20panic.%20TSA%20spokeswoman%20Lisa%20Farbstein%20said%20the%20dogs%20undergo%2012%20weeks%20of%20training,%20which%20costs%20about%20$200,000,%20factoring%20in%20food,%20vehicles%20and%20salaries%20for%20trainers.%20Dogs%20have%20been%20used%20in%20cargo%20areas%20for%20some%20time,%20but%20have%20just%20been%20introduced%20recently%20in%20passenger%20areas%20at%20Newark%20and%20JFK%20airports.%20JFK%20has%20one%20dog%20and%20Newark%20has%20a%20handful,%20Farbstein%20said.">Wikifier API example</a> <br></br>
              <a style={{'font-size': 'x-large'}} href="https://macniece-hegler.seas.upenn.edu/page/demo_view/NESim">Name Entity Similarity example</a>
          </div>
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