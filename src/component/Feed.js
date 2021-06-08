import React from 'react'
import '../css/Feed.css'
import Post from './Post'
import StackBox from './StackBox'
function Feed() {
    return (
        <div className = "feed">
             <StackBox /> 
             <Post />
             <Post />
             <Post />
             <Post />
             <Post />
        </div>
    )
}

export default Feed
