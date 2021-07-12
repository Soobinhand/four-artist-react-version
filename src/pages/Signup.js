import React from 'react'
import '../style/signup.css';

function Signup() {
    return(
    <div className="Signup">
        <h1 className="signup">회원가입</h1>
        <h1 className="artist">아티스트 회원</h1>
        <hr className="first"></hr>
        <p className="insta">4RT를 이용하기 위해서 인스타그램 계정을 등록하셔야 합니다.</p>
        <img src="img/Profile Card@3x.png" alt="" className="profile"></img>
        <p className="under">
            인스타그램 계정 등록하고 프로필 작성하기
            <img src="img/chevrons-down_2021-05-23/chevrons-down@3x.png" alt="" className="down"></img>
           

        </p>
        <a href="https://api.instagram.com/oauth/authorize?client_id=213487120598037&redirect_uri=https://localhost:8443/insta_conn_success&scope=user_profile&response_type=code">
            <img src="img/Button 인스타그램 계정등록 @3x.png" alt="" className="in"></img>
        </a>
        
       
        
    </div>
    );

}

export default Signup