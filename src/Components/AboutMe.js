import React, { Component } from 'react';
import { Grid, Cell, ListItemContent, ListItem, List } from 'react-mdl';
import face from '../img/face.png';

class AboutMe extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Yiwen Tang</h2>
                        <img src={face}
                            alt="avatar"
                            style={{'height':'200px', 'border-radius':'10%', 'paddingTop':'2em'}}>
                        </img>
                        <p style={{ margin:'auto', width:'75%', paddingTop:'2em' }}>
                            My name is Yiwen Tang. I am currently a Master's student of Engineering studying Data Science at University of Pennsylvania. I enjoy coding, listening to lofi hip-hop music, and watching movies. Nice to meet you! 
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Moi</h2>
                        <hr></hr>
                        <List style={{width: '500px', margin:'auto'}}>
                            <ListItem>
                                <ListItemContent style={{fontSize:'20px', fontFamily:'Anton'}}>
                                    <i style={{fontSize:'50px'}} className="fa fa-phone-square"></i>
                                    +1 (336) 918-3479
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'20px', fontFamily:'Anton'}}>
                                    <i style={{fontSize:'50px'}} className="fa fa-envelope"></i>
                                    tonytang0731'at'outlook'dot'com
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default AboutMe;