//Ici on target la div qu'on a crée dans le html et on crée toutes les couleurs qui vont
//etre dans les carres et les carres en temps que tel

let boiteExo = document.getElementById("container")
let lesCouleurs = ["#10258e", "#38323a", "#1a1723", "#763e21", "#3f9de2", "#c794a3"]
let lesCarres = 500

//Ici on fait une boucle for pour ajouter, a chaque fois que l'on hover sur un carré, une couleur

for(let i = 0; i < lesCarres; i++) {
    let carre = document.createElement('div')
    carre.classList.add('square')

    carre.addEventListener('mouseover', () => setColor(carre))

    carre.addEventListener('mouseout', () => removeColor(carre))

    boiteExo.appendChild(carre)
}

//Ici on fait que la couleur soit mise 

function setColor(element) {
   let couleur = getRandomColor()
   element.style.background = couleur
   element.style.boxShadow = `0 0 2px ${couleur}, 0 0 10px ${couleur}`
}

//Ici on fait que la couleur reviene a celle de base quand on ne hover plus

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

//La nous avons le choix de couleur random en prenant du tableau que l'on a fait au début du fichier js

function getRandomColor() {
    return lesCouleurs[Math.floor(Math.random() * lesCouleurs.length)]
}