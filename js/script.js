// contact start 

function contactcheck() {
    var name = document.getElementById("name").value;
    var namere = /^\D+$/;
    var nameChecker = namere.test(name);

    var email = document.getElementById("email").value;
    var emailre = /^[\w]+@[\w]+\.[A-Za-z]+$/;
    var emailChecker = emailre.test(email);
    
    var sujet = document.getElementById("sujet").value;
    var sujetre = /^[\w .!?]{10,}$/;
    var sujetChecker = sujetre.test(sujet);
    
    var message = document.getElementById("message").value;
    var messagere = /[\w\s]{250,}/;
    var messageChecker = messagere.test(message);

    
    if (!nameChecker) {
        document.getElementById("nameChecker").innerHTML = "Ce nom n'est pas valide.";
    } else {
        document.getElementById("nameChecker").innerHTML = "";
    }

    if (!emailChecker) {
        document.getElementById("emailChecker").innerHTML = "Cet email n'est pas valide.";
    } else {
        document.getElementById("emailChecker").innerHTML = "";
    }

    if (!sujetChecker) {
        document.getElementById("sujetChecker").innerHTML = "Le sujet doit avoir plus de 10 caractères";
    } else {
        document.getElementById("sujetChecker").innerHTML = "";
    }

    if (!messageChecker) {
        document.getElementById("messageChecker").innerHTML = "Le message doit contenir plus de 250 caractères.";
    } else {
        document.getElementById("messageChecker").innerHTML = "";
    }
}

// contact end

// reservation start



// reservation end