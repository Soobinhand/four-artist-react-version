import './App.css';
import Header from './Header.js';
import Landingpage from './Landingpage';
import { useStateValue } from './StoryProvider';
import {Route, Router} from 'react-router-dom'

function App() {

  const [{user},dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Landingpage />
      ) : (
        <>
        <Header />


      
          
          
        </>
      )}
    </div>
  );
}

export default App;
