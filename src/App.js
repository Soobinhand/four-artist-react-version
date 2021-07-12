import React from 'react';
import './App.css';
import Landingpage from './pages/Landingpage'


//컴포넌트 만들어도 index.js는 현재 Landing만을 가지고 있어서 아무 영향이 없음.
function App(){

  return (
    <div className="App">
      <Landingpage></Landingpage>
    </div>
  )
  

}
export default App;
