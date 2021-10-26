// REACT
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// CSS
import './App.css';

// PAGES
import Header from './components/Header/Header';
import SearchResultpage from './Pages/Searchresultspage/SearchResultpage';
import Loginpage from './Pages/Loginpage/Loginpage';
import Signuppage from './Pages/Singuppage/Signuppage';
import Homepage from './Pages/Homepage/Homepage';
import WeatherInfopage from './Pages/Weatherinfopage/WeatherInfopage';

// FIREBASE

function App() {
  const [searchResult, setSearchResult] = useState(null);
  const [spotID, setSpotID] = useState(null);

  // state in local storage plaatsen
  localStorage.setItem('searchresult', JSON.stringify(searchResult));
  localStorage.setItem('spotID', JSON.stringify(spotID));

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
        <Route path='/searchresult'>
          <SearchResultpage
            setSpotID={setSpotID}
            spotID={spotID}
            searchResult={searchResult}
          />
        </Route>
        <Route path='/weatherinfo'>
          <WeatherInfopage spotID={spotID} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
