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

contactForm.addEventListener('submit', function(event){

    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        event.preventDefault();
        emailError.textContent = "Please enter a valid email address.";

        emailError.style.display = "block";
        
        emailInput.style.borderColor = "red";
    } else {
        emailError.style.display = "none";
        emailInput.style.borderColor = "";
    }

})

