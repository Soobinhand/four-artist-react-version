import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import Home from './Home';
import { useState } from 'react';
import Community from './Community';

function Header(){

    const [comp, setComp] = useState();

 

    return(
        <div className="header">

            
            <div className="header__left">
                <img src="https://cdn.zeplin.io/609bad0ebfc228be481a98d2/assets/205F8293-28C8-4D1E-BA74-3D12B733A0C0.png" alt="" />
                <SearchIcon />
            </div>
            
        
            <div className="header__center">

                <div className="header__option"
                onClick={() => setComp(Home)}
                
                >
                    <p>홈</p>
                </div>

                <div className="header__option1"
                onClick={() => setComp(Community)}

                >
                    <p>커뮤니티</p>
                </div>

                <div className="header__option2">
                    <p>팀 채널</p>
                </div>

                <div className="header__option3">
                    <p>알림</p>
                </div>

                <div className="header__option4">
                    <p>MY</p>
                </div>

            </div>
            <main children={comp} />
          
        </div>
                
    )
}

export default Header