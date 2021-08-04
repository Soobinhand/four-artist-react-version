import './App.css';
import Header from './Header.js';
import StoryReelBig from './Home/StoryReelBig';
import Landingpage from './Landingpage';
import { useStateValue } from './StoryProvider';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Artist_100 from './Home/Artist_100';
import Artist_Up from './Home/Artist_Up';


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
