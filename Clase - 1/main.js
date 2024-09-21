
let CANTIDAD = document.getElementById('cantidad');
let BOTON = document.getElementById('generar');
let CONTRASENA = document.getElementById('contrasena');

const CADENA_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function generar() {
    let NUM_DIGITADO = parseInt(CANTIDAD.value);

    if (NUM_DIGITADO < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return; // Detener ejecución si la condición no se cumple
    }

    let PASS = ""; // Se declara fuera del bucle para acumular los caracteres

    for (let i = 0; i < NUM_DIGITADO; i++) {
        let CHAR_ALEATORIO = CADENA_CHAR[Math.floor(Math.random() * CADENA_CHAR.length)];
        PASS += CHAR_ALEATORIO; // Acumular caracteres aleatorios
    }

    console.log(PASS); // Imprimir la contraseña generada en la consola
    CONTRASENA.value = PASS; // Asignar el valor de la contraseña al input
}

// (BOTON.addEventListener('click', generar); // Añadir evento al botón