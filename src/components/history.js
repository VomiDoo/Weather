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

function saveLocalStorage (num) {
    localStorage.setItem('page', num)
}

module.exports = { setLocal, saveLocalStorage }