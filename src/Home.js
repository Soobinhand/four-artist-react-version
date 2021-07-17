import React from 'react'
import './Home.css';
import StoryReel from './StoryReel';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import StoryReel2 from './StoryReel2';

function Home() {
    



    return (
        <div className='home'>
               <StoryReel />
               <div className="home__4rt">
                    <h1>4RT</h1>
                    <ChevronRightIcon />
               </div>
               <StoryReel2 />


        </div>
    )
}

export default Home
