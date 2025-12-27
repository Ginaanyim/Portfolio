//Variabler som sparar HTML-element
const messageInput = document.getElementById('message');
const charCount = document.getElementById('charCount');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const contactForm = document.getElementById('contactForm');

//Lägger till en eventlyssnare för input i meddelandefältet
messageInput.addEventListener('input', function() {

    //Mäter antal tecken i meddelandefältet
    const currentLength = messageInput.value.length;

})