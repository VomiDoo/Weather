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


function printNotification (title, text, num) {
    return ` <div class="notification__inform none a${num}">
                <h2 class="notification__title">${num + 1}. ${title}</h2>
                <p class="notification__text">${text}</p>
            </div>`
}

module.exports = { printWeather, printNotification };