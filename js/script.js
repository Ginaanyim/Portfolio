//Variabler som sparar HTML-element
const messageInput = document.getElementById('message');
const charCount = document.getElementById('charCount');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const contactForm = document.getElementById('contactForm');
const thankYouBox = document.getElementById('thankYouBox');


//Add event listener for input in message-field 
messageInput.addEventListener('input', function() {

    //Count numbers of characters 
    const currentLength = messageInput.value.length;
    charCount.textContent = currentLength + " / 20 characters";

    //Change color of character count based on length
    if (currentLength >= 20) {
        charCount.style.color = "green";
    } else {
        charCount.style.color = 'black';
    }
})

//Eventlistener for when the form i submitted
contactForm.addEventListener('submit', function(event){
    event.preventDefault();

    //Reset error messages and styles
    emailError.style.display = "";
    emailInput.style.borderColor = "";
    
    //Get values from input fields
    const emailValue = emailInput.value;
    const messageLength = messageInput.value.length;

    //Regex-pattern to check valid email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Check if email is valid and message length is at least 20 characters
    if (!emailPattern.test(emailValue)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        emailInput.style.borderColor = "red";
    } else if (messageLength < 20){
        charCount.style.color = "red";
    } else {
        thankYouBox.style.display = "block";
    }

})

//Eventlistener for reset button
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', function(){
    contactForm.reset();
    charCount.textContent = "0 / 20 characters";
    charCount.style.color = "black";
    emailError.style.display = "none";
    emailInput.style.borderColor = "";
    thankYouBox.style.display = "none";
})

