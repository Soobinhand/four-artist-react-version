import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//저기 밑에다가 컴포넌트 이름을 집어넣고 실행해야함.
//그러려면 js 파일에서 컴퍼넌트를 임포트해야함
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




reportWebVitals();
