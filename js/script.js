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
    charCount.textContent = currentLength + " / 20 characters";

    //Ändrar färg på räcknaren baserat på antal tecken
    if (currentLength >= 20) {
        charCount.style.color = "green";
    } else {
        charCount.style.color = 'black';
    }
});

//Eventlistener for when the form i submitted
contactForm.addEventListener('submit', function(event){

    //Get values from input fields
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Regex-pattern to check valid email format
    const messageLength = messageInput.value.length;

    //Check if email is valid and message length is at least 20 characters
    if (!emailPattern.test(emailValue)) {
        event.preventDefault();
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        emailInput.style.borderColor = "red";
    } else if (messageLength < 20){
        event.preventDefault();
        charCount.style.display = "block";
        charCount.style.color = "red";
        emailError.style.display = "none";
    } else {
        emailError.style.display = "none";
        emailInput.style.borderColor = "";
    }

})

