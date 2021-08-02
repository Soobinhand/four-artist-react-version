import './App.css';
import Header from './Header.js';
import StoryReelBig from './Home/StoryReelBig';
import Landingpage from './Landingpage';
import { useStateValue } from './StoryProvider';
import { BrowserRouter, Route, Router } from 'react-router-dom';


function App() {

  const [{user},dispatch] = useStateValue();

  return (
    
    <div className="App">
      {!user ? (
        <Landingpage />
      ) : (
        <>
        <StoryReelBig />



      
          
          
        </>
      )}
    </div>
  );
}

export default App;
