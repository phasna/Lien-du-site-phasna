function Verification() {

    // déclaration des variable 
    var Nom = document.getElementById('idNom').value;
    var Age = document.getElementById('idAge').value;
    var Tel = document.getElementById('idTel').value;
    var email = document.getElementById('idemail').value;


    // Contrôle sur le nom//
    if (Nom == '') {
        alert('Vous devez compléter votre nom !');
        document.getElementById('idNom').focus();
        // Permet de bloquer l'envoi du formulaire
        return false;
    }
    if (Nom.length < 3) {
        alert('Vous devez entrer aumoin 3 lettres !');
        document.getElementById('idNom').focus();
        // Permet de bloquer l'envoi du formulaire
        return false;
    }
    if (isNaN(Nom) == false) {
        alert('Vous devez compléter que avec des lettres');
        document.getElementById('idNom').focus();
        return false;
    }
    else {
        document.getElementById('idNom').style.backgroundColor = "#9C6";
    }

    // Contrôle sur Age//
    if (Age == '') {
        alert('Vous devez compléter votre Age');
        document.monformulaire1.Age.focus();
        return false;
    }
    if (isNaN(Age)) {
        alert('Vous devez compléter avec des nombres');
        document.getElementById('idAge').focus();
        return false;
    }
    if (Age < 18) {
        alert('Vous devez avoir aumoins 18 ans ');
        document.getElementById('idAge').focus();
        return false;
    }
    else {
        document.getElementById('idAge').style.backgroundColor = "#9C6";
    }


    // Contrôle sur l'email//
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        alert("L'e-mail est incorrect !");
        document.getElementById('idemail').focus();
        return false;
    }
    else {
        document.getElementById('idemail').style.backgroundColor = "#9C6";
    }

    // Contrôle sur téléphone//
    if (Tel == '') {
        alert('Vous devez compléter votre numéro de téléphone');
        document.getElementById('idTel').focus();
        return false;
    }
    if (isNaN(Tel)) {
        alert('Vous devez compléter avec des nombres');
        document.getElementById('idTel').focus();
        return false;
    }
    if (Tel.length < 10) {
        alert('Vous devez entrer votre numéro de téléphone de 10 chiffres !');
        document.getElementById('idTel').focus();
        // Permet de bloquer l'envoi du formulaire
        return false;
    }
    else {
        document.getElementById('idTel').style.backgroundColor = "#9C6";
    }

    // les selection myliste Statut
    var statut = document.monformulaire1.statut.value;


    if (statut == '') {
        alert('Vous devez selectionner une réponse ');
        return false;
    }


   // les selection Matière favorie 

   var Matiere = document.monformulaire1.matiere.value;


   if (Matiere == '') {
       alert('Vous devez selectionner une ou plusieur réponse(s)  ');
       return false;
   }


      // les selection Loisir

      var loisir = document.monformulaire1.loisir.value;


      if (loisir == '') {
          alert('Vous devez selectionner votre loisir! une ou plusieur réponse(s) ');
          return false;
      }

    return true;  
};

// selection des chiffres 

function afficher(){
    var selectedOptions = [];
    var select = document.getElementById("matiere");
    for(var i = 0; i < select.options.length; i++){
        if(select.options[i].selected){
            selectedOptions.push(select.options[i].value);
        }
    }
    document.getElementById("result").innerHTML = selectedOptions.join(', ');
}

class CustomSelect{
    constructor(originalSelect){
        this.originalSelect = originalSelect;
        this.customSelect = document.createElement("div");
        this.customSelect.classList.add("select");

        this.originalSelect.querySelectorAll("option").forEach((optionElement) =>{
        const itemElement = document.createElement("div");

        itemElement.classList.add("selectitem");
        itemElement.textContent = optionElement.textContent;
        this.customSelect.appendChild(itemElement);

        if(optionElement.selected){
            this._select(itemElement);
        }

        itemElement.addEventListener("click", () => {
            if(this.originalSelect.multiple && itemElement.classList.contains("selectitem--selected")){
                this._deselect(itemElement);
            } 
            else{
                this._select(itemElement);
            }
        });
    });
        this.originalSelect.insertAdjacentElement("afterend", this.customSelect);
        this.originalSelect.style.display = "none";
    }

    _select(itemElement) {
        const index = Array.from(this.customSelect.children).indexOf(itemElement);

        if(!this.originalSelect.multiple){
          this.customSelect.querySelectorAll(".selectitem").forEach((el) =>{
            el.classList.remove("selectitem--selected");
          });
        }
    
        this.originalSelect.querySelectorAll("option")[index].selected = true;
        itemElement.classList.add("selectitem--selected");
    }
    _deselect(itemElement) {
      const index = Array.from(this.customSelect.children).indexOf(itemElement);
      this.originalSelect.querySelectorAll("option")[index].selected = false;
      itemElement.classList.remove("selectitem--selected");
    }
}


document.querySelectorAll(".custom-select").forEach((selectElement) =>{
  new CustomSelect(selectElement);
});


document.getElementById('submit').onclick = function() {
  var selected = [];
    for(var option of document.getElementById('matiere').options){
        if(option.selected){
            selected.push(option.value);
        }
        else{
            alert("Veuillez saisir une matière favorite")
            return false;
        }
    }
}

alert("bravo le message a été bien envoyer")