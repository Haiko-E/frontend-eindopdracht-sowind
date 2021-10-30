import React from 'react';
import styles from './Weatherinfopage.module.css';

//DUMMY DATA
import dummydata from '../../data/Weahtersearch/dummyWeatherdata.json';
import dummytides from '../../data/Tides/dummydatatides.json';

// ASSETS
import arrow from '../../assets/Windarrow.svg';
import wavearrow from '../../assets/Wave arrow.svg';
import waveheight from '../../assets/Wave hight.svg';

// HELPER FUNCTIES
import { iconpicker } from '../../helper/Iconpicker';
import { timeconvert } from '../../helper/Convert';
import { showtides } from '../../helper/showtides';

const WeatherInfopage = ({ spot }) => {
  return (
    <div>
      <div className={styles.container}>
        {dummydata.map((item, index) => {
          const date = new Date(item.dtl);
          const dateoptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          };

          return (
            <div key={item.dtl}>
              {index % 8 === 0 && (
                <h3 className={styles.itemdate}>
                  {date.toLocaleDateString(undefined, dateoptions)}
                </h3>
              )}
              <div className={styles.itemcontainer}>
                <h4 className={styles.itemtime}>{timeconvert(item.dtl)}hrs</h4>
                <div className={styles.itemwind}>
                  <div className={styles.itemarrow}>
                    <img
                      src={arrow}
                      alt='arrow'
                      style={{ transform: `rotate(${item.wd}deg)` }}
                    />
                    <h4>{item.wd}º</h4>
                  </div>
                  <h5>{item.ws} kts</h5>
                  <h6>max {item.wg} kts</h6>
                </div>
                <div className={styles.itemicon}>
                  {iconpicker(item.p, item.cl, item.dtl)}
                  <h5>{item.at}℃</h5>
                </div>
                <div className={styles.itemwave}>
                  <div>
                    <img
                      src={wavearrow}
                      alt='wavearrow'
                      style={{ transform: `rotate(${item.wad}deg)` }}
                    />
                    <h5>{item.wad}º</h5>
                  </div>
                  <div>
                    <img src={waveheight} alt='waveheight' />
                    <h5>{item.wah}m</h5>
                  </div>
                </div>
                <div className={styles.itemtides}>{showtides(dummytides, item)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherInfopage;
