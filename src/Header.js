import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';

function Header(){
    return(
        <div className="header">
            <div className="header__left">
                <img src="img/로고컬러@3x.png" alt="" />
                <SearchIcon />

            </div>
            
        

            <div className="header__center">
                <div className="header__option
                header__option--active">
                    <h1>홈</h1>
                </div>
                <div className="header__option
                header__option--active">  
                              <h1>커뮤니티</h1>
                </div>
                <div className="header__option
                header__option--active">           
                     <h1>팀 채널</h1>
                </div>
                <div className="header__option
                header__option--active">     
                           <h1>알림</h1>
                </div>
                <div className="header__option
                header__option--active">         
                       <h1>MY</h1>
                </div>
            </div>


         
        </div>
                
    )
}

export default Header