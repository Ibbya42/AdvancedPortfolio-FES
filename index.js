// template_32hlc8s - Template id 
// service_hhryq49 - Service id 
// JZuJGDHwdqUsCxxe9 - Public id 


// On initial, the toggle is set to light mode
let toggleConst = false;
function toggleConstrast() {
    toggleConst = !toggleConst;
    if (toggleConst){
        document.body.classList += " dark-theme";
    }
    else{
        document.body.classList.remove("dark-theme");
    }
}


// Create a function that will be called onsubmit from the form 
function contact(event){
    event.preventDefault();
    // Create a const that will call the loading screen once the form has been submitted
    const loading = document.querySelector('.modal__overlay--loading');
    // Create a const that will call the success screen once it has past the loading state
    const success = document.querySelector('.modal__overlay--success');
    // The loading const will go into the visible style that will have a z-index of 1. 
    // Modal__overlay will have -1 so it will be hidden behind 
    loading.classList += ' modal__overlay--visible'

    // Information from the form will be sent through from emailJs
    emailjs
        .sendForm(
            'service_hhryq49',
            'template_32hlc8s',
            event.target,
            'JZuJGDHwdqUsCxxe9'
            // Remove the loading state once the information has passed through and 
            // Call the succesful prompt
        ).then(() => {
            loading.classList.remove('modal__overlay--visible')
            success.classList += ' modal__overlay--visible'
            // Return an error if there is no connection 
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible')
            alert("Unavailable")
        })
}

let isModalOpen = false;
function toggleModal(){
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal__open")
    }
    
    isModalOpen = true;
    document.body.classList += ' modal__open'
}