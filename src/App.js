import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
// import SearchResult from './components/Searchresults/SearchResult';
import Loginpage from './Pages/Loginpage/Loginpage';

function App() {
  const [searchResult, setSearchResult] = useState(null);

  console.log(searchResult);

  return (
    <div>
      <Header setSearchResult={setSearchResult} />
      <Loginpage />

      {/* <SearchResult searchResult={searchResult} /> */}
    </div>
  );
}

export default App;
