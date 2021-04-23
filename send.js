const email = document.getElementById("email")

const form = document.getElementById('form')
const url = 'http://194.120.116.33:8082/message/'

form.addEventListener('submit', e => {
    alert("Пока что не работает")
    e.preventDefault()
    fetch(url + email.value)
        .then(response => response.json())
        .then(r => console.log(r))
    
})