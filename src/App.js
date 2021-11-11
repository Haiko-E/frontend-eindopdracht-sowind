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
import Footer from './components/Footer/Footer';

// FIREBASE

function App() {
  const [searchResult, setSearchResult] = useState(null);
  const [spot, setSpot] = useState(null);
  const history = useHistory();

  useEffect(() => {
    history.push('/');
    setSpot(null);
    return () => {};
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Homepage setSpot={setSpot} />
        </Route>
        <Route path='/login'>
          <Loginpage />
        </Route>
        <Route path='/signup'>
          <Signuppage />
        </Route>
        <Route path={`/searchresult/:query`}>
          <SearchResultpage searchResult={searchResult} setSpot={setSpot} />
        </Route>
        <Route path='/weatherinfo/:kitespot'>
          <WeatherInfopage spot={spot} setSpot={setSpot} />
        </Route>
      </Switch>
      <Header setSearchResult={setSearchResult} spot={spot} setSpot={setSpot} />
      <Footer />
    </div>
  );
}

export default App;
