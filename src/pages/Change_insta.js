import React from 'react';
import '../style/Change_insta.css'

function Change_insta(){
    return(
        <div className="change">
            <h1 className="signup">인스타그램 계정 변경</h1>
            <h1 className="artist">변경하기 전에</h1>
            <hr className="first"></hr>
            <p className="insta">* 인스타그램에서 변경하려는 계정으로 로그인 한 후에 
            <br /> &nbsp;&nbsp; 변경해주세요.</p>
            <img src="img/Profile Card@3x.png" alt="" className="profile"></img>
            <p className="under">
                새로운 인스타그램 계정으로 등록하기
                <img src="img/chevrons-down_2021-05-23/chevrons-down@3x.png" alt="" className="down"></img>
            

            </p>
            <a href="https://api.instagram.com/oauth/authorize?client_id=213487120598037&redirect_uri=https://localhost:8443/insta_conn_success&scope=user_profile&response_type=code">
                <img src="img/Button 인스타그램 계정등록 @3x.png" alt="" className="in"></img>
            </a>
        
        </div>
    )
}

export default Change_insta