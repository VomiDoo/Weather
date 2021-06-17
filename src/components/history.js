const _ = require('lodash');

document.querySelector('.history__close-btn').addEventListener('click', () => {
    document.querySelector('.history').classList.remove('history__open')
    document.querySelector('.history__wrap').classList.remove('history__open')
    document.querySelector('.history__ul').innerHTML = ''
})
let history = []

function setLocal (weather){
    history.unshift(weather);
    history = _.uniqBy(history, (o) => o.location)
	history = _.take(history, 5)
	localStorage.setItem('history', JSON.stringify(history))
}

function getLocal () {
    if(localStorage.getItem('history')) {
        history = JSON.parse(localStorage.getItem('history'))
    }
}
getLocal()

function printHistory () {
    _.forEach(history, i => {
        document.querySelector('.history__ul').insertAdjacentHTML('beforeend',`<li class="history__li">
                                                                                <p class="history__name border">${i.location}</p>
                                                                                <p class="history__temperature border">${i.temperature} &#8451;</p>
                                                                                <p class="history__weather border"><img src="${i.icon}" class="history__weather-icon"></p>
                                                                                <p class="history__wind border">${i.windSpeed} km/s ${i.windDir}</p>
                                                                            </li>`)
    })
}

module.exports = { setLocal, printHistory }