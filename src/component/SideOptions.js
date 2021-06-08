import { Add } from '@material-ui/icons';
import React from 'react';
import '../css/SideOptions.css';
function SideOptions() {
    return (
        <div className = "sidebarOptions">
            <div className = "sidebarOption">
                <img src = "https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
                alt = ""
                />
                <p>History</p>
            </div>
            <div className = "sidebarOption">
                <img src = "https://qphs.fs.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg "
                alt = ""
                />
                <p>Education</p>
            </div>
            <div className = "sidebarOption">
                <img src = "https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg "
                alt = ""
                />
                <p>Technology</p>
            </div>
            <div className = "sidebarOption">
                <img src = "https://qphs.fs.quoracdn.net/main-thumb-t-1140-100-24q3tiv4WhPssc5TGwf0mvCM5aiqGVXW.jpeg "
                alt = ""
                />
                <p>Health</p>
            </div>
            <div className = "sidebarOption">
                <img src = "https://qphs.fs.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg "
                alt = ""
                />
                <p>Science</p>
            </div>
            <div className = "sidebarOption">
                <img src = "https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
                alt = ""
                />
                <p>Music</p>
            </div>
            <div className = "sidebarOption">
                <img src = "https://qphs.fs.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg"
                alt = ""
                />
                <p>Cooking</p>
            </div>
            <div className = "sidebarOption">
                <img src = "https://qphs.fs.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg"
                alt = ""
                />
                <p>Psychology</p>
            </div>
            <div className = "sidebarOption">
                <Add />
                <p className = "text">Add Your Topic</p>
            </div>
        </div>
    )
}

export default SideOptions
