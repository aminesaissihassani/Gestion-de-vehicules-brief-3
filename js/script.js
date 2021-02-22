// contact start 

function contactcheck() {
    var name = document.getElementById("name").value;
    var namere = /^[A-Za-z ]+$/;
    var nameChecker = namere.test(name);

    var email = document.getElementById("email").value;
    var emailre = /^[\w]+@[\w]+\.[A-Za-z]+$/;
    var emailChecker = emailre.test(email);
    
    var sujet = document.getElementById("sujet").value;
    var sujetre = /^[\w .!?]{10,}$/;
    var sujetChecker = sujetre.test(sujet);
    
    var message = document.getElementById("message").value;
    var messageChecker = message.length > 250;

    
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

    if (nameChecker && emailChecker && sujetChecker && messageChecker) {
        document.getElementById("data-show").style.display = "block";
        document.getElementById("name-show").innerHTML = "Nom: " + name;
        document.getElementById("email-show").innerHTML = "Email: " + email;
        document.getElementById("sujet-show").innerHTML = "Sujet: " + sujet;
        document.getElementById("message-show").innerHTML = message;
    }
}

// contact end

// reservation start

var vehicle = {
    "moto": {
        "carburant": {
            "electrique": 0.05,
            "essence": 0.14,
        },
        "boite": {
        },
        "prix": 10
    },

    "citadine": {
        "carburant": {
            "electrique": 0.05,
            "hybride": 0.09,
            "essence": 0.14,
            "diesel": 0.21,
        },
        "boite": {
            "manuelle": 0,
        },
        "prix": 12
    },
    
    "compact": {
        "carburant": {
            "hybride": 0.09,
            "essence": 0.14,
            "diesel": 0.21,
        },
        "boite": {
            "manuelle": 0,
        },
        "prix": 14
    },

    "berline": {
        "carburant": {
            "hybride": 0.09,
            "essence": 0.14,
            "diesel": 0.21,
        },
        "boite": {
            "automatique": 0.19,
        },
        "prix": 20
    },

    "utilitaire": {
        "carburant": {
            "diesel": 0.21,
        },
        "boite": {
            "manuelle": 0,
        },
        "prix": 16
    },

    "engin-de-chantier": {
        "carburant": {
            "essence": 0.14,
            "diesel": 0.21,
        },
        "boite": {
            "manuelle": 0,
        },
        "prix": 900
    },

    "camion": {
        "carburant": {
            "diesel": 0.21,
        },
        "boite": {
            "automatique": 0.19,
        },
        "prix": 250
    },
}
// vehicle[type]["carburant"][0]
function showOptions(src) {
    var type = src.value;
    document.getElementById("foloss").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("carburant").innerHTML = '';
    document.getElementById("boite").innerHTML = '';
    for (var i in vehicle[type]["carburant"]) {
        document.getElementById("carburant").innerHTML += '<label for="' + i + '"><input id="' + i + '" value="' + i + '" type="radio" name="carburant">  ' + i +' </label>';
    }
    for (var i in vehicle[type]["boite"]) {
        document.getElementById("boite").innerHTML += '<label for="' + i + '"><input id="' + i + '" value="' + i + '" type="radio" name="boite" checked>  ' + i +' </label>';
    }
    document.getElementById("howManyDays").innerHTML = '<label for="days">How many days: <input id="days" value="1" type="text" name="days"></label>'
}

function calculFoloss(event) {
    // document.getElementById("test").checked = true
    event.preventDefault();
    document.getElementById("foloss").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    var foloss = 0;
    var shi = document.getElementById("reservation-form");
    if (!shi.vehicle.value) {
        document.getElementById("error").innerHTML += "You should complete the form";
        return false;
    }
    if (!shi.vehicle.value || !shi.carburant.value) {
        document.getElementById("error").innerHTML += "You should complete the form";
        return false;
    }

    if (shi.vehicle.value == "moto") {
        foloss = (vehicle[shi.vehicle.value]["prix"] 
        + vehicle[shi.vehicle.value]["prix"] * vehicle[shi.vehicle.value]["carburant"][shi.carburant.value] ) * shi.days.value;
    } else {
        foloss = (vehicle[shi.vehicle.value]["prix"] 
        + vehicle[shi.vehicle.value]["prix"] * vehicle[shi.vehicle.value]["carburant"][shi.carburant.value] 
        + vehicle[shi.vehicle.value]["prix"] * vehicle[shi.vehicle.value]["boite"][shi.boite.value]) * shi.days.value;
    }
    

    if (/^\D+$/.test(foloss)) {
        document.getElementById("error").innerHTML += "The input should be numbers";
        return false;
    } else if (foloss < 0) {
        document.getElementById("error").innerHTML += "The number of days should be positive";
        return false;
    }

    document.getElementById("foloss").innerHTML += "Le prix est: " + foloss + "€";
}



// reservation end