// template_32hlc8s - Template id 
// service_hhryq49 - Service id 
// JZuJGDHwdqUsCxxe9 - Public id 


function contact(event){
    event.preventDefault();
    // emailjs
    //     .sendForm(
    //         'service_hhryq49',
    //         'template_32hlc8s',
    //         event.target,
    //         'JZuJGDHwdqUsCxxe9'
    //     ).then(() => {
    //         console.log("It worked")
    //     })

    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += ' modal__overlay--visible'
    
    setTimeout(() => {
        loading.classList.remove('modal__overlay--visible')
        success.classList += ' modal__overlay--visible'
        console.log("It worked")
    }, 1000);
}