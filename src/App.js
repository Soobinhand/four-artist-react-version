import './App.css';
import Feed from './Feed';
import Header from './Header.js';
import Landingpage from './Landingpage';
import Sidebar from './Sidebar';
import { useStateValue } from './StoryProvider';
import Widgets from './Widgets';

function App() {

  const [{user},dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Landingpage />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
