import React, { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home'
import FeaturedPlayListOutlinedIcon  from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, Button, Input } from '@material-ui/core';
import Modal from 'react-modal';
import "../css/Navbar.css";
import { EmojiFoodBeverageOutlined, ExpandMore } from '@material-ui/icons';
import LinkIcon from '@material-ui/icons/Link';
import img from './edvoid.png';
function Navbar() {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className = "stack__header">
           <div className = "stackHeader__logo">
             <img src = {img}
             alt = "" 
             /> 
           </div>
           <div className = "stackHeader__icons">
               <div className = "stackHeader__icon">
                   <HomeIcon />
               </div>
               <div className = "stackHeader__icon">
                   <FeaturedPlayListOutlinedIcon />
                </div>
                <div className = "stackHeader__icon">
                   <AssignmentIndOutlinedIcon />
               </div>
               <div className = "stackHeader__icon">
                   <PeopleAltOutlinedIcon />
               </div>
               <div className = "stackHeader__icon">
                   <NotificationsOutlinedIcon />
               </div>
           </div>
           <div className = 'stackHeader__input'>
                <SearchIcon />
                <input type = "text" placeholder = "Search Question" />
           </div>
           <div className = "stackHeader__rem">
               <div className = "stackHeader__avatar">
                   <Avatar />
               </div>
               <Button onClick = {() => setOpenModal(true)}>Add a Question</Button>
               <Modal 
               isOpen = {openModal}
               onRequestClose = {() => setOpenModal(false)}
               shouldCloseOnOverlayClick = {false}
               style = {{
                   overlay:{
                    width:   700,
                    height:  600, 
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    zIndex: "1000",
                    top: "50%", 
                    left: "50%",
                    marginTop: "-300px", 
                    marginLeft: "-350px"
                },
                }}
               >
                   <div className = "modal__title">
                       <h5>Add Questions &nbsp;&nbsp;&nbsp; Share Link </h5>
                       <div className = "modal__info">
                           <Avatar className = "avatar"/>
                            <p>Username</p>
                            <div className = "modal__scope">
                                <PeopleAltOutlinedIcon />
                               <p>Public</p> 
                               <ExpandMore />
                            </div>
                       </div>
                       <div className = "modal__Field">
                           <Input
                           type = "text"
                           placeholder = "Type your Question"/>
                       </div>
                       {/* <div className = "modal__fieldLink">
                           <LinkIcon />
                           <Input  
                           type = "text"
                           placeholder = "Optional: Include a link if you have one"/>
                       </div> */}
                       <div className = "modal__buttons">
                        <button className = "cancel" onClick = {() => setOpenModal(false)}>
                            Cancel   
                        </button> 
                        <button type ="submit " className = "add">Add question </button>  
                       </div>
                       
                   </div>
               </Modal>
           </div>
        </div>
    )
}

export default Navbar;
