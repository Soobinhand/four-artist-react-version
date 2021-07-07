import React, { Component } from 'react';
import '../style/editmyprofile.css';

class Editmyprofile extends Component{
    render(){
    return(
        <div className="Ed">
            <h1 className="edit">프로필 편집</h1>
                    <div className="card">
                        <img src="img/Profile Picture@3x.png" alt="" className="profile"></img>
                        <img src="img/bookmark@3x.png" alt="" className="bookmark"></img>
                        <input type="text" placeholder="닉네임" className="nickname"></input>
                        <input type="text" placeholder="#해시태그 (최대 5개)" className="hashtag"></input>
                        <input type="text" placeholder="간략소개" className="intro"></input>
                        <div>
                            <img src="img/인스타그램 로고 타원@3x.png" alt="" className="insta"></img>
                            <img src="img/Button(30)-small@3x.png" alt="" className="byun"></img>
                        </div>

                        <div className="box">
                            <p className="wan">프로필 완료</p>
                        </div>
                        

                    </div>

                    <p className="seol">프로필 설정</p>


            <hr className="uuu"></hr>









        <nav className="navbar">
            


            <ul className="mobile-list">
                
                <a href="./home.html"><li><img src="img/home@3x.png" alt=""></img></li></a>
                <a href="./Artists.html"><li><img src="img/user-plus@3x.png" alt=""></img></li></a>
                <a href="./Business.html"><li><img src="img/briefcase@3x.png" alt=""></img></li></a>
                <a href="./Notification.html"><li><img src="img/icon-Bell@3x.png" alt=""></img></li></a>
                <a href="./Menu.html"><li><img src="img/menu@3x.png" alt=""></img></li></a>
                


            </ul>
        </nav>
        </div>
    );
}
}

export default Editmyprofile;