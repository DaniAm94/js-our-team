const displayField = document.querySelector('.row');


// Array contenente i dati; ogni elemento è un membro del team con: nome , lavoro e foto
const team = [
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        pic: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        job: 'Chief Editor',
        pic: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        job: 'Office Manager ',
        pic: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        job: 'Social Media Manager',
        pic: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        pic: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        pic: 'barbara-ramos-graphic-designer.jpg'
    }
];
console.table(team);


// Per mostrare in pagina preparo un template
// Apro un tag ul
let display = '<ul><li>---------</li>';
// Per ogni elemento dell'array
for (let member of team) {
    // Apro un tag li
    display += '<li>';
    // Itero le sue proprietà
    for (let key in member) {
        // Aggiungo la coppia chiave valore al template
        // Se la key è la foto cambio il template per mostrare l'immagine in pagina
        if (key === 'pic') {
            // Aggiungo un tag img
            display += `<img src="img/${member[key]}" alt="${member.name}"><br>`;
        } else {
            display += `<strong>${key}:</strong> ${member[key]}<br>`;
        }
    }
    // Chiudo il tag li
    display += '---------</li>';
}
// Dopo aver iterato tutti gli elementi dell'array chiudo il tag ul
display += '</ul>';

// Inserisco il template in un elemento html
displayField.innerHTML = display;
