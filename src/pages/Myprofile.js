import React from 'react'
import '../style/Myprofile.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

function Myprofile(){
    return(
        <div className="Myprofile">
            <div className="back">
                <ArrowBackIosIcon />
                <h1>마이 프로필</h1>
               

            </div>
           {/* 하단 바 만들기*/}
           <div className="header__center">
                    <div className="header__option">
                        <HomeIcon fontSize="larger"/>
                    </div>
                    <div className="header__option">
                        <FlagIcon fontSize="larger"/>
                    </div>
                    <div className="header__option">
                        <SupervisedUserCircleIcon fontSize="large"/>

                    </div>
                    <div className="header__option">
                        <StorefrontIcon fontSize="larger" />
                    </div>
                    <div className="header__option">
                         <SubscriptionsIcon fontSize="larger"/>
                    </div>
                </div>
                {/* 하단 바 만들기*/}
        </div>
    )
}

export default Myprofile