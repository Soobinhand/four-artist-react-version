import React, { Component } from 'react';
import '../style/editmyprofile.css';
import { Button, IconButton } from '@material-ui/core';
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>

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
                        <div>
                            <img src="img/인스타그램 로고 타원@3x.png" alt="" className="insta"></img>
                            <img src="img/Button(30)-small@3x.png" alt="" className="byun"></img>
                        </div>
                        <hr className="line"></hr>


                        <textarea id="test" name="test" placeholder="간략소개 (최대 100자)" className="intro"></textarea>
         


                    </div>








        
        </div>
    );
}
}

export default Editmyprofile;