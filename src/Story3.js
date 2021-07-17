import React from 'react'
import './Story3.css';

function Story3({image,title, title1}) {
    return (
        <div
         className="story3">
            <img src={image} alt="" />
            <p>{title}</p>  
            <p>{title1}</p>     
        </div>
    )
}

export default Story3
