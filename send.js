const email = document.getElementById("email")

const form = document.getElementsByTagName("form")[0]
let url = 'https://minsk-hk-news.herokuapp.com/16108';

form.addEventListener('submit', e => {

    e.preventDefault()
    alert('пока что не работает')
    fetch(url)
        .then(response => response.json())
        .then(r => console.log(r))
    
})