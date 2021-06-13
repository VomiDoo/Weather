const test = /[0-9]/g
// const _ = require('lodash');

// const { printWeather } = require ('./printWeather')

function printWeather (data) {
    document.querySelector('.main__title').innerHTML = data.location
    document.querySelector('.main__temperature').innerHTML = `${data.temperature} &#8451;`
    document.querySelector('.main__img').style.backgroundImage = `url(${data.icon})`
    document.querySelector('.inform__time').innerHTML = `Time: ${data.time}`
    document.querySelector('.inform__pressure').innerHTML = `Pressure: ${data.pressure} MB`
    document.querySelector('.inform__feelslike').innerHTML = `Feels like: ${data.feelslike} &#8451;`
    document.querySelector('.inform__weather').innerHTML = `Today is ${data.discription}`
    document.querySelector('.wind-direction').innerHTML = `Wind: ${data.windDir}`
    document.querySelector('.wind-speed').innerHTML = `Speed: ${data.windSpeed} km/h`
}

function HistoryObject (data) {
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

let history = []

function setLocal (weather){
    history.unshift(weather);
	history.length = 5
	localStorage.setItem('history', JSON.stringify(history))
}

function getLocal () {
    if(localStorage.getItem('history')) {
        history = JSON.parse(localStorage.getItem('history'))
    }
}
getLocal()



const fetchAPI = (coord) => {
    const city =  document.querySelector('.header__input--city').value || coord;
    if (!city.match(test)) {
        fetch(`http://api.weatherstack.com/current?access_key=8b381b83f1d5a8436bbb94c6d780f9e4&query=${city}`)
            .then(data => data.json())
            .then(data => {
                const town = new HistoryObject(data)
                printWeather(town)
                setLocal(town)
                console.log(history);
            })    
    } 
}

function createHistory () {
    history.forEach(i => {
        document.querySelector('.history__ul').insertAdjacentHTML('beforeend',`<li class="history__li">
                                                                                <p class="history__name border">${i.location}</p>
                                                                                <p class="history__temperature border">${i.temperature} &#8451;</p>
                                                                                <p class="history__weather border"><img src="${i.icon}" class="history__weather-icon"></p>
                                                                                <p class="history__wind border">${i.windSpeed} km/s ${i.windDir}</p>
                                                                            </li>`)
    })
}

document.querySelector('.header').addEventListener('click', e => {
    if (e.target === document.querySelector('.my-weather__btn')) {
        navigator.geolocation.getCurrentPosition(position => {
            fetchAPI((`${position.coords.latitude.toFixed(4)  },${  position.coords.longitude.toFixed(4)}`))
        });
    }
    if (e.target === document.querySelector('.header__btn')){
        fetchAPI()
        document.querySelector('.header__input--city').value = ''
        document.querySelector('.header__input--country').value = ''
    }
    if (e.target === document.querySelector('.open-history-btn')){
        document.querySelector('.history').classList.add('history__open')
        document.querySelector('.history__wrap').classList.add('history__open')
        createHistory()
    }

    if (e.target === document.querySelector('.open-notification-btn')){
        localStorage.removeItem('disable')
        document.querySelector('.notification').style.display = 'block'
    }
    if (e.target === document.querySelector('.clear-local-btn')) {
        localStorage.removeItem('history')
        location.reload() 
    }
})


document.querySelector('.header__input--city').addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        fetchAPI()
        document.querySelector('.header__input--city').value = ''
        document.querySelector('.header__input--country').value = ''
    }
})

document.querySelector('.header__input--country').addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        fetchAPI()
        document.querySelector('.header__input--city').value = ''
        document.querySelector('.header__input--country').value = ''
    }
})


// History

document.querySelector('.history__close-btn').addEventListener('click', () => {
    document.querySelector('.history').classList.remove('history__open')
    document.querySelector('.history__wrap').classList.remove('history__open')
    document.querySelector('.history__ul').innerHTML = ''
})


// Notification


function createNotification (title, text, num) {
    return ` <div class="notification__inform none a${num}">
                <h2 class="notification__title">${num + 1}. ${title}</h2>
                <p class="notification__text">${text}</p>
            </div>`
}

function openNotification (num, arr) {
    if (document.getElementById(`${num}`).checked === true) {
        document.querySelector(`.a${num}`).classList.remove('none')
    } 
    arr.querySelectorAll('input[type=radio]').forEach(i => {
        if (!i.checked) {
            document.querySelector(`.a${i.id}`).classList.add('none')
        }
    })
}

function saveLocalStorage (num) {
    localStorage.setItem('page', num)
}


fetch('./MOCK_DATA.json').then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            document.querySelector('.notification').innerHTML += createNotification(data[i].title, data[i].phrase, i)
            document.querySelector('.pages').innerHTML +=`<input type = 'radio' id = '${i}' name = 'input'>`
        }
        const inputArr = document.querySelector('.pages');
        if (localStorage.getItem('page')) {
            openNotification(localStorage.getItem('page'), inputArr)
        } else {
            openNotification(0, inputArr)
        }
        
        if (localStorage.getItem('disable') === 'true') {
            document.querySelector('.notification').style.display = 'none'
        }

        document.querySelector('.notification').addEventListener('click', e =>{
            if (e.target === document.querySelector('.notification__close-btn')) {
                document.querySelector('.notification').style.display = 'none'
            }
            if (e.target === document.querySelector('input[type=radio]:checked')){
                openNotification(e.target.id, inputArr)
                saveLocalStorage(e.target.id)
            }
            if (e.target === document.querySelector('.left-btn')) {
                let num = document.querySelector('input[type=radio]:checked').id - 1
                if (num < 0) {
                    num = inputArr.querySelectorAll('input').length - 1
                }
                openNotification(num, inputArr)
                saveLocalStorage(num)
            }
            if (e.target === document.querySelector('.right-btn')) {
                let numPlus = Number(document.querySelector('input[type=radio]:checked').id) + 1
                if (numPlus + 1 > inputArr.querySelectorAll('input').length) {
                    numPlus = 0
                }
                openNotification(numPlus, inputArr)
                saveLocalStorage(numPlus)
            }
            if (e.target === (document.querySelector('.notification__disable'))) {
                localStorage.setItem('disable', 'true')
            }
        })
});
