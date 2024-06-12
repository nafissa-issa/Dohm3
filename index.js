
const checkboxParoles = document.getElementById("masquer-paroles"); 
const divParoles = document.getElementById("paroles");
let noeux = checkboxParoles.nextSibling
let ligne = document.querySelector("hr")
  
// Attache une fonction à l'évènement "click" sur checkboxParoles
checkboxParoles.addEventListener('click', function (event) {
 
  if (event.target.checked) {
   divParoles.style.display = "none"
   noeux.textContent = "Afficher les paroles"
   ligne.style.display = "none"

  } else {
    divParoles.style.display = "block"
   noeux.textContent = "Masquer les paroles"

  }
});

let sout = document.getElementById("masquer-refrains");
let contrat = document.querySelectorAll(".refrain")
let sibler = sout.nextSibling
let contenu = document.querySelectorAll(".contenu")
let definition = document.querySelectorAll('.definition')

sout.addEventListener('click',function(event){
 for (let m = 1; m < contrat.length; m++) {
  if(event.target.checked){
    contenu[m].style.display = "none"
    definition[m].style.display = 'block'
    sibler.textContent = "Afficher les refrains"

    definition[m].addEventListener("mouseenter",(e) =>{
      contenu[m].style.display = "block"
      definition[m].style.display = 'none'
    })

    definition[m].addEventListener("mouseleave",(e) =>{
      contenu[m].style.display = "none"
      definition[m].style.display = 'block'
    })

  }else{
    contenu[m].style.display = "block"
    definition[m].style.display = 'none'
    sibler.textContent = "Masquer les refrain"
  }
  
 }
})

let paragraphe = document.querySelectorAll('p') 
for (let p = 0; p < paragraphe.length; p++) {
  paragraphe[p].style.margin = "0";
  
}
add