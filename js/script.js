document.addEventListener('DOMContentLoaded', function() {
    
    //Variables for form elements
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    const emailInput = document.getElementById('email');
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

    //Reset all form elements
    function clearForm(){
        if (contactForm) {
            contactForm.reset();
            charCount.textContent = "0 / 20 characters";
            charCount.style.color = "black";
            clearError(nameInput);
            nameInput.style.borderColor = "";
            clearError(emailInput);
            emailInput.style.borderColor = "";
            clearError(messageInput);
            messageInput.style.borderColor = "";
        }
    }

    /*Check if form exists on the page (to ensure code only runs on pages with the form)
    Add event listener for input in message-field */
    if (contactForm) {
        messageInput.addEventListener('input', function() {
            const currentLength = messageInput.value.length;
            charCount.textContent = currentLength + " / 20 characters";

            if (validateMessage()){
                charCount.style.color = "green";
            } else {
                charCount.style.color = "#dc3545";
            }
        });

        //Eventlistener for when the form i submitted, with validation
        contactForm.addEventListener('submit', function(event){
            event.preventDefault();

            let validForm = true;

            if (!validateName()) {
                showError(nameInput, "Please enter a valid name.");
                validForm = false;
            } else {
                clearError(nameInput);
                nameInput.style.borderColor = "green";
            }

            if (!validateEmail()){
                showError(emailInput, "Please enter a valid email adress.");
                validForm = false;
            } else {
                clearError(emailInput);
                emailInput.style.borderColor = "green";
            }

            if (!validateMessage()){
                messageInput.style.borderColor = "#dc3545";
                charCount.style.color = "#dc3545";            
                validForm = false;
            } else {
                clearError(messageInput);
                messageInput.style.borderColor = "green";
            }

            //Success message if form is valid
            if (validForm) {
                const firstName = nameInput.value.split (' ')[0];
                thankYouBox.textContent = 'Thank you for your message, ' + firstName + '!';
                thankYouBox.style.display = "block";

                setTimeout(function(){
                    thankYouBox.style.display = "none";
                }, 3000);
                clearForm();
            }
        });

        //Eventlistener for reset button
        const clearBtn = document.getElementById('clearBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', function(){
                clearForm();
            });
        }
    }

    //filter logic for projects
    const buttons = document.querySelectorAll('.filter-btn');
    const projectContainer = document.getElementById('project-container');

    if (projectContainer) {
        displayProjects('all');

        buttons.forEach(function(clickedButton) {
            clickedButton.addEventListener('click', function() {

                buttons.forEach(function(btn) { btn.classList.remove('active'); });
                clickedButton.classList.add('active');

                const filterValue = clickedButton.getAttribute('data-filter');
                displayProjects(filterValue);
            });
        });
    }

    //Function for showing projects with right filter
    function displayProjects(filterValue) {
        const container = document.getElementById('project-container');
        const counter = document.getElementById('project-counter');

        let count = 0;
}); 

const myProjects = [
    {
        id: 1,
        title: "E-commerce Website",
        category: "web-development",
        image: "images/coffee-logo.png",
        description: "A coffee shop website.",
        technologies: ["PHP", "HTML", "CSS", "JavaScript"],
        link: "project-1.html",
    }, 
    {
        id: 2,
        title: "Dog Registry",
        category: "programming",
        image: "images/project-2.jpeg",
        description: "Object-oriented Java application.",
        technologies: ["Java", "OOP"],
        link: "project-2.html",
    },
    {
        id: 3,
        title: "Pathfinder",
        category: "programming",
        image: "images/project-3.jpeg",
        description: "Interactive map and graph editor.",
        technologies: ["Java", "JavaFX"],
        link: "project-3.html",
    },
    {
        id: 4,
        title: "App Prototype",
        category: "design",
        image: "images/project-4.png",
        description: "Language App Prototype.",
        technologies: ["Figma", "Prototype"],
        link: "project-4.html",
    },
    {
        id: 5,
        title: "Quiz Game",
        category: "web-development",
        image: "images/quiz.png",
        description: "Simple Quiz program.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "project-5.html",
    },
    {
        id: 6,
        title: "Logo Design",
        category: "design",
        image: "images/logo.png",
        description: "Logo and visual style.",
        technologies: ["Illustrator"],
        link: "project-6.html",
    }
];