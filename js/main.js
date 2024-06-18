// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// variabili globali
const label = document.querySelector(".flex");




// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const arrDati = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "CEO & Founder",
        "img": "wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome": "Angela",
        "ruolo": "Chief Editor",
        "img": "angela-caroll-chief-editor.jpg"
    },

    {
        "nome": "Walter Gordon",
        "ruolo": "office Manager",
        "img": "walter-gordon-office-manager.jpg"
    },

    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "img": "angela-lopez-social-media-manager.jpg"
    },

    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "img": "scott-estrada-developer.jpg"
    },

    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "img": "barbara-ramos-graphic-designer.jpg"
    }

];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for(let i = 0; i < arrDati.length; i++){
    let personale = arrDati[i];
    console.log(personale.nome,personale.ruolo,personale.img);
    label.innerHTML +=` 
            <div class="col">
                <img  src="img/${personale.img}">
                <h2 class="name">${personale.nome}</h2>
                <h3 class="rule"> ${personale.ruolo}</h3>

            </div>
    `

    
}


// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede