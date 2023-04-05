//Inizio del codice JS

/* Commento
multi
linea
*/


const user_name = prompt ("Come ti chiami?");
console.log(`user_name`);
let user_surname = prompt ("Qual e' il tuo cognome?");
console.log(`user_surname`);
let user_color = prompt ("E il tuo colore preferito?");
console.log(`user_color`);
let text = user_name + user_surname + user_color + '2023';
console.log(`text`);
document.getElementById("Pass").innerHTML = `La tua password è: ${text}`;
document.getElementById('Pass').style.color = "#ff0000";