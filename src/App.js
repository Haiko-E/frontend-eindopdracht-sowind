import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
// import SearchResult from './components/Searchresults/SearchResult';
import Loginpage from './Pages/Loginpage/Loginpage';
import Signuppage from './Pages/Singuppage/Signuppage';
import Homepage from './Pages/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import app from './Firebase';

function App() {
  const [searchResult, setSearchResult] = useState(null);

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
