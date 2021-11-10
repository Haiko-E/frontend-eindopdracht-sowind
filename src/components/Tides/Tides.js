import React from 'react';
import hightide from '../../assets/high-tide.png';
import lowtide from '../../assets/low-tide.png';
import styles from '../../Pages/Weatherinfopage/Weatherinfopage.module.css';
import { showtime } from '../../helper/showtime';
import { tidefinder } from '../../helper/tidefinder';

const Tides = ({ tides }) => {
  console.log(tides);

  const result = tidefinder(tides);

  console.log('gevonden?', result);
  // find methode gebruiken om te kijken of er een extreme in zit, en op basis daarvan dingen weergeven!

  return (
    <>
      {result ? (
        <>
          {result.tp === 'high' && (
            <div>
              <img src={hightide} alt='hightide' />
              {showtime(result.dtl)}
              <h4 className={styles.itemtideheight}>{result.th}m</h4>
            </div>
          )}
          {result.tp === 'low' && (
            <div>
              <img src={lowtide} alt='lowtide' />
              {showtime(result.dtl)}
              <h4 className={styles.itemtideheight}>{result.th}m</h4>
            </div>
          )}
        </>
      ) : (
        <h4 className={styles.itemtideheight}>{tides[0].th}m</h4>
      )}
    </>
  );
};

export default Tides;
