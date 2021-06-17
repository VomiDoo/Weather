import { printWeather } from './components/printComponents';
import { setLocal, printHistory } from './components/history';
import './style.css';

const test = /[0-9]/g;
const _ = require('lodash');

function HistoryObject(data) {
  this.location = `${data.location.country}, ${data.location.region}`;
  this.temperature = data.current.temperature;
  this.windDir = data.current.wind_dir;
  this.windSpeed = data.current.wind_speed;
  const icon = data.current.weather_icons[0];
  this.icon = icon;
  this.time = data.location.localtime.slice(11, 16);
  this.pressure = data.current.pressure;
  this.feelslike = data.current.feelslike;
  this.discription = data.current.weather_descriptions;
}

const fetchAPI = (coord) => {
  const city = document.querySelector('.header__input--city').value || coord;
  if (coord || !city.match(test)) {
    fetch(
      `http://api.weatherstack.com/current?access_key=bdeec7a4beb014daa4415d15b0447360&query=${city}`
    )
      .then((data) => data.json())
      .then((data) => {
        const town = new HistoryObject(data);
        printWeather(town);
        setLocal(town);
      });
  }
};

document.querySelector('.header').addEventListener('click', (e) => {
  if (e.target === document.querySelector('.my-weather__btn')) {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = _.join(
        [
          `${position.coords.latitude.toFixed(
            4
          )},${position.coords.longitude.toFixed(4)}`,
        ],
        ','
      );
      fetchAPI(coords);
    });
  }
  if (e.target === document.querySelector('.header__btn')) {
    fetchAPI();
    document.querySelector('.header__input--city').value = '';
    document.querySelector('.header__input--country').value = '';
  }
  if (e.target === document.querySelector('.open-history-btn')) {
    document.querySelector('.history').classList.add('history__open');
    document.querySelector('.history__wrap').classList.add('history__open');
    printHistory();
  }
  if (e.target === document.querySelector('.clear-local-btn')) {
    localStorage.removeItem('history');
    location.reload();
  }
});

document
  .querySelector('.header__input--city')
  .addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      fetchAPI();
      document.querySelector('.header__input--city').value = '';
      document.querySelector('.header__input--country').value = '';
    }
  });

document
  .querySelector('.header__input--country')
  .addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      fetchAPI();
      document.querySelector('.header__input--city').value = '';
      document.querySelector('.header__input--country').value = '';
    }
  });
