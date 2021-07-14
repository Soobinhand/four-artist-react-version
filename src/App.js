import './App.css';
import Feed from './Feed';
import Header from './Header.js';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <div className="app__body">
        <Feed />
      </div>
    </div>
  );
}

export default App;
