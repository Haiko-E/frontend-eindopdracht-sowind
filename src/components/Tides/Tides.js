//REACT
import React from 'react';

//ICONS
import hightide from '../../assets/high-tide.png';
import lowtide from '../../assets/low-tide.png';

//STYLING
import styles from '../../Pages/Weatherinfopage/Weatherinfopage.module.css';

//HELPER FUNCTIONS
import { showtime } from '../../helper/showtime';
import { tidefinder } from '../../helper/tidefinder';

const Tides = ({ tides }) => {
  //helper functie die kijkt of er hoog of laag tij is
  //result is het object met hoog of laag tij informatie
  const result = tidefinder(tides);

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
