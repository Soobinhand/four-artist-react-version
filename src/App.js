import React from 'react';
import './App.css';
import Q from './pages/Editmyprofile'
//js 파일 자체를 import 뒤에 있는 이름으로 가져온거임 그저.
//중요한 건 어디서 뭘 가져오냐지, 저 별명 즉 이름은 중요하지 않아.
//저 js 파일을 이런 이름으로 가져오겠다는 것임.

//컴포넌트 만들어도 index.js는 현재 Landing만을 가지고 있어서 아무 영향이 없음.
function App(){

  return (
    <div className="App">
      <Q />
    </div>
  )
  

}
export default App;
