let modal = document.querySelector('.modal')
let overlay = document.querySelector('.overlay')
let closeModal = document.querySelector('.close-modal')
let modalButton = document.querySelector('.modal-button')
let notificationCtaButton = document.querySelector('.notification-cta-button')

notificationCtaButton.addEventListener('click', () => {
    modal.classList.remove('modal-hidden')
    overlay.classList.remove('modal-hidden')
})

closeModal.addEventListener('click', (e)=> {

    modal.classList.remove('modal-hidden')
    overlay.classList.remove('modal-hidden')
})

modalButton.addEventListener('click', () => {
    modal.classList.add('modal-hidden')
    overlay.classList.add('modal-hidden')

})
