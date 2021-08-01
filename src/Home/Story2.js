import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import './Story2.css';

function Story2({image,profileSrc, title}) {

   

    return (
        <div style={{ backgroundImage: `url(${image})`}}
         className="story2"
         >
            <Avatar className="story2__avatar" src={profileSrc} />
            <h4>{title}</h4> 
         
        </div>
    )
}

export default Story2
