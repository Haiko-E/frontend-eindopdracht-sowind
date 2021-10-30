import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import styles from './SearchResultpage.module.css';
import location from '../../assets/location.png';
import arrow from '../../assets/right-arrow.png';

const SearchResultpage = ({ searchResult, setSpot, spot }) => {
  useEffect(() => {
    if (searchResult) {
      const kitespots = searchResult.suggestions.spot;
      const result = kitespots.map((kitespot) => {
        return (
          <div className={styles.searchresult} key={kitespot.id}>
            <img className={styles['searchresult__img']} src={location} alt='loc' />

            <div className={styles['searchresult__text']}>
              <h4>{kitespot.n}</h4>
              <h5>Spot bevind zich in {kitespot.c}</h5>
            </div>
            <Link to={`/weatherinfo/${kitespot.kw}`}>
              <img src={arrow} alt='arrow-right' onClick={() => setSpot(kitespot)} />
            </Link>
          </div>
        );
      });
      setSpot(result);
    }
  }, [searchResult]);

  return (
    <div>
      <div>{spot}</div>
    </div>
  );
};

export default SearchResultpage;
