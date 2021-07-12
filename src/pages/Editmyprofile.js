import React, { Component } from 'react';
import '../style/editmyprofile.css';
import { Button, IconButton } from '@material-ui/core';

class Editmyprofile extends Component{
    render(){
    return(
        <div className="Ed">
            <h1 className="edit">프로필 편집</h1>
                    <div className="card">
                        <IconButton>
                            <img src="img/Profile Picture@3x.png" alt="" className="profile"></img>

                        </IconButton>
                        <Button href="" color="primary" className="wana">
                            완료
                        </Button>

                        
                        <input type="text" placeholder="닉네임" className="nickname"></input>
                        <input type="text" placeholder="#해시태그 (최대 5개)" className="hashtag"></input>
                        <input type="text" placeholder="간략소개" className="intro"></input>
                        <div>
                            <img src="img/인스타그램 로고 타원@3x.png" alt="" className="insta"></img>
                            <img src="img/Button(30)-small@3x.png" alt="" className="byun"></img>
                        </div>
                        <hr className="line"></hr>

                       
                        

                    </div>








        
        </div>
    );
}
}

export default Editmyprofile;