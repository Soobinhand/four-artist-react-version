import React from 'react'
import './Artist_Up.css';

function Artist_Up() {
    return (
        <div className='artist_up'>
            <img src="https://cdn.zeplin.io/609bad0ebfc228be481a98d2/assets/65BD1520-BE29-4808-B45F-54305D33E2AA.png" alt="" className="artist_up_img1" />
            <p className='artist_up_text1'>아티스트 회원 등업</p>
            <p className='artist_up_text2'>게시글을 작성해보세요</p>
            <p className="artist_up_text3">* 4rtist는 회원 등급제로 운영됩니다.</p>
            <p className="artist_up_text4">Q. 아티스트 회원은 무엇이 다른가요?</p>
            <p className="artist_up_text5">: 아티스트 회원은 인스타그램을 통해 다른 아티스트의 활동을 보고 직접 연락을 할 수 있습니다. 이외에도 추후 업데이트된 기능을 모두 사용하실 수 있습니다.</p>
            <p className="artist_up_text3">Step. 1</p>
            <p className="artist_up_text6">가입인사</p>
            <p className="artist_up_text5">:4rtist 회원들에게 자신을 소개해주세요.</p>
            <img src="https://cdn.zeplin.io/609bad0ebfc228be481a98d2/assets/4E32FBCB-E0D7-48DF-83AF-DF8A28308017.png" alt="" className="artist_up_img2" />
            <button className='artist_up_btn1'>가입인사 글쓰기</button>
            <p className="artist_up_text3">Step. 2</p>
            <p className="artist_up_text6">게시글 하나 더 작성</p>
            <p className="artist_up_text5">관심 주제 별 커뮤니티에서 게시글을 작성해보세요.</p>
            
            
            <img src="img/artist_up.PNG" alt="" className='artist_up_capture' />
            <p className="artist_up_text3">Step. 3</p>
            <p className="artist_up_text6">등업 신청하기</p>
            <p className="artist_up_text5">모두 완료하셨나요?</p>
            <button className='artist_up_btn2'>등업 신청</button>

       
       
            <div className="gongbak"></div>
       
       
       
        </div>
    )
}

export default Artist_Up
