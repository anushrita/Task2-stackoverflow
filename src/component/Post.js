import { Avatar } from '@material-ui/core'
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined'
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined'
import ArrowUpwardOutlinedIcon  from '@material-ui/icons/ArrowUpwardOutlined'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined'
import React from 'react'
import '../css/Post.css'

function Post() {
    return (
        <div className = "post">
            <div className = "post__info">
                <Avatar />
                <h5>Username</h5>
                <small>Timestamp</small>
            </div>
            <div className = "post__body">
                <div className = "post__question">
                    <p>Question</p>
                    <button className = "post__btnAnswer">Answer</button>
                </div>
                <div className = "post__answer">
                    <p></p>
                </div>
                <img src = "https://www.webliska.com/wp-content/uploads/2016/12/questions-and-answers.jpg"
                alt = "" />
            </div>
            <div className = "post__footer">
                <div className = "post__footerAction">
                    <ArrowUpwardOutlinedIcon />   
                    <ArrowDownwardOutlinedIcon />
                </div>

                <RepeatOutlinedIcon />
                <ChatBubbleOutlineOutlinedIcon />
                <div className = "post__footerLeft">
                    <ShareOutlinedIcon />
                    <MoreHorizOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Post
