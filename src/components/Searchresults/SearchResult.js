import React, { useEffect, useState } from 'react';
import './SearchResult.css';
import location from '../../assets/location.png';
import arrow from '../../assets/right-arrow.png';

const SearchResult = ({ searchResult }) => {
  const [spots, setSpots] = useState('');

  useEffect(() => {
    if (searchResult) {
      const kitespots = searchResult.suggestions.spot;
      const result = kitespots.map((kitespot) => {
        return (
          <div className='searchresult' key={kitespot.id}>
            <img className='searchresult__img' src={location} alt='loc' />

            <div className='searchresult__text'>
              <h4>{kitespot.n}</h4>
              <h5>Spot bevind zich in {kitespot.c}</h5>
            </div>
            <a href='...'>
              <img src={arrow} alt='arrow-right' />
            </a>
          </div>
        );
      });
      setSpots(result);
    }

    // return () => {
    //   cleanup;
    // };
  }, [searchResult]);

  return (
    <div>
      <div>{spots}</div>
    </div>
  );
};

export default SearchResult;
