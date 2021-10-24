import { useState, useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthProvider';
import './App.css';
import Header from './components/Header/Header';
// import SearchResult from './components/Searchresults/SearchResult';
import Loginpage from './Pages/Loginpage/Loginpage';
import Signuppage from './Pages/Singuppage/Signuppage';
import Homepage from './Pages/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './Firebase';

function App() {
  const auth = getAuth();
  const [searchResult, setSearchResult] = useState(null);
  const { setIsLoggedin } = useContext(AuthContext);

  useEffect(() => {
    // on refresh word firebase gechecked op een user
    onAuthStateChanged(auth, (user) => {
      // wanneer true, context wordt op true gezet
      if (user) {
        setIsLoggedin(true);
        // wanneer false, context wordt op false gezet
      } else {
        setIsLoggedin(false);
      }
    });
  }, []);

  return (
    <div>
      <Header setSearchResult={setSearchResult} />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/login'>
          <Loginpage />
        </Route>
        <Route path='/signup'>
          <Signuppage />
        </Route>

        {/* <SearchResult searchResult={searchResult} /> */}
      </Switch>
    </div>
  );
}

export default App;
