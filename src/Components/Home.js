import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import face from '../img/face.png'

class Home extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='Homepage'>
                    <Cell col={12}>
                        <img
                          src={face}
                          alt="avatar"
                          className='face'
                        />
                        <div className='banner'>
                            <h1>Yiwen Tang</h1>
                            <hr></hr>
                            <p>Master of Science in Data Science at University of Pennsylvania</p>
                            <p>Python | Java | Javascript | HTML/CSS | React | Node.js | MySQL | MongoDB</p>
                            <div className='social'>
                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/yiwen-tang-nb">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                {/*Github*/}                           
                                <a href="https://github.com/tonytang731">
                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                {/*Kaggle*/}                           
                                <a href="https://www.kaggle.com/tonytang731">
                                    <i class="fa fa-table" aria-hidden="true"></i>
                                </a>
                                {/*Soundcloud*/}                            
                                <a href="https://soundcloud.com/yiwen-tang-514137556">
                                    <i class="fa fa-soundcloud" aria-hidden="true"></i>
                                </a>
                            </div> 
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;