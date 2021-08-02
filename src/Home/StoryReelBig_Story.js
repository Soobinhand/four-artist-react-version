import React from 'react'
import './StoryReelBig_Story.css';

function StoryReelBig_Story({title, image,web}) {
    return (
        <div className='storyreelbig_story'>
            <div className="storyreelbig_story_text_x">
            <p className='storyreelbig_story_text'>{title}</p>
            <img className='storyreelbig_story_x' src="https://cdn.zeplin.io/609bad0ebfc228be481a98d2/assets/D5323EBA-95C9-4B07-8C5D-1854B3550B08.svg" alt="" />
           
            </div>
            <hr className="storyreelbig_story_line" />
            <img className='storyreelbig_story_img' src={image} alt="" />
            <a href={web}>
            <button
                type="button"
                className='storyreelbig_story_btn'>
                    웹사이트에서 보기
            </button>

            </a>
            
        </div>
    )
}

export default StoryReelBig_Story
