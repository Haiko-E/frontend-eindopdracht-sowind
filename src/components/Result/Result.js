//REACT
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';

//STYLE
import styles from '../../Pages/Searchresultspage/SearchResultpage.module.css';

//ICONS
import location from '../../assets/location.png';
import arrow from '../../assets/right-arrow.png';

//COMP
import Star from '../../components/Star/Star';

const Result = ({ kitespot, index, setSpot }) => {
  const { isLoggedin } = useContext(AuthContext);

  return (
    <div className={styles.searchresult}>
      <img className={styles['searchresult__img']} src={location} alt='loc' />

      <div className={styles['searchresult__text']}>
        <h4>{kitespot.n}</h4>
        <h5>Spot bevind zich in {kitespot.c}</h5>
      </div>
      {isLoggedin && <Star index={index} kitespot={kitespot} />}

      <Link to={`/weatherinfo/${kitespot.kw}`}>
        <img src={arrow} alt='arrow-right' onClick={() => setSpot(kitespot)} />
      </Link>
    </div>
  );
};

export default Result;
