    //Variables for form elements
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const thankYouBox = document.getElementById('thankYouBox');

    function validateName() {
        const namePattern = /^[a-zA-ZåäöÅÄÖ ]+$/;
        return namePattern.test(nameInput.value); 
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(emailInput.value); 
    }

    function validateMessage() {
        return messageInput.value.length >= 20;
    }

    function showError(inputElement, message){
        inputElement.style.borderColor = "#dc3545";
        
        const errorDisplay = document.getElementById(inputElement.id + "Error");
        if (errorDisplay) {
            errorDisplay.textContent = message;
            errorDisplay.style.display = "block";
        }
    }

    function clearError(inputElement) {
        inputElement.style.borderColor = ""; 

        const errorDisplay = document.getElementById(inputElement.id + "Error");
        if (errorDisplay) {
            errorDisplay.style.display = "none";
        }
    }

    function clearForm(){
        contactForm.reset();
        charCount.textContent = "0 / 20 characters";
        charCount.style.color = "black";
    }

    //Eventlisteners 
    if (contactForm) {
        messageInput.addEventListener('input', function() {
            const currentLength = messageInput.value.length;
            charCount.textContent = currentLength + " / 20 characters";

            if (validateMessage()){
                charCount.style.color = "green";
            } else {
                charCount.style.color = "#dc3545";
            }
        })
    }



    






/*
//Get form element
const contactForm = document.getElementById('contactForm');

//Check if form exists on the page (to ensure code only runs on pages with the form)
if (contactForm) {
    //Variables for form elements
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
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
    });

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
    });

    //Eventlistener for reset button
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function(){
            contactForm.reset();
            charCount.textContent = "0 / 20 characters";
            charCount.style.color = "black";
            emailError.style.display = "none";
            emailInput.style.borderColor = "";
            thankYouBox.style.display = "none";
        });
    }
}

//Wait until the browser has loaded the HTML content
document.addEventListener('DOMContentLoaded', function() {

    //Select all filter buttons and project cards
    const buttons = document.querySelectorAll ('.filter-btn');
    const cards = document.querySelectorAll ('.project-card');

    //Loop through each button individually 
    buttons.forEach(function(clickedButton) {
        //Eventlistener running when a button is clicked
        clickedButton.addEventListener('click', function(){
            //Loop through buttons to remove active class
            buttons.forEach(function(button){
                button.classList.remove('active');
            });
            //Ensures only clicked button is active
            clickedButton.classList.add('active');

            //Get category namede from clicked button
            const filterValue = clickedButton.getAttribute('data-filter');

            //Loop through each card to show/hide 
            cards.forEach(function(card){
                if (filterValue === 'all' || card.classList.contains(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
    });
});
});



*/