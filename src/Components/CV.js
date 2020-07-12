import React, { Component } from 'react'
import pdf from '../pdf/Yiwen_CV_Eng.pdf'

class CV extends Component {
    render() {
        return (
            <div className='pdf'>
                <a href = {pdf} target = "_blank" rel="noopener noreferrer">Download Yiwen's CV PDF (English Version) </a> <br></br>
                <a href = {pdf} target = "_blank" rel="noopener noreferrer">Download Yiwen's CV PDF (Chinese Version) </a>
            </div>
        )
    }
}

export default CV;