import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/StackBox.css'
function StackBox() {
    return (
        <div className = "stackBox">
            <div className = "stackBox__info">
                <Avatar />
                <h5>Username</h5>
            </div> 
            <div className = "stackBox__stack">
                <p>What is your Question?</p>
            </div>   
        </div>
    )
}

export default StackBox
