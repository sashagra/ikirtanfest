const email = document.getElementById("email")

const form = document.getElementById('form')
const url = 'https://minsk-hk-news.herokuapp.com/message/'

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(url + email.value)
        .then(response => response.json())
        .then(r => console.log(r))
    
})