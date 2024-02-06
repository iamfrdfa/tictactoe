let fields = [
    'circle', null, 'cross',
    'cross', null, 'cross',
    null, 'circle', null
];

function render() {
    const content = document.getElementById("content");
    if (!content) {
        console.error("Container not found!");
        return;
    }
    
    let table = "<table>";
    let index = 0;
    for (let i = 0; i < 3; i++) { //Zeilennummer
        table += "<tr>";
        for (let j = 0; j < 3; j++) { //Feldnummer
            const fieldValue = fields[index++];
            if (fieldValue === 'circle') {
                table += "<td>o</td>";
            } else if (fieldValue === 'cross') {
                table += "<td>x</td>";
            } else {
                table += "<td></td>";
            }
        }
        table += "</tr>";
    }
    table += "</table>";
    content.innerHTML = table;
}

// Aufruf der Funktion
function init() {
    render();
}