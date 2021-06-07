const sendFormUrl = 'https://minsk-hk-news.herokuapp.com/message/'

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact_form')
    const subscribeForm = document.getElementById('subscribeForm')
    const myLoader = document.querySelector('.my-loader')
    const name = document.getElementById('name')
    const phone = document.getElementById('phone')
    const email = document.getElementById('email')    
    const emailSubscribe = document.getElementById('emailSubscribe')    
    const comment = document.getElementById('comment')    


    contactForm.addEventListener('submit', async e => {
        e.preventDefault()
        const success = await sendForm(`kirtanform()${name.value}()${phone.value}()${email.value}()${comment.value}`)
        if (success) {
            for (let el of [name, phone, email]) {
                el.value = ''
            }
            comment.value = 'ВАШЕ СООБЩЕНИЕ ОТПРАВЛЕНО!'
            setTimeout(() => comment.value = '', 3000)
        }
        
    })

    subscribeForm.addEventListener('submit', async e => {
        e.preventDefault()
        const success = await sendForm(`kirtanform()Подписать на рассылку()()${emailSubscribe.value}()`)
        if (success) {
            emailSubscribe.value = 'ВАШЕ СООБЩЕНИЕ ОТПРАВЛЕНО!'
            setTimeout(() => emailSubscribe.value = '', 3000)
        }
    })
    
    async function sendForm(formData) {
        myLoader.hidden = false
        try {
            await fetch(sendFormUrl + formData);
            myLoader.hidden = true
            return true    
        } catch(err) {
            alert('Произошла какая-то ошибка. Если появляется повторно, напишите нам в соцсетях или мессенджере'); // Failed to fetch
            myLoader.hidden = true
            return false
        }
    }
})