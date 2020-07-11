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
                            <p>Python | Java | Javascript | HTML/CSS | React | Node.js | MySQL | MongoDB</p>
                            <div className='social'>
                                {/*LinkedIn*/}
                                <a href="https://google.com">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                {/*Github*/}                           
                                <a href="https://google.com">
                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                {/*Soundcloud*/}                            
                                <a href="https://google.com">
                                    <i class="fa fa-soundcloud-square" aria-hidden="true"></i>
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