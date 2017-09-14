var nbFourmisNoir=10

// Click function sur le bouton valider.
$("#valider").click(function(){
    //Définition des variables
    var line = $("#line").val() ;
    var col = $("#col").val() ;
    var coorLigne = [];

//On vide le tableau a chaque click sur l'input.
$(".entree").html("");

//On boucle des tr.
for(var i = 0; i < line; i++){
    $("#ici").append("<tr id='r"+i+"'></tr>") 
        //On boucle nos td dans nos tr grace a leur id.
        for(var j = 0; j < col; j++) {
            $("#r"+i+"").append("<td class='test' id='"+i+j+"'></td>")
            //Push mes coordonnées de chaque cases dans mon tableau coorLigne.
            coorLigne.push(""+i+j+"");
            //Plaçage d'une fourmi manuellement.
            $("#02").html("<img src='noire.png'>")
        }
};
console.log(coorLigne);
})

//En cours de création ( fonction pour ajouter des fourmis).
function addFourmis(nbFourmis) {
    for (var i = 0; i < nbFourmis; i++) {
        shuffle(nbFourmis);
    }
}
