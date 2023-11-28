function filtrer() {

var filtre, animaux, ligne, cellule, i, texte;

filtre = document.getElementById("maRecherche") .value.toUpperCase().trim()
animaux = document.getElementById("animaux-1");
ligne = animaux.getElementsByTagName("tr");

for (i = 0; i < ligne.length; i++)
{
cellule = ligne[i].getElementsByTagName("td")[0];
    if(cellule) {
        texte = cellule.innerText;
        if (texte.toUpperCase().indexOf(filtre) > -1) {
            ligne[i].style.display = "";
        }
        else
            {
                ligne[i].style.display = "none";
            }
        }
    }
}


// function openImg() {
//   var image = document.getElementById('img');
//   var source = image.src;
//   window.open(source);
// }