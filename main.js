const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentosRestantes = 3;
let acierto = false;

let intentos = [];

function pedirNumero() {
    while (intentosRestantes > 0 && !acierto) {
        let entrada = prompt(`Adivina el número secreto entre 1 y 10. Tienes ${intentosRestantes} intentos.`);
        let numero = parseInt(entrada);

        if (isNaN(numero) || numero < 1 || numero > 10) {
            alert("Por favor, ingresa un número válido entre 1 y 10.");
            continue;
        }

        intentos.push(numero);
        intentosRestantes--;

        if (numero === numeroSecreto) {
            acierto = true;
            alert("¡Felicidades! Adivinaste el número.");
        } else {
            alert(`Incorrecto. Te quedan ${intentosRestantes} intentos.`);
        }
    }

    if (!acierto) {
        alert(`Lo siento, no adivinaste. El número secreto era ${numeroSecreto}.`);
    }
}

function jugarNuevamente() {
    let jugarDeNuevo = confirm("¿Quieres jugar de nuevo?");
    if (jugarDeNuevo) {
        intentosRestantes = 3;
        acierto = false;
        intentos = [];
        numeroSecreto = Math.floor(Math.random() * 10) + 1;
        pedirNumero();
    } else {
        alert("Gracias por jugar.");
    }
}

pedirNumero();
jugarNuevamente();
