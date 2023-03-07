function Verification() {

    // Récupérer lavaleur des champs nom et email
    var Nom = document.getElementById('idNom').value;
    var Age = document.getElementById('idAge').value;
    var Tel = document.getElementById('idTel').value;
    var email = document.getElementById('idemail').value;


    // Contrôle sur le nom//
    if (Nom == '') {
        alert('Vous devez compléter votre nom !');
        // Permet de bloquer l'envoi du formulaire
        return false;
    }
    if (Nom.length < 3) {
        alert('Vous devez entrer aumoin 3 lettres !');
        // Permet de bloquer l'envoi du formulaire
        return false;
    }
    if (isNaN(Nom) == false) {
        alert('Vous devez compléter que avec des lettres');
        return false;
    }
    else {
        document.getElementById('idNom').style.backgroundColor = "#9C6";
    }




    // Contrôle sur Age//
    if (Age == '') {
        alert('Vous devez compléter votre Age');
        return false;
    }//
    if (isNaN(Age)) {
        alert('Vous devez compléter avec des nombres');
        return false;
    }//
    if (Age < 18) {
        alert('Vous devez avoir aumoins 18 ans ');
        return false;
    }
    else {
        document.getElementById('idAge').style.backgroundColor = "#9C6";
    }



    // Contrôle sur l'email//
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        alert("L'e-mail est incorrect !");
        return false;
    }
    else {
        document.getElementById('idemail').style.backgroundColor = "#9C6";
    }



    // Contrôle sur téléphone//
    if (Tel == '') {
        alert('Vous devez compléter votre numéro de téléphone');
        return false;
    }
    if (isNaN(Tel)) {
        alert('Vous devez compléter avec des nombres');
        return false;
    }
    if (Tel.length < 10) {
        alert('Vous devez entrer votre numéro de téléphone de 10 chiffres !');
        // Permet de bloquer l'envoi du formulaire
        return false;
    }
    else {
        document.getElementById('idTel').style.backgroundColor = "#9C6";
    }
    return true;
}


// selection de sexe





// Liste



// End Liste



// Liste Matière



// End Liste Matière


// Select






