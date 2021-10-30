// REACT
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

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
  const [spot, setSpot] = useState(null);
  const history = useHistory();

  useEffect(() => {
    history.push('/');
  }, []);

  // persist on refresh. state blijft in de local storage staan.
  useEffect(() => {
    // state in local storage plaatsen
    if (searchResult && spot) {
      localStorage.setItem('searchresult', JSON.stringify(searchResult));
      localStorage.setItem('spotID', JSON.stringify(spot));
    }
    return () => {
      // setSearchResult(null);
      // setSpotID(null);
    };
  }, [searchResult, spot]);

  console.log(searchResult);
  console.log(spot);

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
        <Route path={`/searchresult/:query`}>
          <SearchResultpage
            searchResult={searchResult}
            setSpot={setSpot}
            spot={spot}
          />
        </Route>
        <Route path='/weatherinfo/:kitespot'>
          <WeatherInfopage spot={spot} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
