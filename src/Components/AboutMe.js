import React, { Component } from 'react';
import { Grid, Cell, ListItemContent, ListItemAction, Icon, ListItem, List } from 'react-mdl';
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
                            style={{'height':'200px', 'border-radius':'20%'}}>
                        </img>
                        <p style={{ margin:'auto', width:'75%', paddingTop:'1em' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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