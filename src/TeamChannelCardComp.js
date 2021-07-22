import { Avatar } from '@material-ui/core';
import React from 'react'
import './TeamChannelCardComp.css';

function TeamChannelCardComp({image,bookmark ,title, members, memimg}) {

        return (
        <div className='teamchannelcardcomp'>

            <img src={image} alt="" className="teamchannelcardcomp__bigimg" />
            <img src={bookmark} alt="" className="teamchannelcardcomp__bookmark" />
            <p className='teamchannelcardcomp__title'>{title}</p>
            <p className='teamchannelcardcomp__members'>{members}</p>
            <Avatar src={memimg} />
            
        </div>
    )
}

export default TeamChannelCardComp
