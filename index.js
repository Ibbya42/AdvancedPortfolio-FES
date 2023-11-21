// template_32hlc8s - Template id 
// service_hhryq49 - Service id 
// JZuJGDHwdqUsCxxe9 - Public id 


function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += ' modal__overlay--visible'
    emailjs
        .sendForm(
            'service_hhryq49',
            'template_32hlc8s',
            event.target,
            'JZuJGDHwdqUsCxxe9'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible')
            success.classList += ' modal__overlay--visible'
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible')
            alert("Unavailable")
        })
}