// dsl pour le franglais

function onSubmit(){
    let password = document.getElementById("password").value;
    if(!checkPassword(password)){
        alert("Mot de passe invalide");
    }

    //pas opti
    let nom = document.getElementById("nom").value;
    checkInput(nom, "Nom")
    let email = document.getElementById("email").value;
    checkInput(email, "Email")
    let prenom = document.getElementById("prenom").value;
    checkInput(prenom, "Prénom")
    let tel = document.getElementById("tel").value;
    checkInput(tel, "Téléphone")
    let cp = document.getElementById("cp").value;
    checkInput(cp, "Code postal")
    let adresse = document.getElementById("adresse").value;
    checkInput(adresse, "Adresse")
    let ville = document.getElementById("ville").value;
    checkInput(ville, "Ville")
    let login = document.getElementById("login").value;
    checkInput(login, "Login")
}

function checkPassword(password){
    let confirmpassword = document.getElementById("confirmpassword").value;
    if(password == confirmpassword ){
        return true;
    }else{
        return false;
    }
}

function checkInput(input, name){
    if(input.length < 1){
        alert("INVALIDE : " + name);
    }
}

