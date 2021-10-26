import React, { useEffect } from 'react';
import styles from './Weatherinfopage.module.css';
import dummydata from '../../data/Weahtersearch/dummyWeatherdata.json';
import { timeconvert } from '../../helper/Convert';
import arrow from '../../assets/Windarrow.svg';

const WeatherInfopage = ({ spotID }) => {
  return (
    <div>
      <div>Maandag 25-oktober-2021</div>
      <div className={styles.container}>
        {dummydata.map((item, index) => {
          return (
            <div className={styles.itemcontainer}>
              <div className={styles.itemtime}>{timeconvert(item.dtl)}hrs</div>
              <div className={styles.itemwind}>
                <div className={styles.itemarrow}>
                  <img
                    src={arrow}
                    alt='arrow'
                    style={{ transform: `rotate(${item.wad}deg)` }}
                  />
                  <p>{item.wd} º</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherInfopage;
