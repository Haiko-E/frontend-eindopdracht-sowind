import hightide from '../assets/high-tide.png';
import lowtide from '../assets/low-tide.png';
import styles from '../Pages/Weatherinfopage/Weatherinfopage.module.css';

export function showtides(datatides, weatherdetail) {
  return datatides.map((tide) => {
    if (tide.tp) {
      const time = new Date(tide.dtl);
      const timetide = new Date(tide.dtl).getTime();
      const timeweather = new Date(weatherdetail.dtl).getTime();
      if (timetide - timeweather <= 5400000 && timetide - timeweather >= -5400000) {
        if (tide.tp === 'high' && tide.th > 1) {
          return (
            <div key={tide.dtl}>
              <img src={hightide} alt='hightide' />
              <h6>
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}{' '}
                hrs
              </h6>
              <h4 className={styles.itemtideheight}>{tide.th}m</h4>
            </div>
          );
        }
        if (tide.tp === 'low') {
          return (
            <div key={tide.dtl}>
              <img src={lowtide} alt='hightide' />
              <h6>
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}{' '}
                hrs
              </h6>
              <h4 className={styles.itemtideheight}>{tide.th}m</h4>
            </div>
          );
        }
      }
    }

    if (tide.dtl === weatherdetail.dtl && !tide.tp) {
      return <h4 className={styles.itemtideheight}>{tide.th}m</h4>;
    }
  });
}
