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

module.exports = { openNotification }