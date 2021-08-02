import React from 'react'
import './StoryReelBig.css';

function StoryReelBig() {
    return (
        <div className='storyreelbig'>

            <div className="storyreelbig_text">
                <p className='storyreelbig_text_text'>양천문화재단</p>
                <img className='storyreelbig_text_img' src="https://cdn.zeplin.io/609bad0ebfc228be481a98d2/assets/D5323EBA-95C9-4B07-8C5D-1854B3550B08.svg" alt="" />
            </div>
            <hr className='storyreelbig_line' />
            <div className="storyreelbig_img">
                <img className='storyreelbig_img_img' src="http://www.onews.tv/news/photo/202106/77112_80278_215.jpg" alt="" />
            </div>
            <div className="storyreelbig_web">
                <button 
                className='storyreelbig_web_button'
                >
                        <p>
                        웹사이트에서 보기
                            </p>
                </button>
            </div>
            
               
        </div>
    )
}

export default  StoryReelBig
