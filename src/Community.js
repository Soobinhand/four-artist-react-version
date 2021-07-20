import React from 'react'
import CAdvertise from './CAdvertise';
import './Community.css';
import CommunityFilter from './CommunityFilter';
import CommunityPost from './CommunityPost';
import PostIcon from './PostIcon';

function Community() {
   
    return (
        <div className='community'>
            <CommunityFilter />
            <CAdvertise />
            <CommunityPost />
            <CommunityPost />
            <CommunityPost />
            <PostIcon />

            <CommunityPost />
            <CommunityPost />

            

            

        </div>
    )
}

export default Community
