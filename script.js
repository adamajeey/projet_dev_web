let choix = true; //Declaration de variable booleen

function changement(){  //function qui change les couleurs
    let bloc1 = document.getElementById("bloc1");  //Declaration des variable et affecter les les id au niveau de html
    let txt1 = document.getElementById("txt1");
    let bloc2 = document.getElementById("bloc2");
    let txt2 = document.getElementById("txt2");
    let bloc3 = document.getElementById("bloc3");
    let txt3 = document.getElementById("txt3");
    let bloc4 = document.getElementById("bloc4");
    let txt4 = document.getElementById("txt4");

if(choix == true){   //Codition si choix est egal true
    bloc1.style.backgroundColor = "red";
    txt1.style.color = 'blue';

    bloc2.style.backgroundColor = "red";
    txt2.style.color = 'blue';

    bloc3.style.backgroundColor = "red";
    txt3.style.color = 'blue';

    bloc4.style.backgroundColor = "red";
    txt4.style.color = 'blue';

    choix = false;
}
else{
    bloc1.style.backgroundColor = "green";
    txt1.style.color = 'yellow';

    bloc2.style.backgroundColor = "green";
    txt2.style.color = 'yellow';

    bloc3.style.backgroundColor = "green";
    txt3.style.color = 'yellow';

    bloc4.style.backgroundColor = "green";
    txt4.style.color = 'yellow';

    choix = true;
}

}
var mon_bouton = document.getElementById("bouton"); //declaration d'une variable qui recupère id bouton
    mon_bouton.addEventListener("click", recup);  //Ici le bouton ecoute l'evenement click et la function recup

function recup() //function qui permet de recuperer les valeurs 
{
    var prenom = document.getElementById("class1").value;
    var nom = document.getElementById("class2").value;
    var mail = document.getElementById("class3").value;
    var numero = document.getElementById("class4").value;
    

    var affichage = document.getElementById("affich"); // recuperation l'ID paragraphe affich
    affichage.innerHTML = 
    "Prenom est : "  + prenom + 
    "</br>Nom est : "  + nom +
    "</br>Numéro est : "  + numero +
    "</br>Email est : "  + mail;
}




