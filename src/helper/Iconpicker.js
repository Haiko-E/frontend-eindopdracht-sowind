import sun from '../assets/WeatherIcons/01.sun-light.png';
import sunclouds1 from '../assets/WeatherIcons/05.partial-cloudy-light.png';
import sunclouds2 from '../assets/WeatherIcons/07.mostly-cloud-light.png';
import clouds1 from '../assets/WeatherIcons/11.mostly-cloudy-light.png';
import sunrain1 from '../assets/WeatherIcons/06.rainyday-light.png';
import regen1 from '../assets/WeatherIcons/20.rain-light.png';
import regen2 from '../assets/WeatherIcons/18.heavy-rain-light.png';

import halfmoon from '../assets/WeatherIcons/09.half-moon-light.png';
import halfmooncloud1 from '../assets/WeatherIcons/10.cloudy-night-light.png';
import moonrain from '../assets/WeatherIcons/21.cloudy-night-lightrain.png';
import halfmooncloud2 from '../assets/WeatherIcons/16.cloudy-night-light.png';

export function iconpicker(rain, clouds, date) {
  const time = new Date(date).getHours();
  const timeOfDay = time <= 19 && time >= 6 ? 'day' : 'night';

  if (timeOfDay === 'day') {
    // wanneer er geen regen is
    if (rain <= 0.1 && clouds <= 10) {
      return <img src={sun} alt='sun' />;
    }
    if (rain <= 0.1 && clouds > 10 && clouds <= 50) {
      return <img src={sunclouds1} alt='clouds1' />;
    }
    if (rain <= 0.1 && clouds > 50 && clouds <= 90) {
      return <img src={sunclouds2} alt='clouds2' />;
    }
    if (rain <= 0.1 && clouds > 90) {
      return <img src={clouds1} alt='clouds3' />;
    }

    // wanneer er regen is
    if (rain > 0.1 && clouds <= 70) {
      return <img src={sunrain1} alt='rain1' />;
    }
    if (rain > 0.1 && rain <= 1.5 && clouds > 70) {
      return <img src={regen1} alt='rain3' />;
    }
    if (rain > 1.5 && clouds > 80) {
      return <img src={regen2} alt='rain4' />;
    }
  }

  if (timeOfDay === 'night') {
    // wanneer er geen regen is
    if (rain <= 0.1 && clouds <= 10) {
      return <img src={halfmoon} alt='moon' />;
    }
    if (rain <= 0.1 && clouds > 10 && clouds <= 50) {
      return <img src={halfmooncloud1} alt='moonclouds1' />;
    }
    if (rain <= 0.1 && clouds > 50 && clouds <= 90) {
      return <img src={halfmooncloud2} alt='moonclouds2' />;
    }
    if (rain <= 0.1 && clouds > 90) {
      return <img src={clouds1} alt='clouds3' />;
    }

    // wanneer er regen is
    if (rain > 0.1 && clouds <= 70) {
      return <img src={moonrain} alt='rain1' />;
    }
    if (rain > 0.1 && rain <= 1.5 && clouds > 70) {
      return <img src={regen1} alt='rain3' />;
    }
    if (rain > 1.5 && clouds > 80) {
      return <img src={regen2} alt='rain4' />;
    }
  }
}
