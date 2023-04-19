// En un juego de pelea un personaje utiliza un skill.
// La skill funciona de esta manera:
//  El contrincante recibirá 10 golpes
//  Cada uno de esos golpes proporciona un daño que varia entre 1000 y 2000 de manera aleatoria
//       a.Muestre cual fue el daño recibido por el contrincante en cada golpe
//       b.Muestre el daño total final que el enemigo recibió

let skill = [];
let suma = 0;
for(let i = 1 ; i <= 10 ; i++){

    let random = Math.round(Math.random() * (2000 - 1000) + 1000);
    skill.push(random);

    alert(`Daño recibido: ${random}`);
    suma = suma + random;
}

console.log(`El daño total que recibio el enemigo fue de: ${suma}`);