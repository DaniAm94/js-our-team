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
let display = '';
// Per ogni elemento dell'array
for (let member of team) {
    // Apro un tag div con classe col e subito un altro div di classe card
    display +=
        `<div class = "col">
    <div class= "card">`;
    // Inerisco il contenuto partendo dall'immagine poi nome poi lavoro
    display += `<img src="img/${member.pic}" alt="${member.name}"><br>
    <div class="name"><strong>${member.name}</strong></div>
    <div class="job">${member.job}</div>`;
    // Chiudo i tag div: col e card
    display += `</div></div>`;
}


// Inserisco il template in un elemento html
displayField.innerHTML = display;
