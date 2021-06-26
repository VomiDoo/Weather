import { printWeather } from './components/printWeather';
import { setLocal, printHistory } from './components/history';
import './style.css';

const test = /[0-9]/g;

const getHistoryObject = (data) => {
  const icon = data.current.weather_icons[0];
  return {
    location: `${data.location.country}, ${data.location.region}`,
    temperature: data.current.temperature,
    windDir: data.current.wind_dir,
    windSpeed: data.current.wind_speed,
    icon,
    time: data.location.localtime.slice(11, 16),
    pressure: data.current.pressure,
    feelslike: data.current.feelslike,
    discription: data.current.weather_descriptions,
  };
};

const fetchAPI = (coord) => {
  const city = document.querySelector('.header__input--city').value;
  if (coord || !city.match(test)) {
    fetch(
      `http://api.weatherstack.com/current?access_key=bdeec7a4beb014daa4415d15b0447360&query=${
        city || coord
      }`
    )
      .then((data) => data.json())
      .then((data) => {
        const town = getHistoryObject(data);
        printWeather(town);
        setLocal(town);
      });
  }
};

document.querySelector('.header').addEventListener('click', (e) => {
  if (e.target === document.querySelector('.my-weather__btn')) {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = [
        `${position.coords.latitude.toFixed(
          4
        )},${position.coords.longitude.toFixed(4)}`,
      ].join(',');
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

  if (e.target === document.querySelector('.open-notification-btn')) {
    localStorage.removeItem('disable');
    document.querySelector('.notification').style.display = 'block';
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
