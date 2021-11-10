import React, { useEffect, useState } from 'react';
import styles from './Weatherinfopage.module.css';

//DUMMY DATA
// import dummydata from '../../data/Weahtersearch/dummyWeatherdata.json';
// import dummytides from '../../data/Tides/dummydatatides.json';

//REAL DATA
import axios from 'axios';

// ASSETS
import arrow from '../../assets/Windarrow.svg';
import wavearrow from '../../assets/Wave arrow.svg';
import waveheight from '../../assets/Wave hight.svg';

// HELPER FUNCTIES
import { iconpicker } from '../../helper/Iconpicker';
import { timeconvert } from '../../helper/Convert';
import Tides from '../../components/Tides/Tides';

const WeatherInfopage = ({ spot }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [tides, setTides] = useState([]);
  const [allData, setAllData] = useState([]);

  async function fetchWeatherData() {
    try {
      const result = await axios.get(
        `https://api-windfinder-pro.p.rapidapi.com/spots/${spot.id}/forecasts/?limit=48`,
        {
          headers: {
            'x-rapidapi-host': 'api-windfinder-pro.p.rapidapi.com',
            'x-rapidapi-key': '50dc06e1ffmsh74e7f780ffadcaep185a7ajsnff0dcef58db6',
          },
        }
      );
      console.log(result.data);
      setWeatherData(result.data);
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchTidesData() {
    try {
      const result = await axios.get(
        `https://api-windfinder-pro.p.rapidapi.com/spots/${spot.id}/tides/?limit=-1`,
        {
          headers: {
            'x-rapidapi-host': 'api-windfinder-pro.p.rapidapi.com',
            'x-rapidapi-key': '50dc06e1ffmsh74e7f780ffadcaep185a7ajsnff0dcef58db6',
          },
        }
      );
      console.log(result.data);
      setTides(result.data);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    fetchWeatherData();
    fetchTidesData();
  }, []);

  useEffect(() => {
    if (tides.length > 0 && weatherData.length > 0) {
      const output = weatherData.map((weather) => {
        // hier filteren we alle tides die normaal of extreem zijn en in DIT weather-tijdslot passen
        const tideMatches = tides.filter((tide) => {
          const hasTideMatch = tide.dtl === weather.dtl;
          let hasExtremeTideMatch;
          if (tide.tp) {
            const timetide = new Date(tide.dtl).getTime();
            const timeweather = new Date(weather.dtl).getTime();
            if (
              timetide - timeweather <= 5400000 &&
              timetide - timeweather >= -5400000
            ) {
              hasExtremeTideMatch = true;
            }
          }
          return hasTideMatch || hasExtremeTideMatch;
        });
        return {
          timeslot: weather.dtl,
          weather: weather,
          tides: tideMatches,
        };
      });
      console.log(output);

      // uitkomst in niewue stat;e variabele

      setAllData(output);
      // in de return map je daaroverheen en maak je 1 balk voor iedere tijd
    }
  }, [weatherData, tides]);

  return (
    <div>
      <div className={styles.container}>
        {allData.map((item, index) => {
          const date = new Date(item.timeslot);
          const dateoptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          };

          return (
            <div key={item.timeslot}>
              {index % 8 === 0 && (
                <h3 className={styles.itemdate}>
                  {date.toLocaleDateString(undefined, dateoptions)}
                </h3>
              )}
              <div className={styles.itemcontainer}>
                <h4 className={styles.itemtime}>{timeconvert(item.timeslot)}hrs</h4>
                <div className={styles.itemwind}>
                  <div className={styles.itemarrow}>
                    <img
                      src={arrow}
                      alt='arrow'
                      style={{ transform: `rotate(${item.weather.wd}deg)` }}
                    />
                    <h4>{item.weather.wd}º</h4>
                  </div>
                  <h5>{item.weather.ws} kts</h5>
                  <h6>max {item.weather.wg} kts</h6>
                </div>
                <div className={styles.itemicon}>
                  {iconpicker(item.weather.p, item.weather.cl, item.weather.dtl)}
                  <h5>{item.weather.at}℃</h5>
                </div>
                <div className={styles.itemwave}>
                  <div>
                    <img
                      src={wavearrow}
                      alt='wavearrow'
                      style={{ transform: `rotate(${item.weather.wad}deg)` }}
                    />
                    <h5>{item.weather.wad}º</h5>
                  </div>
                  <div>
                    <img src={waveheight} alt='waveheight' />
                    <h5>{item.weather.wah}m</h5>
                  </div>
                </div>
                <div className={styles.itemtides}>
                  <Tides tides={item.tides} />
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
