const sendFormUrl = 'https://minsk-hk-news.herokuapp.com/message/'

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact_form')
    contactForm.addEventListener('submit', e => {
        e.preventDefault()
        sendContact()
    })

    async function sendContact() {
        const name = document.getElementById('name')
        const phone = document.getElementById('phone')
        const email = document.getElementById('email')    
        const comment = document.getElementById('comment')    

        try {
            await fetch(`${sendFormUrl}kirtanform()${name.value}()${phone.value}()${email.value}()${comment.value}`);
    
            for (let el of [name, phone, email]) {
                el.value = ''
            }
    
            comment.value = 'ВАШЕ СООБЩЕНИЕ ОТПРАВЛЕНО!'
            setTimeout(() => comment.value = '', 2000)
            
        } catch(err) {
            alert('Произошла какая-то ошибка. Если появляется повторно, напишите нам в соцсетях или мессенджере'); // Failed to fetch
        }
        // $("<div id='success' class='alert alert-success' style='border:#"+successBox_Border_Color+" 1px "+successBoxBorderStyle+"; background:#"+successBoxColor+";' ></div>").insertAfter('#contact_form');

        // const success = document.getElementById('success')
        // success.innerHTML("<h5 style='color:#"+textColor+";'>"+submitMessage+"</h5><p style='color:#"+textColor+";'>"+successParagraph+"</p>")
    }
})