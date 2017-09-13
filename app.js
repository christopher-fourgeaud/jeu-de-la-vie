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
    $("#ici").append("<tr id="+i+"></tr>") 
        //On boucle nos td dans nos tr grace a leur id.
        for(var j = 0; j < col; j++) {
            $("#"+i+"").append("<td class='test' id='"+i+j+"'></td>")
        }
};
})